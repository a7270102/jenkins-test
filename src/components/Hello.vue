<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div>
      <div>
        <h2>测试i18n多语言</h2>
        <select v-model="locale">
          <option>en</option>
          <option>ja</option>
        </select>
        <div>
          <span style="color:red">普通文本输出</span>
          <p>message: {{ $t('hello') }}</p>
          <span style="color:red">html输出</span>
          <p v-html="$t('helloHtml')"></p>
          <span style="color:red">占位符替换: $t('placeholder', {占位符: 替换的字符串--world})</span>
          <p>placeholder: {{$t('helloPlace', {place: "world"})}}</p>
          <span style="color:red">列表格式：$t('palceholder', ["world"])</span>
          <p>placeholder for list: {{$t('helloList', ["world"])}}</p>
          <span style="color:red">Support ruby on rails i18n format: %place</span>
          <p>ruby on rails: {{$t('helloPercent', {place: "world"})}}</p>
          <span style="color: red">复数支持: $tc()</span>
          <p>plural选择： {{$tc('plural', 1)}}</p>
          <p>plural选择: {{$tc('plural', 2)}}</p>
        </div>
      </div>
  	  <div>
  	  	<h2>测试输出</h2>
  	  	<input :value="inputValue" v-on:input="update($event.target.value)">
        <span id="sp">{{inputValue}}</span>
  	  </div>
  	  <div>
  	  	<button id="btn" v-on:click="getData">获取异步数据</button>
  	  </div>
  	  <div>
  	  	<h2>测试异步请求</h2>
  	  	<ul>
  	  		<li v-for="item in dataList"> {{item.id}}</li>
  	  	</ul>
  	  </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      locale: 'ja',
      msg: 'Welcome to Your Vue.js App',
      inputValue: '输入试试看看吧',
      dataList: [],
      cncCheck: true
    }
  },
  methods: {
  	update: function(value) {
  		this.inputValue = value.trim();
  	},
  	getData: function() {
      let self = this;
      this.$ajax.get("https://cnodejs.org/api/v1/topics")
        .then((res) => {
          console.log(res.data);
          self.dataList = res.status === 200 ? res.data.data : [];
        }).catch((xht) => console.log("error！"));
    },
  },
  mounted: function() {
  	console.log("组件加载完成");
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
