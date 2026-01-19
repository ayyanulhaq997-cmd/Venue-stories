import { useSpaces } from "@/hooks/use-content";
import { SpaceCard } from "@/components/SpaceCard";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Spaces() {
  const { data: spaces, isLoading } = useSpaces();

  return (
    <div className="min-h-screen pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="text-center mb-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.5em] text-[10px] text-primary font-bold mb-6 italic">The Private Collection</p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-12 tracking-tight">VENUES</h1>
            <div className="w-24 h-[1px] bg-primary/30 mx-auto mb-12" />
            <p className="text-muted-foreground font-light text-xl leading-relaxed tracking-wide italic">
              A curated selection of London's most exceptional private dining rooms, 
              from clandestine wine cellars to sky-bound terraces.
            </p>
          </motion.div>
        </header>

        {isLoading ? (
          <div className="flex justify-center py-40">
            <Loader2 className="w-12 h-12 animate-spin text-primary opacity-50" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {spaces?.map((space, i) => (
              <SpaceCard key={space.id} space={space} index={i} />
            ))}
            {spaces?.length === 0 && (
              <div className="col-span-full text-center py-40 text-muted-foreground font-light tracking-[0.2em] italic">
                Our curators are hand-picking new spaces.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
