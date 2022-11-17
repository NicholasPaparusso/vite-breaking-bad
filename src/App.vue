<script>

import axios from 'axios';
import { getChar } from './data/function';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppCard from './components/AppCard.vue';
import AppSmoke from './components/AppSmoke.vue';


export default {
  name: 'App',

  data(){
  return{
    store,
    getChar
  }
},

  components:{
    AppHeader,
    AppMain,
    AppCard,
    AppSmoke,
  },

  methods:{
  },

  mounted(){
    this.getChar(store, axios)
  }

}



</script>

<template>

  <AppSmoke/>

  <AppHeader title="breaking bad api"/>

  <div class="container px-5 py-2">
    <div class="np-btn" @click="store.isLoaded = !store.isLoaded">
      <h5>Carica Personaggi</h5> 
    </div>
  </div>
  
  <AppMain/>

</template>

<style lang="scss">

@use './styles/generals.scss';
@use './styles/partials/vars' as * ;

  .np-btn{
    color: $main-color;
    display: inline-block;
    padding: 7px 10px;
    border-radius: 20px ;
    border: 1px solid black;
    cursor: pointer;
    transition: all 1s linear;
    &:hover{
      border: 1px solid $main-color;
    }
  }

</style>