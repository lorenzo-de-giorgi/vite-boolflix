<template>
    <main>
        <div class="alert alert-danger" v-if="store.error.message">{{ store.error.message }}</div>
        <div class="hero" v-if="store.options.params.query == ''">
            <video src="/images/Creed3-Trailer.mp4" autoplay muted loop></video>
        </div>
        <a class="button-popular" href="#popular" v-if="store.options.params.query == ''"><i class="fa-solid fa-arrow-down"></i></a>
        <div id="popular" class="main" v-if="!store.loading">
            <CardList class="ldg-margin" v-if="store.options.params.query == ''" title="Film Popolari" :list="store.popularMovie" />
            <CardList class="ldg-margin" v-if="store.options.params.query == ''" title="Serie Tv Popolari" :list="store.popularTv" />
            <CardList class="ldg-margin" title="Movies" :list="store.movieList" v-if="store.options.params.query != ''" />
            <CardList class="ldg-margin" title="Tv Series" :list="store.tvList" v-if="store.options.params.query != ''" />
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

    .ldg-margin{
        margin-top: 40px;
    }

    .button-popular{
        position: absolute;
        top: 85%;
        z-index: 1000;
        right: 20px;
        text-decoration: none;
        font-size: 50px;
        color: $red;
    }

    video{
        position: relative;
        margin-top: -200px;
        width: 100%;
    }
</style>