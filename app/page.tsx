import { CatCard } from "@/components/CatCard";
import catData from "../api/catdata.json";

export default function Home() {
  const catCards = catData.cats.map((cat) => (
    <CatCard key={cat.name} cat={cat} />
  ));
  return (
    <main className="relative flex min-h-screen flex-col items-center p-20 lg:py-12 overflow-hidden">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:bg-none lg:static lg:w-auto lg:border-none">
          <h1 className="relative text-xl font-bold text-amber-950 z-[-1] flex place-items-center align-text-top lg:text-3xl before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white/50 before:to-transparent before:blur-3xl before:content-['']">
            <span>Cats Incorpurrate</span>
            <span className="after:absolute after:top-0 after:content-['™']"></span>
          </h1>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:size-auto lg:bg-none">
          By Adam Wigren
        </div>
      </div>

      <div className="my-12 w-full max-w-5xl flex gap-5 lg:mt-6 items-center justify-center">
        <div className="text-xl text-zinc-900 font-bold">Sorting placeholder</div>
        <div className="p-2">None</div>
        <div className="p-2 text-accent underline">Much cute</div>
        <div className="p-2">Not cute</div>
      </div>

      <div className="max-w-5xl mb-32 flex flex-wrap justify-around lg:justify-between gap-5  after:absolute after:-z-20 after:h-[1640px] after:w-[840px] after:translate-x-[200px] after:bg-gradient-conic after:from-teal-50 after:via-sky-50 after:blur-3xl after:content-[''] after:rotate-12">
        {catCards}
      </div>
    </main>
  );
}
