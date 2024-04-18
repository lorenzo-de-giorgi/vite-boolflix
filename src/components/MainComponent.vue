<template>
    <main>
        <CardList title="Movies" :list="store.movieList" />
        <CardList title="Tv Series" :list="store.tvList" />
    </main>
</template>

<script>
    import { store } from '../store.js';
    import CardList from './CardList.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardList
        },
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>

    main{
        padding-top: 90px;
    }
</style>