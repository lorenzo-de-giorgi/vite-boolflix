<template>
    <main class="bg-gray">
        <CardList v-if="store.options.params.query == ''" title="Film Popolari" :list="store.popularMovie" />
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
    @use '../assets/styles/partials/variables.scss' as *;
    main{
        padding-top: 90px;
    }

    .bg-gray{
        background-color: $gray;
        width: 100%;
        height: 100%;
    }
</style>