<script>

export default {
name: 'AppHeader',

props:{ title : String,}
}
</script>

<template>
  <div class="container d-flex py-5 justify-content-center">
    <div class="logo-np">
      <img src="bb-logo.png" alt="logo">
    </div>
    <h1>{{title}}</h1>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;

h1{
  color: $main-color ;
  text-transform: capitalize;
  font-size: 2.5em;
}
  .logo-np{
    width: 50px;
    margin-right: 50px;
  }
</style>