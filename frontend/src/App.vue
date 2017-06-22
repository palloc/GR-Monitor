<template>
  <div id="app">
    <header>
      <div id="title">
	<h1>GR-Monitor</h1>
      </div>
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
html,body {
    margin: 0;
    padding: 0;
    top: 0;
    background-color: #FFFFFF;
}

header {
    width: 100%;
    text-align: center;
    top: 0;
}

h1 {
    margin: 0;
    padding: auto;
    color: white;
    font-size:50px;
}

#app {
    margin: 0;
    padding: 0;
    width: 100%;
}

#title {
    top: 0;
    background-color: #3F3B3A;
    width: 100%;
    padding: 20px 0;
}
</style>
