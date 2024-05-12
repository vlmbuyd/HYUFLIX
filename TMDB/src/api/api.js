export default async function getData() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/157336?api_key=a050f3beccdafdbb0b24bfa3ce6e3741"
  );
  const data = response.json();
  return data;
}
