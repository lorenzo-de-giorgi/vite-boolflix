<template>  
    <div class="container">
        <div class="ldg-container">
            <h2>{{ title }}</h2>
            <div class="ldg-flex scrollbar" :ref="title">
                <div class="mycol" v-for="(item, index) in list" :key="item.id">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <CardComponent v-if="item.backdrop_path != null" :image="store.imgUrl + item.backdrop_path"/>
                                <img v-else src="../assets/img/back-drop.jpg" alt="">
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
            <div class="ldg-btn-center">
                <button @click="scrollBack"><i class="fa-solid fa-arrow-left"></i></button>
                <button @click="scrollNext"><i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
    import { store } from '../store.js';
    import CardComponent from './CardComponent.vue';
    import ApiLoader from './ApiLoader.vue';
    export default {
        name: 'CardListMovie',
        components:{
            CardComponent,
            ApiLoader
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
            },
            scrollBack(){
                const element = this.$refs[this.title];
                element.scrollBy({
                    left: -900,
                    behavior: 'smooth'
                })
            },
            scrollNext(){
                const element = this.$refs[this.title];
                element.scrollBy({
                    left: 900,
                    behavior: 'smooth'
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;
    @import "/node_modules/flag-icons/css/flag-icons.min.css";

    h2{
        color: $red;
    }

    img{
        width: 300px;
    }

    .mycol{
        width: 300px;
    }

    .ldg-flex{
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
    }

    .ldg-container{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .ldg-card{
        padding: 5px;
    }

    .ldg-btn-center{
        margin: 0 auto;
        margin-top: 20px;
    }

    button{
        margin-left: 30px;
        background-color: $gray; 
        border: 2px solid $black;
        color: $red;
        padding: 0px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 30px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 50%;
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

    // scrollbar
    .scrollbar::-webkit-scrollbar-track{
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: $black;
        
    }

    .scrollbar::-webkit-scrollbar{
        width: 6px;
        background-color: $gray;
    }

    .scrollbar::-webkit-scrollbar-thumb{
	    background-color: $red;
        border-radius: 20px;
    }
</style>