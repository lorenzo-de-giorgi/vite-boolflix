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
          this.store.loading = true;
          this.store.error.message = '';
          Promise.all([this.getMovies(), this.getTvSeries()]).then((res) => {
            this.store.movieList = res[0].data.results;
            this.store.tvList = res[1].data.results;
          }).catch((error) => {
            console.log(error);
            this.store.error.message = error.message;
          }).finally(() => {
            console.log('finally');
            setTimeout(() => {
              this.store.loading = false;
            }, 3000)
          })
          this.getMovies();
          this.getTvSeries();
        }
      },
      getMovies(){
        return axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options)
      },
      getTvSeries(){
        return axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options)
      },
      getPopularMovie(){
        axios.get(this.store.apiUrl + this.store.endPoint.popularMovie, this.store.options).then((res) => {
          this.store.popularMovie = res.data.results;
        })
      },
      getPopularTv(){
        axios.get(this.store.apiUrl + this.store.endPoint.popularTv, this.store.options).then((res) => {
          this.store.popularTv = res.data.results;
        })
      }
    },
    created() {
      this.getPopularMovie();
      this.getPopularTv();
    },
  }
</script>

<style lang="scss" scoped>
  .bg-black{
    background-color: black;
  }
</style>