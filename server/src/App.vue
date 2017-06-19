<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Top from './components/Top'
export default {
    components: {
	Top
    }
}
</script>

<style>
#app {
  margin: 20px;
}
</style>
