<template>
   <div>
      <Hero />
      <div class="github__card">
         <h1 style="text-align: center;">Github information</h1>
         <div class="github__card__info" @click.prevent="handleClick">
            <img
               :src="gitData.avatar_url"
               style="height: 100px; width: 100px; border-radius: 50% !important; margin-right: 2rem; border: 2px solid rgb(137, 198, 255); padding: .2rem;"
            />
            <div class="github__card__info__right" v-if="gitData">
               <h4>
                  <span style="color: rgb(137, 198, 255); font-weight: 600;"
                     >Username:</span
                  >
                  {{ gitData.login }}
               </h4>
               <h4>
                  <span style="color: rgb(137, 198, 255); font-weight: 600;"
                     >Public repos:</span
                  >
                  {{ gitData.public_repos }}
               </h4>
               <h4>
                  <span style="color: rgb(137, 198, 255); font-weight: 600;"
                     >Created at:</span
                  >
                  {{ new Date(gitData.created_at).toUTCString() }}
               </h4>
               <h4>
                  <span style="color: rgb(137, 198, 255); font-weight: 600;"
                     >Updated at:</span
                  >
                  {{ new Date(gitData.updated_at).toUTCString() }}
               </h4>
            </div>
         </div>
      </div>
      <div class="socials">
         <a
            href="https://www.youtube.com/channel/UCliAJO7-8oBOTjODslSH50A"
            target="_blank"
            ><fa class="youtube" :icon="['fab', 'youtube']"
         /></a>
         <a href="https://github.com/alenvalek" target="_blank"
            ><fa class="github" :icon="['fab', 'github']"
         /></a>
         <a href="https://instagram.com/alenvalek" target="_blank"
            ><fa class="instagram" :icon="['fab', 'instagram']"
         /></a>
      </div>
   </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import axios from 'axios';

export default {
   name: 'Home',
   components: {
      Hero,
   },
   data() {
      return {
         gitData: null,
      };
   },
   methods: {
      handleClick() {
         window.location = `${this.gitData.html_url}`;
      },
   },
   async created() {
      const res = await axios.get('https://api.github.com/users/alenvalek');
      this.gitData = res.data;
   },
};
</script>

<style scoped>
.github__card {
   margin-top: 3rem !important;
   background-color: rgb(24, 26, 27);
   color: white;
   border-radius: 2rem;
   padding: 2rem;
   justify-content: center;
   align-items: center;
   width: 50%;
   margin: 1rem auto;
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
   transition: all 1s ease;
   max-width: 100% !important;
}

.github__card:hover {
   transform: scale(1.2, 1.2);
   cursor: pointer;
}

.github__card__info {
   display: flex;
   align-items: center;
}

.github__card__info__right {
   margin-left: 1rem;
}

.socials {
   width: 100%;
   color: white;
   margin: 2rem;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   font-size: 3rem;
}

.socials > a {
   text-decoration: none;
   color: white;
}

.socials > a:visited {
   text-decoration: none;
   color: white;
}

.socials > a:active {
   text-decoration: none;
   color: white;
}

.instagram {
   transition: all 0.3s ease;
}

.instagram:hover {
   cursor: pointer;
   color: #e1306c;
   transform: scale(1.2, 1.2);
}

.youtube {
   transition: all 0.3s ease;
}

.youtube:hover {
   cursor: pointer;
   color: #c4302b;
   transform: scale(1.2, 1.2);
}

.github {
   transition: all 0.3s ease;
}

.github:hover {
   cursor: pointer;
   color: #6e5494;
   transform: scale(1.2, 1.2);
}

h4 {
   font-weight: 500;
}

@media only screen and (max-width: 900px) {
   .github__card {
      min-width: 80%;
      border-radius: 0;
   }
   .github__card:hover {
      transform: scale(1, 1);
   }
   .github__card__info__right {
      margin: 0;
   }
}
</style>
