<template>
  <div class="container">
    <div class="contents">
      <div class="gpu-content" v-for="gpu in gpu_resources">
	<h2>GPU{{ gpu.number }}.</h2>
	<p>GPUの種類: {{ gpu.name }}</p>
	<p>メモリ使用率: {{ gpu.free_memory }} / {{ gpu.total_memory }}</p>
	<p>GPU使用率: {{ gpu.utilization_rate }}%</p>
	<chart :type="'line'" :data="data" :options="options"></chart>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'vue-bulma-chartjs'
var $ = require('jquery')
export default {
    components: {
	Chart
    },
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
	var graph_data = [0, 0, 0, 0]
	return {
	    gpu_resources,
	    data: {
		labels: ['memory', 'util'],
		datasets: [{
		    data: graph_data,
		    backgroundColor: [
			'#ed6c63',
			'#97cd76'
		    ]
		}]
	    },
	    options: {
		segmentShowStroke: false
	    }
	}
    },
    mounted: function () {
	setInterval(this.getJson(), 5000)
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
		    $.each(that.$data.graph_data, function (i) {
			if (i !== that.$data.graph_data.length) {
			    that.$data.graph_data[i] = that.$data.graph_data[i+1]
			} else {
			    that.$data.graph_data[i] = that.$data.gpu_resources[0].utilization_rate
			}
		    })
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
