<template>
  <div class="container">
    <div class="contents" v-for="gpu in gpu_resources">
      <div class="gpu-content" v-if="gpu.name !== none">
	<h2>GPU{{ gpu.number }}.</h2>
	<p>GPUの種類: {{ gpu.name }}</p>
	<p>メモリ使用率: {{ Math.round(((gpu.total_memory-gpu.free_memory) / gpu.total_memory) * 100) }} %</p>
	<p>GPU使用率: {{ gpu.utilization_rate }} %</p>
	{{ gpu.data }}
	<chart :type="'line'" :data="gpu.data" :options="options"></chart>

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
		number: Number,
		name: "",
		total_memory: Number,
		free_memory: Number,
		utilization_rate: Number,
		data: {}
	    }
	]
	var graph_data = []
	var graph_labels = ['70', '65', '60', '55', '50', '45', '40', '35', '30', '25', '20', '15', '10', '5', '0']
	var graph_datasets = []
	var options = {
	    segmentShowStroke: true,
	    scales: {
	        yAxes: [
		    {
		        ticks: {
			    beginAtZero: true,
			    min: 0,
			    max: 100
			}
		    }
		]
	    }
	}
	return {
	    gpu_resources,
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
	}.bind(this), 5000)
    },
    methods: {
	getJson: function () {
	    var that = this
	    $.ajax({
		type: 'GET',
		crossDomain: false,
		url: 'http://192.168.56.101:6101',
		dataType: 'json',
		success: function (json) {
		    if (that.$data.graph_data.length === 0) {
			that.$data.gpu_resources = json
			//create object
			$.each(that.$data.gpu_resources, function (i) {
			    that.$data.graph_data.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
			    that.$data.gpu_resources[i].data = {
				labels: that.$data.graph_labels,
				datasets: [
				    {
					data: that.$data.graph_data[i],
					backgroundColor: '#f87979',
					tension: 0.1
				    }
				]
			    }
			})
		    } else {
			that.$data.gpu_resources = json
			$.each(that.$data.gpu_resources, function (i) {
			    //left shift
			    $.each(that.$data.graph_data[0], function (j) {
				if (j !== that.$data.graph_data[i].length-1) {
				    that.$data.graph_data[i][j] = that.$data.graph_data[i][j+1]
				} else {
				    that.$data.graph_data[i][j] = that.$data.gpu_resources[i].utilization_rate
				}
			    })
			    that.$data.gpu_resources[0].data = {
				labels: that.$data.graph_labels,
				datasets: [
				    {
					data: that.$data.graph_data[i],
					backgroundColor: 'blue',
					tension: 0.1
				    }
				]
			    }
			    that.$data.gpu_resources[i].data = {
				labels: that.$data.graph_labels,
				datasets: [
				    {
					data: that.$data.graph_data[i],
					backgroundColor: 'blue',
					tension: 0.1
				    }
				]
			    }
			})
		    }
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
    width: 100%;
}

.contents {
    width: 70%;
    
}

h1, h2 {
  font-weight: normal;
}

chart {
    width: 50%;
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
