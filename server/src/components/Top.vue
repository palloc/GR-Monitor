<template>
  <div class="container">
    <h1>GPU Resource</h1>
    <div class="contents">
      <div class="gpu-content" v-for="gpu in gpu_resources">
	<h2>GPU{{ gpu.number }}.</h2>
	<p>GPUの種類: {{ gpu.name }}</p>
	<p>メモリ使用率: {{ gpu.free_memory }} / {{ gpu.total_memory }}</p>
	<p>GPU使用率: {{ gpu.utilization_rate }}%</p>
      </div>
    </div>
  </div>
</template>

<script>
var $ = require('jquery')
export default {
    data () {
	var gpu_resources = [
	    {
		number: "",
		name: "",
		total_memory: "",
		free_memory: "",
		utilization_rate: ""
	    }
	]
	return {
	    gpu_resources
	}
    },
    mounted: function () {
	this.getJson()
    },
    methods: {
	getJson: function () {
	    var that = this
	    $.ajax({
		type: 'GET',
		crossDomain: true,
		url: 'http://192.168.56.101:3000/gpu',
		dataType: 'json',
		success: function (json) {
		    that.$data.gpu_resources = json
		}
	    })
	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    margin: 3%;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
