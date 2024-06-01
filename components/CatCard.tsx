import ImageWithFallback from "./ImageWithFallback";

export const CatCard = ({ cat }: { cat: Cat }) => {
  return (
    <div className="relative group overflow-hidden shadow-stone-800/20 shadow-xl rounded transition-colors w-[160px]">
      <div className="absolute top-2 left-2 font-semibold text-accent">
        <span className="text-sm bg-stone-300/75 rounded-full py-1 px-2">{cat.cutenessLevel}</span>
        <span className="text-xs rounded-full py-1 px-2 inline-block transition-transform group-hover:-translate-y-1 motion-reduce:transform-none text-transparent group-hover:text-accent group-hover:bg-stone-300/75">
          (っᵔ◡ᵔ)っ
        </span>
      </div>
      <ImageWithFallback
        src={`/cat-images/${cat.image}`}
        alt=""
        width={160}
        height={160}
        priority={true}
        fallback={<FallbackImage />}
      />
      <div className="bg-gradient-15 from-zinc-800/95 via-zinc-900/95 to-zinc-700/95">
        <p className="py-2 px-4 text-center text-xs text-white tracking-widest truncate">{cat.name}</p>
      </div>
    </div>
  );
};

const FallbackImage = () => {
  return (
    <div className="w-[160px] h-[160px] flex place-items-center place-content-center bg-stone-200 text-gray-500">
      <p>Missing image</p>
    </div>
  );
};
