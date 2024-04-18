<template>  
    <div class="container">
        <div class="ldg-container">
            <h2>{{ title }}</h2>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3 ldg-card" v-for="(item, index) in list" :key="item.id">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <CardComponent :image="store.imgUrl + item.backdrop_path"/>
                            </div>
                            <div class="flip-card-back">
                                <h1>Titolo: {{ item.title || item.name }}</h1>
                                <p>Titolo Originale: {{ item.original_title || item.original_name }}</p>
                                <p class="text-center" :class="item.original_language === 'en' ? 'fi fi-gb'  : item.original_language === 'ko' ? 'fi fi-kr': item.original_language === 'ja' ? 'fi fi-jp' : `fi fi-${item.original_language}`"></p>
                                <br>
                                <p class="pb-4" v-for="index in 5" :class="voteToStar(index, fixVote(item.vote_average))"></p>
                            </div>
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
        props: {
            title: String,
            list: Array
        },
        data(){
            return{
                store
            }
        },
        methods: {
            fixVote(vote) {
                return Math.ceil(vote / 2);
            },
            voteToStar(index, vote){
                if(index <= vote){
                    return 'fa-solid fa-star'
                } else {
                    return 'fa-regular fa-star'
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    @import "/node_modules/flag-icons/css/flag-icons.min.css";

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