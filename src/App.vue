<template>
  <PagesItem/>
  <router-view/>
</template>

<script>
import PagesItem from './pages/PagesItem.vue';

export default {
    name: "App",
    components: { PagesItem }
}
</script>

<style>
</style>
