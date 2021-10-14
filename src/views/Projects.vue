<template>
  <div class="container">
      <ProjectCard link="https://cryptic-forest-10925.herokuapp.com/" name="Dev Connector" desc="Social Media site for developers" img="project1.png" />
      <ProjectCard link="https://minidocs.herokuapp.com/" name="Mini Docs" desc="Some google docs clone using SocketsIO" notes="NOTE: At the moment the mongo cluster is down" img="project2.png" />
      <ProjectCard link="https://elegant-easley-561c00.netlify.app/" name="TalkIO" desc="Social Media site in progress" img="project3.png" />
      <ProjectCard link="https://sleepy-stonebraker-7339f3.netlify.app/" name="Covid Tracker" desc="College Project - Data Visualisation" img="project4.png" />
      <ProjectCard link="https://stupefied-swartz-c6888b.netlify.app/" name="Expense Tracker" desc="Expense tracker frontend mockup" img="project5.png" />
      <ProjectCard link="https://nervous-liskov-f073e5.netlify.app/" name="Todo App" desc="Todo app frontend mockup" img="project6.png" />
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
    name: 'Projects',
    components: {
        ProjectCard
    }
}
</script>

<style scoped>

@media screen and (max-width: 900px) {
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0;
        margin: 0 auto 0 auto;
    }
}

.container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto 0 auto;
}
</style>