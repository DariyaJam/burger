import { defineStore } from 'pinia'
import { ref } from 'vue'

const defaultBurger = [
  {
    code: 'top',
    multiple: false,
    elements: [1],
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
    elements: [1],
    placeholder: 'Выберите булки'
  }
]

export const useBurger = defineStore(
  'burger', () => {

    const burger = ref([...defaultBurger])
    //const burger = ref(123)

    console.log(burger.value)

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
      console.log(type, id)

       const addingLayers = getBurgerLayersToAdd(type)
      //
      if (addingLayers) {
        const newBurger = [...burger.value]

        console.log('create new burger',newBurger)

        addingLayers.forEach(layerCode => {
          const index = newBurger.findIndex(layer => layer.code === layerCode)

          if (index > -1) {
            const replaceAction = !newBurger[index].multiple;
            console.log('is replace action',replaceAction);


            if(replaceAction){
              newBurger[index].elements = [id]
            }else{
              newBurger[index].elements.push(id)
            }
          }
        });

        burger.value = [...newBurger];



        console.log('changed burger',newBurger)

      }

      /*const layer = getLayer(code)
      console.log('слой',layer)
      if (!layer) return
      if (layer.multiple) {
        layer.elements.push(id)
      } else {
        layer.elements = [id]
      }*/
      /* const layersList = {
         'bun': 'top',
         'sauce': 'main',
         'main': 'main'
       }
       const layer = getLayer(layersList[type])
       console.log('слой', layer)
       if (layer.multiple) {
         layer.elements.push(id)
       } else {
         layer.elements = [id]
       }
   */
    }

    return {
      burger,
      getLayer,
      addIngredient
    }
  })