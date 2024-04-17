<template>
    <h2>Lista Film</h2>
    <CardListMovie />

    <h2>Lista Serie TV</h2>
    <CardListTv />
</template>

<script>
    import CardListMovie from './CardListMovie.vue';
    import CardListTv from './CardListTv.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardListMovie,
            CardListTv
        }
    }
</script>

<style lang="scss" scoped>
    
</style>