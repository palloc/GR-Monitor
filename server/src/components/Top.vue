<template>
  <div class="container">
    <div class="contents">
      <div class="gpu-content" v-for="gpu in gpu_resources">
	<h2>GPU{{ gpu.number }}.</h2>
	<p>GPUの種類: {{ gpu.name }}</p>
	<p>メモリ使用率: {{ gpu.free_memory / gpu.total_memory * 100 }} %</p>
	<p>GPU使用率: {{ gpu.utilization_rate }} %</p>
	<chart :type="'line'" :data="data" :options="options"></chart>
      </div>
      {{ graph_data }}
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
		number: Number,
		name: "",
		total_memory: Number,
		free_memory: Number,
		utilization_rate: Number
	    }
	]
	var graph_data = [0, 10, 50, 0, 0, 0, 0, 0]
	var graph_labels = ['0', '10', '20', '30', '40', '50', '60', '70']
	var graph_datasets = [{
	    data: graph_data,
	    backgroundColor: '#000000'
	}]
	var options = {segmentShowStroke: false}
	return {
	    gpu_resources,
	    data: {
		labels: graph_labels,
		datasets: graph_datasets
	    },
	    graph_data,
	    graph_labels,
	    graph_datasets,
	    options
	}
    },
    mounted: function () {
	this.getJson()

	setInterval(function () {
	    this.getJson()
	}.bind(this), 3000)
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
		    //left shift
		    $.each(that.$data.graph_data, function (i) {
			if (i !== that.$data.graph_data.length-1) {
			    that.$data.graph_data[i] = that.$data.graph_data[i+1]
			    console.log(that.$data.gpu_resources[0].utilization_rate)
			} else {
			    that.$data.graph_data[i] = that.$data.gpu_resources[0].utilization_rate
			}
		    })
		}
	    })
	    that.$data.graph_datasets = [{
		data: that.$data.graph_data,
		backgroundColor: '#000000'
	    }]  
	    that.$data.data = {
		labels: that.$data.graph_labels,
		datasets: that.$data.graph_datasets
	    }
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
