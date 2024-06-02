"use client";

import { useEffect, useRef, useState } from "react";
import ImageWithFallback from "./ImageWithFallback";

type CatCardProps = {
  cat: Cat;
};

export default function CatCard(props: CatCardProps) {
  const { cat } = props;
  const elementRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState<number>(0);

  const updatePosition = () => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setX(rect.x);
    }
  };

  useEffect(() => {
    if (elementRef.current) {
      window.addEventListener("resize", updatePosition);
      updatePosition();
      return () => window.removeEventListener("resize", updatePosition);
    }
  }, []);

  return (
    <div className="relative group overflow-hidden shadow-stone-800/20 shadow-xl rounded transition-colors w-[160px]">
      <div className="relative md:after:backdrop-blur-lg after:absolute after:top-0 after:w-full after:h-full after:content-[''] after:group-hover:backdrop-filter-none">
        <ImageWithFallback
          src={`/cat-images/${cat.image}`}
          alt=""
          width={160}
          height={160}
          priority={true}
          fallback={<FallbackImage />}
        />
      </div>
      <div className="absolute top-2 left-2 font-semibold text-accent">
        <span className="text-sm bg-stone-800/75 rounded-full py-1 px-2">
          {cat.cutenessLevel}
        </span>
        <span className="text-xs rounded-full py-1 px-2 inline-block transition-transform group-hover:-translate-y-1 motion-reduce:transform-none text-transparent group-hover:text-accent group-hover:bg-stone-800/75">
          (っᵔ◡ᵔ)っ
        </span>
      </div>

      <div className="bg-zinc-900">
        <div
          ref={elementRef}
          className="bg-gradient-to-r from-teal-950 via-teal-950 to-zinc-950"
          style={{
            backgroundSize: "100vw 100%",
            backgroundPosition: `left -${x}px top`,
          }}
        >
          <p className="py-2 px-4 text-center text-xs text-white tracking-widest truncate">
            {cat.name}
          </p>
        </div>
      </div>
    </div>
  );
}

const FallbackImage = () => {
  return (
    <div className="w-[160px] h-[160px] flex place-items-center place-content-center md:bg-gradient-conic from-slate-400 via-amber-950 to-amber-100 group-hover:bg-none bg-stone-100 text-gray-500">
      <p>Missing image</p>
    </div>
  );
};
