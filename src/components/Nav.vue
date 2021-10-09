<template>
  <div class="container">
      <h2 class="links" style="color:white;" @click.prevent="this.$router.replace({name: 'Home'})">Alen Valek</h2>
      <ul class="nav">
          <li><router-link class="links" :to="{ name: 'Home'}">Home</router-link></li>
          <li><router-link class="links" :to="{ name: 'Projects'}">Projects</router-link></li>
          <li><router-link class="links" :to="{ name: 'Repos'}">Repos</router-link></li>
          <li class="btn"><a href="mailto:avalek@student.unipu.hr">Contact me</a></li>
      </ul>
  </div>
</template>

<script>
export default {
    name: "Nav",
}
</script>

<style scoped>

.container {
    background-color: rgb(24, 26, 27);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav {
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
}

li {
    margin-right: 1rem;
}

.links {
    text-decoration: none;
    color: rgb(137, 198, 255);
}

.links:hover {
    text-decoration: underline rgb(154, 118, 221);
    text-underline-offset: .2rem;
    text-decoration-thickness: .2rem;
    cursor: pointer;
}

.btn {
    background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
    padding: .4rem;
    border-radius: .4rem;
    transition: all .5s ease;
}

.btn > a {
    color: white;
    text-decoration: none;
}

.btn:hover {
    opacity: .5;
    cursor: pointer;
    padding-left: 1rem;
}

</style>>
