const config = {
  baseURL: "https://norma.nomoreparties.space/api",
  headers: {
    "Content-Type": "application/json",
  }
}

const checkResponse = (res) => {
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}

export const getIngredientsApi =  () => {
  return fetch(`${config.baseURL}/ingredients`, {
    headers: config.headers,
  }).then((res) => res.json())
}