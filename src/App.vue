<template>
   <div>
      <Nav />
      <router-view />
   </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
export default {
   name: 'App',
   components: {
      Nav,
   },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
   margin: 0;
   padding: 0;
   font-family: 'Roboto', sans-serif;
}

body {
   min-height: 100vh;
   background-color: rgb(47, 73, 77);
   background-image: linear-gradient(
      315deg,
      rgb(47, 73, 77) 0%,
      rgb(55, 59, 89) 74%
   );
   overflow-x: hidden;
}
</style>
