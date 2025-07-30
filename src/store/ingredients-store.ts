import { defineStore } from 'pinia'
import { getIngredientsApi } from '@/api/api.ts'
import { ref } from 'vue'

export const useIngredientsData = defineStore('ingredients', () => {


    const ingredientsApi = ref(null)
    const sortedIngredients = ref({})
    const ingredients = ref({})

    const ingredientsTitles = {
      bun: 'Булки',
      main: 'Начинки',
      sauce: 'Соусы'
    }


    const sortIngredientsByType = () => {
      const grouped = {}
      if (!ingredientsApi.value) return

      for (const item of ingredientsApi.value) {
        const type = item.type
        if (!grouped[type]) {
          grouped[type] = []
        }
        grouped[type].push(item)
      }
      sortedIngredients.value = grouped
      return sortedIngredients
    }


    const getIngredients = async (stictUpdate: boolean = false) => {
      console.log('get ingredients from store')

      if (ingredientsApi.value === null || stictUpdate) {
        const response = await getIngredientsApi()
        ingredientsApi.value = response.data
        sortIngredientsByType()

        ingredients.value = sortedIngredients.value
        console.log('ингридиенты', ingredients.value)
      }
      return ingredients.value
    }

    return {
      ingredientsTitles,
      ingredients,
      getIngredients,
      sortedIngredients,
      sortIngredientsByType
    }
  }
)