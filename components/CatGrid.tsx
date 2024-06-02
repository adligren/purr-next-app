"use client";

import catData from "../api/catdata.json";
import SortedGrid from "@/components/SortedGrid";
import CatCard from "@/components/CatCard";

export default function CatGrid() {
  const items = catData.cats.map((cat, index) => ({
    key: JSON.stringify(cat),
    index,
    ...cat,
  }));
  return (
    <SortedGrid<Cat & WithKey & WithIndex>
      items={items}
      render={(cat) => <CatCard key={cat.name} cat={cat} />}
      sort={[
        { label: "No sorting", f: (a, b) => a.index - b.index },
        { label: "Much cute", f: (a, b) => b.cutenessLevel - a.cutenessLevel },
        { label: "Not cute", f: (a, b) => a.cutenessLevel - b.cutenessLevel },
      ]}
    />
  );
}
