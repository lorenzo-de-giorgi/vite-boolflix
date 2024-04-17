<template>  
    <div class="container">
        <div class="ldg-container">
            <div class="col-12 col-md-6 col-lg-3 ldg-card" v-for="movie in store.movieList">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <CardComponent :image="store.imgUrl + movie.backdrop_path"/>
                        </div>
                        <div class="flip-card-back">
                            <h1>Titolo: {{ movie.title }}</h1>
                            <p>Titolo Originale: {{ movie.original_title }}</p>
                            <p>Lingua Originae: {{ movie.original_language }}</p>
                            <p>Voto: {{ movie.vote_average }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardListMovie',
        components:{
            CardComponent,
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    .ldg-container{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .ldg-card{
        padding: 5px;
    }

    .flip-card {
        background-color: transparent;
        width: 300px;
        height: 168.75px;
        perspective: 1000px;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.5s;
        transform-style: preserve-3d;
    }

    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }

    .flip-card-back {
        background-color: $black;
        color: $white;
        transform: rotateY(180deg);
    }

    h1{
        font-size: 19px;
        color: $red;
    }

    p{
        font-size: 13px;
    }
</style>