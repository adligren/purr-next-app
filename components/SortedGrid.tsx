"use client";

import { Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";

type SortItem<T> = {
  label: string;
  f: (a: T, b: T) => number;
};

type SortedGridProps<T> = {
  items: T[];
  render: (item: T) => JSX.Element;
  sort: SortItem<T>[];
};

export default function SortedGrid<T extends WithKey>(
  props: SortedGridProps<T>
) {
  const { items, render, sort } = props;
  const [activeSort, setActiveSort] = useState<SortItem<T>>(sort[0]);
  const cards = items.sort(activeSort.f).map((item) => {
    const component = render(item);
    return <component.type key={item.key} {...component.props} />;
  });
  const sortOptions = sort.map((s) => (
    <Radio
      key={s.label}
      value={s}
      className="group relative flex cursor-pointer py-2 px-5 rounded-full bg-stone-300/20 shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-stone-400 data-[checked]:text-accent"
    >
      <div key={s.label}>{s.label}</div>
    </Radio>
  ));

  return (
    <>
      <div className="relative my-12 w-full max-w-5xl flex flex-wrap gap-2 lg:mt-6 items-center justify-center">
        <div className="before:absolute before:left-0 before:top-1 lg:before:content-['Sorting:'] before:text-2xl before:text-zinc-300"></div>
        <RadioGroup
          value={activeSort}
          onChange={setActiveSort}
          aria-label="Sorting"
          className="flex flex-wrap gap-2 justify-center"
        >
          {sortOptions}
        </RadioGroup>
      </div>

      <div className="max-w-5xl mb-32 flex flex-wrap justify-around lg:justify-between gap-5  after:absolute after:-z-20 after:h-[1640px] after:w-[840px] after:translate-x-[200px] after:bg-gradient-conic after:from-teal-50 after:via-sky-50 after:blur-3xl after:content-[''] after:rotate-12">
        {cards}
      </div>
    </>
  );
}
