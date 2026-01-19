import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

// === SPACES ===
export function useSpaces() {
  return useQuery({
    queryKey: [api.spaces.list.path],
    queryFn: async () => {
      const res = await fetch(api.spaces.list.path, { credentials: "include" });
      if (!res.ok) throw new Error('Failed to fetch spaces');
      return api.spaces.list.responses[200].parse(await res.json());
    },
  });
}

export function useSpace(slug: string) {
  return useQuery({
    queryKey: [api.spaces.get.path, slug],
    queryFn: async () => {
      const url = buildUrl(api.spaces.get.path, { slug });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error('Failed to fetch space');
      return api.spaces.get.responses[200].parse(await res.json());
    },
    enabled: !!slug,
  });
}

// === STORIES ===
export function useStories() {
  return useQuery({
    queryKey: [api.stories.list.path],
    queryFn: async () => {
      const res = await fetch(api.stories.list.path, { credentials: "include" });
      if (!res.ok) throw new Error('Failed to fetch stories');
      return api.stories.list.responses[200].parse(await res.json());
    },
  });
}

export function useStory(slug: string) {
  return useQuery({
    queryKey: [api.stories.get.path, slug],
    queryFn: async () => {
      const url = buildUrl(api.stories.get.path, { slug });
      const res = await fetch(url, { credentials: "include" });
      if (res.status === 404) return null;
      if (!res.ok) throw new Error('Failed to fetch story');
      return api.stories.get.responses[200].parse(await res.json());
    },
    enabled: !!slug,
  });
}
