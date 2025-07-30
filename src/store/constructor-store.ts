import { defineStore } from 'pinia'

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
    elements: [1,2,3,4],
    placeholder: 'Выберите начинку'
  },
  {
    code: 'bottom',
    multiple: false,
    elements: [1],
    placeholder: 'Выберите булки'
  },
 /* {
    code: 'test',
    multiple: true,
    elements: [1,2],
    placeholder: "Выбери соус"
  }*/
]

export const useConstructor = defineStore('constructor', () => {

  const myBurger = defaultBurger;

  const getLayer = (code) => myBurger?.find(layer => layer.code === code)

  const addIngredient = (code, id) => {
    const layer = getLayer(code)
    console.log('слой',layer)
    if (!layer) return
    if (layer.multiple) {
      layer.elements.push(id)
    } else {
      layer.elements = [id]
    }
  }

  return {
    myBurger,
    getLayer,
    addIngredient
  }
})