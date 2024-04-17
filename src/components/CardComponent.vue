<template>
    <div class="d-flex">
        <img :src="image" class="card-img-top">
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props:['image'],
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;

</style>