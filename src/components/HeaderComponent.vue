<template>
    <header>
        <div class="d-flex justify-content-between align-items-center">
            <div class="header-logo">
                <img src="../assets/img/netflix_logo.png" alt="netflix-logo">
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <input class="form-control" type="text">
                <button class="btn btn-danger ldg-btn">Cerca</button>
            </div>
        </div>
    </header>
</template>

<script>
    import {store} from '../store.js';
    export default {
        name: 'HeaderComponent'
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

    .ldg-btn{
        color: $black;
        margin-left: 10px;
    }
</style>