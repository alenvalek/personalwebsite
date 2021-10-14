<template>
   <div class="container">
      <h1 style="color: white;">GitHub repos</h1>
      <div class="card__container">
         <div v-if="repos" class="list__container">
            <ul class="card" v-for="repo in repos" :key="repo.id">
               <Card
                  :name="repo.name"
                  :fullName="repo.full_name"
                  :description="repo.description"
                  :avatar_url="repo.avatar_url"
                  :html_url="repo.html_url"
               />
            </ul>
         </div>
         <div v-else-if="repos.length == 0">
            <h1 style="color: white; margin: 10rem;">No repos avaliable :/</h1>
         </div>
         <div>
            <fa
               style="font-size: 10rem; color: green; margin-top: 5rem;"
               icon="spinner"
               spin
            />
         </div>
      </div>
   </div>
</template>

<script>
import axios from 'axios';
import Card from '@/components/Card.vue';

export default {
   name: 'Projects',
   data() {
      return {
         repos: [],
      };
   },
   components: {
      Card,
   },
   async created() {
      const res = await axios.get(
         'https://api.github.com/users/alenvalek/repos'
      );
      this.repos = res.data;
   },
};
</script>

<style scoped>
.card__container {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   max-width: 100%;
}

.container {
   text-align: center;
   margin-top: 1rem;
   max-width: 100%;
}

.list__container {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   max-width: 100%;
}
</style>
