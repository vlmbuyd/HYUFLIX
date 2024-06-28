const key = "a050f3beccdafdbb0b24bfa3ce6e3741";

const pageOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDUwZjNiZWNjZGFmZGJiMGIyNGJmYTNjZTZlMzc0MSIsInN1YiI6IjY2M2Y4MWU4ZWE5ZjBlNzE0NmMxOWNkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FB7En8B0HHrpdemrYAdWbtLCpZMzsItrRFCZ9IMVipw",
  },
};

const serachOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDUwZjNiZWNjZGFmZGJiMGIyNGJmYTNjZTZlMzc0MSIsIm5iZiI6MTcxOTM4MTIzMC43MTQyMTIsInN1YiI6IjY2M2Y4MWU4ZWE5ZjBlNzE0NmMxOWNkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kfo0zEZRq_7dpMl9JdDcvJv0PHV9_G70u8_ljWcSryk",
  },
};

const detailOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDUwZjNiZWNjZGFmZGJiMGIyNGJmYTNjZTZlMzc0MSIsIm5iZiI6MTcxOTQ5ODEwOC43MDE1MDcsInN1YiI6IjY2M2Y4MWU4ZWE5ZjBlNzE0NmMxOWNkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TXfXeo1dih_-dOhFOmuYtqBgGCQXr71nUTc57VA3G38",
  },
};

const popular = {
  name: "popular",
  url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1?",
};

const nowPlaying = {
  name: "nowplaying",
  url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1?",
};

const topRated = {
  name: "toprated",
  url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1?",
};

const upComing = {
  name: "upcoming",
  url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1?",
};

function getIndex(index) {
  const result =
    index === popular.name
      ? popular.url
      : index === nowPlaying.name
      ? nowPlaying.url
      : index === topRated.name
      ? topRated.url
      : index === upComing.name
      ? upComing.url
      : undefined;
  return result;
}

export const getAPI = async (index) => {
  const response = await fetch(`${getIndex(index)}api_key=${key}`, pageOptions);
  const data = response.json();
  return data;
};

export const getSearch = async (title) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${key}`,
    serachOptions
  );
  const data = response.json();
  return data;
};

export const getDetail = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    // `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`
    // `https://api.themoviedb.org/3/movie/1022789?&append_to_response=videos&api_key=a050f3beccdafdbb0b24bfa3ce6e3741`
    detailOptions
  );
  const data = response.json();
  return data;
};

export const getCredit = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    detailOptions
  );
  const data = response.json();
  return data;
};

//1022789
