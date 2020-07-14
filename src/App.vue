<template>
  <div id="app">
      <!-- navbar -->
      <app-header></app-header>
  </div>
</template>


<script>
import header from './components/header';
import foryou from './components/Foryou';


export default {
  name: 'App',
  components:{ 
    'app-header':header,
  }
}
</script>

<style>