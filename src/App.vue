<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app,
.index-container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.header {
  padding: 10px 20px;
  /* padding-top: 20px; */
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1;
  border-bottom: 1px solid #ddd;
  display: -ms-flexbox;
  display: flex;
  line-height: 30px;
  height: 30px;
  box-shadow: 3px 2px 3px 3px rgba(0, 0, 0, 0.05);
}
.htitle {
  overflow: hidden;
  flex: 1;
}
button {
  padding: 5px 10px;
}
button:hover {
  border-color: #666;
  cursor: pointer;
  margin: auto;
}
</style>
