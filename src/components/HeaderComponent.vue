<template>
    <header>
        <div class="d-flex justify-content-between align-items-center">
            <div class="header-logo">
                <img src="../assets/img/netflix_logo.png" alt="netflix-logo">
            </div>
            <div class="d-flex justify-content-between align-items-center ldg-search">
                <input class="form-control" type="text" v-model="store.options.params.query" @keyup.enter="$emit('searchMovie'), $emit('searchTv')">
                <button class="btn btn-danger ldg-btn" @click="$emit('searchMovie'), $emit('searchTv')">Cerca</button>
            </div>
        </div>
    </header>
</template>

<script>
    import {store} from '../store.js';
    export default {
        name: 'HeaderComponent',
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables.scss' as *;

    header{
        background-color: $black;
    }

    .header-logo{
        padding: 10px;

        img{
            width: 130px;
        }
    }

    .ldg-search{
        padding: 10px;
    }

    .ldg-btn{
        color: $black;
        margin-left: 10px;
        background-color: $red;
    }
</style>