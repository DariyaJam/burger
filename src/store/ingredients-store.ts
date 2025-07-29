import { defineStore } from 'pinia'
import {getIngredientsApi} from '@/api/api.ts'
import {ref} from "vue"

export const useIngredientsData = defineStore('ingredients', () => {

  const ingredientsDataApi = ref( getIngredientsApi());
  return ingredientsDataApi
})