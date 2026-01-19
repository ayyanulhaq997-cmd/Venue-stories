import { useStories } from "@/hooks/use-content";
import { StoryCard } from "@/components/StoryCard";
import { Loader2 } from "lucide-react";

export default function Stories() {
  const { data: stories, isLoading } = useStories();

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs text-primary font-bold mb-4">The Journal</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-6 text-foreground">Stories & Inspiration</h1>
          <p className="text-muted-foreground font-light text-lg">
            Insights, event trends, and behind-the-scenes looks at our exceptional venues.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stories?.map((story, i) => (
              <StoryCard key={story.id} story={story} index={i} />
            ))}
             {stories?.length === 0 && (
              <div className="col-span-full text-center py-20 text-muted-foreground">
                No stories published yet.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
