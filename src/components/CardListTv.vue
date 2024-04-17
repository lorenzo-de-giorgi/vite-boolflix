<template>  
    <div class="container">
        <div class="ldg-container">
            <div class="col-12 col-md-6 col-lg-3 ldg-card" v-for="tv in store.tvList">
                <CardComponent :image="store.imgUrl + tv.backdrop_path"/>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardListTv',
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
</style>