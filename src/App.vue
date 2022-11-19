<script>

import axios from 'axios';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppCard from './components/AppCard.vue';
import AppSmoke from './components/AppSmoke.vue';
import AppSearch from './components/AppSearch.vue';

export default {
  name: 'App',

  data(){
  return{
    store,
  }
},

  components:{
    AppHeader,
    AppMain,
    AppCard,
    AppSmoke,
    AppSearch,
  },

  methods:{

    getChar(){
      store.isLoaded = false;
      axios.get(store.apiUrl,{
        params:{
          name: store.charToSearch,
          category: store.charCategory,
        }
      })
      .then(result => {
        store.charData = result.data ;
        store.isLoaded = true;
      })
    },

    reset(){
      store.charToSearch = '';
      store.charCategory = '';
      this.getChar();
    }
  },

  mounted(){
   
  }

}



</script>

<template>

  <AppSmoke/>

  <AppHeader title="breaking bad api"/>
  
  <AppSearch @startSearch="getChar()" @reset="reset()"/>

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