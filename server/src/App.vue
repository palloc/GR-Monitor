<template>
  <div id="app">
    <header>
      <h1>GPU リソースモニター</h1>
    </header>
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
header {
    width: 100%;
    background-color: black;
    text-align: center;
}

header h1 {
    margin: 10px;
    color: white;
}

#app {
    margin: 0;
    width: 100%;
}
</style>
