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

export const signUp = async (inputValue) => {
  const response = await fetch("http://localhost:8080/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputValue),
  });
  const data = await response.json();
  return data;
};

export const getToken = async (inputValue) => {
  const respose = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputValue),
  });

  if (!respose.ok) {
    throw new Error("error");
  }

  const data = await respose.json();
  return data;
};

export const getData = async (index, page) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${index}?language=en-US&page=${page}?`,
    pageOptions
  );
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
