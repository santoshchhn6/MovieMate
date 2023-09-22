export const fetchData = async (endpoint: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3${endpoint}api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  return await res.json();
};
