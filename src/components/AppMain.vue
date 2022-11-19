<script>
import { store } from '../data/store'
import AppCard from './AppCard.vue';
import AppSmokeLoading from './AppSmokeLoading.vue';
export default {
name: 'AppMain',

components:{
  AppCard,
  AppSmokeLoading,
},

  data(){
    return{
      store ,
    }
  }
}
</script>

<template>

<div class="container py-3" v-if="store.isLoaded">
  <div class="row row-cols-5">
   
      <AppCard
      v-for="char in store.charData"
      v-show="char.name != 'Holly White' && char.name != 'Skinny Pete' && char.name !='Lydia Rodarte-Quayle'"
      
      :key="char.char_id"
      :card="char"
      />
    
  </div>

</div>

  <div v-else >
    <AppSmokeLoading/>
  </div>

</template>

<style lang="scss" scoped>

</style>