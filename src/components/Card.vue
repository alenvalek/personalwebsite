<template>
  <div class="card" @click.prevent="handleClick">
    <h3>{{name}}</h3>
    <h5>Project name: {{fullName}}</h5>
    <h5>Description: {{description || '-'}}</h5>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        name: String,
        html_url: String,
        description: String,
        fullName: String
    },
    methods: {
        handleClick() {
            window.location = `${this.html_url}`;
        }
    }
}
</script>
<style scoped>
.card {
    display: flex;
    flex-direction: column;
    background-color: rgb(24, 26, 27);
    margin: 2rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, .5);
    color: white;
    transition: all 1s ease;
}

.card:hover{
    transform: scale(1.1,1.2);
    cursor: pointer;
}
</style>