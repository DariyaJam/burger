const config = {
  baseURL: "https://norma.nomoreparties.space/api",
  headers: {
    "Content-Type": "application/json",
  }
}

export const getIngredientsApi =  () => {
  return fetch(`${config.baseURL}/ingredients`, {
    headers: config.headers,
  }).then((ingredientsDataApi) => ingredientsDataApi.json())
}