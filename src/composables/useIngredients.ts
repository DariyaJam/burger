import { computed, ref } from 'vue'

export interface Ingredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}


export const categoryTitlesData = {

  bun: 'Булки',
  main: 'Начинки',
  sauce: 'Соусы',

}

export const getNavModel = () => {
  const nav: Record<string, { key: string; title: string; isActive: boolean }> = {}
  Object.keys(categoryTitlesData).forEach((key, index) => {
    const typedKey: string = categoryTitlesData[key]
    nav[key] = {
      key: key,
      title: typedKey,
      isActive: !index
    }
  })
  return nav
}


export const useIngredients = (ingredients: Ingredient[]) => {
  const search = ref('')

  const categoryTitles: Record<Ingredient['type'], string> = categoryTitlesData

  const filteredIngredients = computed(() => {
    const query = search.value.trim().toLowerCase()
    if (!query) return ingredients
    return ingredients.filter(item => item.name.toLowerCase().includes(query)
    )
  })

  const ingredientsTypeList = computed(() => {
    const types: Record<Ingredient['type'], Ingredient[]> = {
      bun: [],

      main: [],
      sauce: [],
    }
    filteredIngredients.value.forEach(item => {

      types[item.type].push(item)

    })
    return types
  })

  const getTypes = () => {
    return Object.keys(ingredientsTypeList)
  }

  return {
    search,
    categoryTitles,
    getTypes,
    filteredIngredients,
    ingredientsTypeList
  }
}



