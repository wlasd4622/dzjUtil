<template>
  <div class="index-container">
    <p>index</p>
    <p>{{cwd}}</p>
    <p>{{execPath}}</p>
    <p>{{executablePath}}</p>
    <div class="content">
      <div @click="personalHandle">个人发帖</div>
      <div @click="agentHandle">经济人发帖</div>
    </div>
  </div>
</template>

<script>
import index from "./_index.js";
let $ = require("jquery");
let path = require("path");
export default {
  name: "index",
  data() {
    return {
      cwd: "",
      execPath: "",
      process: null,
      executablePath: ""
    };
  },
  async mounted() {
    this.executablePath = index.getExecutablePath();
    this.cwd = process.cwd();
    this.execPath = path.dirname(process.execPath);
  },
  methods: {
    personalHandle() {
      index.main(0);
    },
    agentHandle() {
      index.main(1);
    }
  }
};
</script>

<style>
.content {
  display: flex;
  height: 100px;
  width: 200px;
  margin: auto;
}
.content > div {
  flex: 1;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ddd;
  line-height: 100px;
  border-radius: 10px;
}
.content > div:hover {
  background: #ddd;
}
</style>
