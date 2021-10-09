<template>
    <a :href="link" target="_blank">
        <div class="container">
            <h2>{{name}}</h2>
            <img :src="require(`@/assets/${img}`)"/>
            <p>{{desc}}</p>
            <p><strong>{{notes}}</strong></p>
        </div>
    </a>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: ['name', 'img', 'desc', 'link', 'notes']
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    background-color: rgb(24, 26, 27);
    margin: 3rem;
    padding: 2rem;
    border-radius: 1rem;
    color: white;
    transition: all .5s ease;
}

.container:hover{
    transform: scale(1.1,1.1);
    cursor: pointer;
}

@media screen and (max-width: 900px) {
    .container {
        border-radius: 0;
        width: fit-content;
        justify-content: center;
        align-items: center;
    }

    .container:hover{
        transform: scale(1,1);
        cursor: pointer;
    }
}

.container > img {
    margin-top: 1rem;
    max-width: 400px;
    height: auto;
    width: auto;
    }

.container > p {
    margin-top: 1rem;
}

a {
    text-decoration: none;
    color: white;
}

a:visited {
    text-decoration: none;
    color: white;
}

a:active {
    text-decoration: none;
    color: white;
}


</style>