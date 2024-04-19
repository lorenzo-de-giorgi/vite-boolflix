import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie: 'search/movie',
        tv: 'search/tv',
        popularMovie: 'movie/popular',
        popularTv: 'tv/popular'
    },
    options: {
        params: {
            api_key: '8b5a6109dff263131078913a6e3d6b07',
            query: ''
        }
    },
    imgUrl: 'https://image.tmdb.org/t/p/original',
    movieList: [],
    tvList: [],
    popularMovie: [],
    error: {
        message: ''
    },
    loading: false
})