<template>
  <HeaderComponent @searchMedia="getMedia" />
  <MainComponent />
</template>

<script>
  import axios from 'axios';
  import {store} from './store.js';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getMedia(){
        if(this.store.options.params.query){
          this.getMovies();
          this.getTvSeries();
        }
      },
      getMovies(){
        axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) => {
          this.store.movieList = res.data.results;
        })
      },
      getTvSeries(){
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
          this.store.tvList = res.data.results;
        })
      },
      getPopularMovie(){
        axios.get(this.store.apiUrl + this.store.endPoint.popularMovie, this.store.options).then((res) => {
          this.store.popularMovie = res.data.results;
        })
      }
    },
    created() {
      this.getPopularMovie()
    },
  }
</script>

<style lang="scss" scoped>
  .bg-black{
    background-color: black;
  }
</style>