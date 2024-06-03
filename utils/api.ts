const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const fetchCats = async (): Promise<Cat[]> => {
  const data = await fetch(`${API_URL}/cats`);
  const { cats } = await data.json();
  return cats;
};
