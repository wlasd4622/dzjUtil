<template>
  <div class="index-container">
    <p>index</p>
    <p>{{cwd}}</p>
    <p>{{execPath}}</p>
    <p>{{executablePath}}</p>
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
      executablePath:''
    };
  },
  async mounted() {
    await index.main();
    this.executablePath=index.getExecutablePath()
    this.cwd = process.cwd();
    this.execPath = path.dirname(process.execPath);
  },
  methods: {}
};
</script>

<style>
</style>
