<script>

import { store } from '../data/store' ;

export default {
  name: 'AppSearch.vue',

  data(){
    return{
      store ,
    }
  }
}
</script>

<template>
  
  <div class="container px-5 py-2">
    <div class="row">

      <div class="col-3 
      
      ">
        <input v-model="store.charToSearch"
         type="text" class="form-control np-input-text" placeholder="Search Character">
      </div>

      <div class="col-2 ">
        <select v-model="store.charCategory"
         class="form-select np-select" aria-label="Default">
          <option value="">Seleziona serie TV</option>
          <option value="Breaking Bad">Breaking Bad</option>
          <option value="Better Call Saul">Better Call Saul</option>
        </select>
      </div>

      <div class="col-3 d-flex gap-3">
        <div class="np-btn" @click="$emit('startSearch')">
           <h6>Carica Personaggi</h6> 
        </div>

        <div class="np-btn" @click="$emit('reset')">
           <h6>Reset</h6> 
        </div>
      </div>


      <div class="col-3">
        <h5>
          Personaggi Stampati: {{store.charData.length}}
        </h5>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../styles/generals.scss';
@use '../styles/partials/vars' as * ;

  .np-btn{
    color: $main-color;
    display: inline-block;
    height: 40px;
    line-height: 20px;
    padding: 10px 10px;
    border-radius: 20px ;
    border: 1px solid black;
    cursor: pointer;
    transition: all 1s linear;
    &:hover{
      border: 1px solid $main-color;
    }
  }

  .np-input-text, .np-select{
    background-color: transparent ;
    border-color: $main-color ;
    color: $main-color;

    &::placeholder{
      background-color: transparent ;
      border-color: $main-color ;
      color: $main-color;
    }

   &:focus{
    background-color: transparent ;
    border-color: $main-color ;
    color: $main-color;
   }
   
  }

  .np-select option{
    background-color: black ;
  }

  h5{
    color: $main-color;
  }

</style>