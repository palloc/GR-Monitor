<template>
  <div class="container">
    <h1>GPU Resource</h1>
    <div class="contents">{{ gpu_resource[0] }}</div>
    {{ message }}
  </div>
</template>

<script>
var $ = require('jquery')
export default {
    data () {
	var gpu_resource = [
	    {
		number: "",
		name: "",
		total_memory: "",
		free_memory: "",
		utilization_rate: ""
	    }
	]
	return {
	    gpu_resource
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
		    that.$data.gpu_resource = json
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
