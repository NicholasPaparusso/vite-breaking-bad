<script>

import 'axios';
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppCard from './components/AppCard.vue';
import AppSmoke from './components/AppSmoke.vue';
import axios from 'axios';

export default {
  name: 'App',

  data(){
  return{
    store
  }
},

  components:{
    AppHeader,
    AppMain,
    AppCard,
    AppSmoke,
  },

  methods:{

    getChar(){
      store.isLoaded = false;
      axios.get(store.apiUrl)
      .then(result =>{
        store.charData = result.data;
        store.isLoaded = true;
      })
    }

  },

  mounted(){
    this.getChar()
  }

}



</script>

<template>

  <AppSmoke/>

  <AppHeader/>

  <AppMain/>

</template>

<style lang="scss">

@use './styles/generals.scss';

</style>