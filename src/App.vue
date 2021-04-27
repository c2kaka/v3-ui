<template>
  <div>
    导航栏 |
    <router-link to="/">Fan</router-link> |
    <router-link to="/doc">Fan2</router-link>
  </div>

  <hr>

  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>
