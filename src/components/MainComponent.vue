<template>
    <main>
        <div class="alert alert-danger" v-if="store.error.message">{{ store.error.message }}</div>
        <div v-if="!store.loading">
            <CardList v-if="store.options.params.query == ''" title="Film Popolari" :list="store.popularMovie" />
            <CardList title="Movies" :list="store.movieList" />
            <CardList title="Tv Series" :list="store.tvList" />
        </div>
        <div v-else>
            <ApiLoader />
        </div>
    </main>
</template>

<script>
    import { store } from '../store.js';
    import CardList from './CardList.vue';
    import ApiLoader from './ApiLoader.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardList,
            ApiLoader
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
</style>