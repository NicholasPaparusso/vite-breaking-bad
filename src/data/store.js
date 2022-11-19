import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://www.breakingbadapi.com/api/characters' ,
  charData: [],
  isLoaded : false,
  charToSearch : '',
  charCategory: '',
})