<template>
  <div class="container">
    <h1>GPU Resource</h1>
    <div class="contents">{{ msg }}</div>
  </div>
</template>

<script>
import Vue from 'vue'
var $ = require('jquery')
export default {
    name: 'container',
    data () {
	var gpu_resource = [
	    {
		number: '',
		name: '',
		total_memory: '',
		free_memory: '',
		utilization_rate: ''
	    }
	]
	return {
	    msg: 'hahaha'
	}
    },
    ready: function () {
	this.getJson()
    },
    methods: {
	getJson: function () {
	    var that = this
	    $.ajax({
		type: 'GET',
		crossDomain: true,
		url: '10.29.36.28:8080',
		dataType: 'json',
		success: function (json) {
		    that.$data.gpu_resources = json.gpu
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
