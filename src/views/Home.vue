<template>
    <div class="banner">
        <h1>V3-UI</h1>
        <h2>based on Vue3 + TS</h2>
        <p class="actions">
            <a href="https://github.com/c2kaka/v3-ui">GitHub</a>
            <router-link to="/doc">开始</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style lang="scss" scoped>
    .banner {
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: lightgreen;
        > .actions{
            padding: 8px 0;
            a {
                margin:0 8px;
                background: #fff;
                display: inline-block;
                $h: 28px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 8px;
            }
        }
    }
</style>
