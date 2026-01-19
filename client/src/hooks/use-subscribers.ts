import { useMutation } from "@tanstack/react-query";
import { api, type SubscriberInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateSubscriber() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: SubscriberInput) => {
      const validated = api.subscribers.create.input.parse(data);
      const res = await fetch(api.subscribers.create.path, {
        method: api.subscribers.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.subscribers.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        if (res.status === 409) {
          throw new Error('You are already subscribed.');
        }
        throw new Error('Failed to subscribe');
      }
      return api.subscribers.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Subscribed",
        description: "You have been added to our newsletter.",
      });
    },
    onError: (error) => {
      toast({
        title: "Subscription Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
