import { useSpaces } from "@/hooks/use-content";
import { SpaceCard } from "@/components/SpaceCard";
import { Loader2 } from "lucide-react";

export default function Spaces() {
  const { data: spaces, isLoading } = useSpaces();

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs text-primary font-bold mb-4">Our Venues</p>
          <h1 className="font-serif text-5xl md:text-6xl mb-6 text-foreground">The Collection</h1>
          <p className="text-muted-foreground font-light text-lg">
            Discover our hand-picked selection of London's finest private dining rooms and event spaces.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaces?.map((space, i) => (
              <SpaceCard key={space.id} space={space} index={i} />
            ))}
            {spaces?.length === 0 && (
              <div className="col-span-full text-center py-20 text-muted-foreground">
                No spaces found. Check back soon.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
