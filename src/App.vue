<template>
  <Navbar />
  <router-view/>
</template>


<script>

import Navbar from './components/Navbar.vue'

export default ({
    setup() {
    },
    components: { Navbar }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  margin: 1% 0.5%;
  -moz-osx-font-smoothing: grayscale;
  
  color: #34495E;
}

</style>
