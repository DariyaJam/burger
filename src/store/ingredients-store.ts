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


    const getIngredients = async (strictUpdate: boolean = false) => {


      if (ingredientsApi.value === null || strictUpdate) {
        const response = await getIngredientsApi()
        ingredientsApi.value = response.data
        sortIngredientsByType()

        ingredients.value = sortedIngredients.value
      }
      console.log('Ингридиенты', ingredients.value)
      return ingredients.value
    }

    const getIngredient =  (ingredientId) => {
      if(ingredientsApi.value) {
        const tempIngredients = [...ingredientsApi.value];
       /* console.log('get ingredient', ingredientId, ingredientsApi.value)*/
      /*  console.log(ingredientsApi.value?.find(ingredient => ingredient?._id === ingredientId))*/


        return ingredientsApi.value?.find(ingredient => ingredient?._id === ingredientId) || {}
      }
      return  {}
    }

    return {
      ingredientsTitles,
      ingredients,
      sortedIngredients,
      getIngredients,
      sortIngredientsByType,
      getIngredient
    }
  }
)