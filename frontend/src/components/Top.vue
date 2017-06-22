<template>
  <div class="container">
    <div class="contents" v-for="gpu in gpu_resources">
      <div class="gpu-content" v-if="gpu.name !== none">
	<h2><span>GPU{{ gpu.number }}.</span></h2>
	<div class="gpu-exp">
	  <p>GPUの種類: {{ gpu.name }}</p>
	  <p>メモリ使用率: {{ Math.round(((gpu.total_memory-gpu.free_memory) / gpu.total_memory) * 100) }} %</p>
	  <p>GPU使用率: {{ gpu.utilization_rate }} %</p>
	</div>
	<div class="gpu-graph">
	  <chart :type="'line'" :data="gpu.data" :options="options"></chart>
	</div>
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
			stacked: false,
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
					backgroundColor: 'rgba(248, 11, 11, 0.5)',
					tension: 0
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
			    that.$data.gpu_resources[i].data = {
				labels: that.$data.graph_labels,
				datasets: [
				    {
					data: that.$data.graph_data[i],
					backgroundColor: 'rgba(248, 11, 11, 0.5)',
					tension: 0
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
h2 {
    overflow: hidden;
    text-align: center;
}

h2 span {
    position: relative;
    display: inline-block;
    margin: 0 2.5em;
    padding: 0 1em;
    text-align: left;
}

h2 span::before,
h2 span::after {
    position: absolute;
    top: 50%;
    content: '';
    width: 400%;
    height: 1px;
    background-color: #ccc;
}

h2 span::before {
    right: 100%;
}

h2 span::after {
    left: 100%;
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


.container {
    margin: 3%;
    width: 100%;
}

.contents {
    width: 80%;
    clear: both;
    text-align: center;
    margin: 0 auto;
}

.gpu-content {
    margin: 0 auto;
    padding-top: 50px;
}

.gpu-exp {
    width: 40%;
    float: left;
}

.gpu-graph {
    width: 50%;
    float: left;
}

</style>
