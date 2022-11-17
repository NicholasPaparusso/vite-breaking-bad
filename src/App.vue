<script>

import 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppCard from './components/AppCard.vue';
import AppSmoke from './components/AppSmoke.vue'

export default {
  name: 'App',

  components:{
    AppHeader,
    AppMain,
    AppCard,
    AppSmoke,
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