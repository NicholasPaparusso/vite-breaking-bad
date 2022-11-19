<script>
export default {
name: 'AppCard',

props:{
  card : Object,
}
}
</script>

<template>
  <div class="col">

      <div class="np-card">
      <img :src="card.img" :alt="card.name">
      <h4>{{card.name}}</h4>
      <p>{{card.category}}</p>
      <p>{{card.status}}</p>
    </div>

  </div>
</template>

<style lang="scss" scoped>

@use '../styles/partials/vars' as *;
  .np-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $main-color;
    padding: 10px;
    text-align: center;

    img{
      width: 200px;
      height: 270px;
      border: 1px solid lighten($main-color, 30%);
      object-fit: cover;
      transition: all .2s linear;
      cursor: pointer;
      &:hover{
        transform: scale(1.05);
      }
    }
  }

</style>


