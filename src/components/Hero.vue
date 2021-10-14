<template>
   <div class="container-hero">
      <div class="container__left">
         <h1 class="name">Alen Valek</h1>
         <h1 class="text-3xl">
            + Student at
            <span style="color: rgba(100, 255, 255, 1)"
               >Faculty Of Informatics Pula</span
            >
         </h1>

         <h1 class="text-3xl">
            +
            <span style="color: rgba(255, 255, 100, 1)">Personal website</span>
            for a Software Engineering course
         </h1>

         <h1 class="text-3xl">+ Web Dev Connoisseur</h1>
      </div>
      <div class="container__right">
         <img src="@/assets/webdev2.png" />
      </div>
   </div>
</template>

<script>
export default {
   name: 'Hero',
};
</script>

<style scoped>
.container-hero {
   margin-top: 2rem;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   color: white;
}

.container__left {
   flex: 1 1 70%;
   justify-content: center;
   align-items: center;
   margin-left: 2rem;
}

.container__right {
   flex: 1 1 30%;
   justify-content: center;
   align-items: center;
}

.container__right > img {
   height: 500px;
}

.name {
   font-size: 4rem;
}

@media only screen and (max-width: 900px) {
   .container__right {
      display: none;
   }

   .container__left {
      display: flex;
      flex-direction: column;
      align-items: baseline;
   }

   .name {
      font-size: 44px;
   }

   h1 {
      font-size: 16px;
   }
}
</style>
