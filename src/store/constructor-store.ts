import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useIngredientsData } from '@/store/ingredients-store.ts'
import { getIngredientsApi } from '@/api/api.ts'


const defaultBurger = [
  {
    code: 'top',
    multiple: false,
    elements: [],
    placeholder: 'Выберите булки'
  },
  {
    code: 'main',
    multiple: true,
    elements: [],
    placeholder: 'Выберите начинку'
  },
  {
    code: 'bottom',
    multiple: false,
    elements: [],
    placeholder: 'Выберите булки'
  }
]

export const useBurger = defineStore(
  'burger', () => {

    const ingredients = useIngredientsData()

    const initialized = ref(false)
    const burger = ref(null)

    const burgerComplete = () => burger.value?.reduce((completeVal, layer) => completeVal && layer.elements.length > 0, true)

    /*   const getBurgerPrice1 = () => {
         let sum = 0

         burger.value?.forEach((layer) => {
           layer.elements.forEach(id => {
             const ingredient = ingredients.getIngredient(id)
             if (ingredient && ingredient.price) {
               sum += Number(ingredient.price)
             }
           })
         })

         return sum
       }*/

    const getBurgerPrice = () =>
      burger.value?.reduce(
        (burgerSum, layer) =>
          burgerSum +
          layer?.elements.reduce(
            (layerSum, elementId) =>
              layerSum + Number(ingredients.getIngredient(elementId)?.price || 0),
            0
          ),
        0
      ) ?? 0


    const deleteIngredient = (index) => {

      console.log('Удаляем', index)
      console.log('Было', burger.value)


      const newBurger = burger.value.map(layer => layer.code === 'main' ?
        { ...layer, elements: layer.elements.filter((_, itemIndex) => index !== itemIndex) }
        : layer
      )


      saveToStore(newBurger)
      burger.value = [...newBurger] // <- ключевой момент — перезаписываем, чтобы был реактивный update


    }


    const initBurger = async () => {

      if (!initialized.value) {
        await ingredients.getIngredients()
        const storageBurger = localStorage.getItem('burger') ? JSON.parse(localStorage.getItem('burger')) || {} : {}
        const burgerModel = [...defaultBurger]

        if (Object.keys(storageBurger).length > 0) {

          Object.entries(storageBurger).forEach(([key, elements]) => {
            const layerIndex = burgerModel.findIndex(layer => layer.code === key)

            if (layerIndex > -1) {
              /*const layer = storageBurger[layerIndex]*/
              /*   console.log('layer',layer)*/
              Array.from(storageBurger[key]).forEach(ingredientId => {
                if (ingredients.getIngredient(ingredientId)._id === ingredientId) {
                  burgerModel[layerIndex]['elements'].push(ingredientId)
                }


              })
            }
          })
        }
        burger.value = burgerModel
        initialized.value = true

      }

    }


    const getLayer = (code) => burger?.value?.find(layer => layer.code === code)

    const getLayersRules = () => {
      return {
        bun: ['top', 'bottom'],
        sauce: ['main'],
        main: ['main']
      }
    }

    const getBurgerLayersToAdd = (type) => {
      return getLayersRules()[type] || false
    }

    const getMyBurgerLayer = (type) => {
      return getLayersRules()[type] || false
    }


    const addIngredient = (type, id) => {


      const addingLayers = getBurgerLayersToAdd(type)
      if (addingLayers) {
        const newBurger = [...burger.value]


        addingLayers.forEach(layerCode => {
          const index = newBurger.findIndex(layer => layer.code === layerCode)

          if (index > -1) {
            const replaceAction = !newBurger[index].multiple


            if (replaceAction) {
              newBurger[index].elements = [id]
            } else {
              newBurger[index].elements.push(id)
            }
          }
        })


        saveToStore(newBurger)


        burger.value = [...newBurger]


      }


    }

    const saveToStore = (model) => {
      const storeData = {}
      Object.entries(model).forEach(([key, value]) => {
        storeData[value.code] = value.elements
      })

      localStorage.setItem('burger', JSON.stringify(storeData))
    }

    return {
      burger,
      initBurger,
      getLayer,
      addIngredient,
      deleteIngredient,
      getBurgerPrice,
      burgerComplete
    }
  })