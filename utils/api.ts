const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export const fetchCats = async (): Promise<Cat[]> => {
  const data = await fetch(`${API_URL}/cats`);
  const { cats } = await data.json();
  return cats;
};
