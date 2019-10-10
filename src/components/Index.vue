<template>
  <div class="index-container">
    <!-- <p>cwd：{{cwd}}</p>
    <p>execPath：{{execPath}}</p>
    <p>executablePath：{{executablePath}}</p>
    <p>platform：{{platform}}</p> -->
    <div class="content">
      <div @click="personalHandle">个人发帖</div>
      <div @click="agentHandle">经纪人发帖</div>
    </div>
  </div>
</template>

<script>
import util from "./util.js";
let $ = require("jquery");
let path = require("path");
var os = require("os");
export default {
  name: "index",
  data() {
    return {
      cwd: "",
      execPath: "",
      process: null,
      executablePath: "",
      platform: ""
    };
  },
  async created() {
    await util.init();
  },
  async mounted() {
    this.platform = os.platform();
    this.executablePath = util.getExecutablePath();
    console.log("executablePath", this.executablePath);
    this.cwd = process.cwd();
    this.execPath = path.dirname(process.execPath);
  },
  methods: {
    personalHandle() {
      util.main(0);
    },
    agentHandle() {
      // util.main(1);
      alert('开发中...')
    }
  }
};
</script>

<style>
.content {
  display: flex;
  height: 100px;
  width: 284px;
  margin: auto;
}
.content > div {
  flex: 1;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ddd;
  line-height: 100px;
  border-radius: 10px;
  margin: 0 20px;

  box-sizing: border-box;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.08);
}
.content > div:hover {
  background: #ddd;
}
</style>
