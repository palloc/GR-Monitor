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
      {{ graph_datasets[0].data }}
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
	var graph_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	var graph_labels = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110', '120', '130', '140']
	var graph_datasets = [{
	    data: graph_data,
	    backgroundColor: '#000000',
	    tension: 0.1
	    
	}]
	var options = {
	    segmentShowStroke: false,
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
		    if 
		    that.$data.gpu_resources = json
		    that.$data.graph_datasets = []
		    $.each(that.$data.gpu_resources, function (i) {
			//left shift
			$.each(that.$data.graph_data, function (j) {
			    if (j !== that.$data.graph_data.length-1) {
				that.$data.graph_data[j] = that.$data.graph_data[j+1]

			    } else {
				that.$data.graph_data[j] = that.$data.gpu_resources[i].utilization_rate
				console.log(i)
				console.log(j)
			    }
			})
			console.log('----')
			that.$data.graph_datasets.push(
			    {
				data: that.$data.graph_data,
				backgroundColor: '#000000',
				tension: 0.1
			    }
			)
		    })
		}
	    })
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
    width: 60%;
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
