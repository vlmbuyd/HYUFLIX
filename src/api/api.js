const key = "a050f3beccdafdbb0b24bfa3ce6e3741";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDUwZjNiZWNjZGFmZGJiMGIyNGJmYTNjZTZlMzc0MSIsInN1YiI6IjY2M2Y4MWU4ZWE5ZjBlNzE0NmMxOWNkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FB7En8B0HHrpdemrYAdWbtLCpZMzsItrRFCZ9IMVipw",
  },
};

export default async function getPopular() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1?api_key=${key}`,
    options
  );
  const data = response.json();
  return data;
}

export async function getNowPlaying() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1?api_key=${key}`,
    options
  );
  const data = response.json();
  return data;
}
