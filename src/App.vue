<template>
  <div id="app">
    <router-view></router-view>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
   <Switch :before-change="handleBeforeChange" /> 
     <Button>按钮</Button> 
    <Progress /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import {Switch} from 'view-design';
export default {
  name: 'app',
  components: {
    // HelloWorld,
    // Switch
    // Button
  },
  methods: {
            handleBeforeChange () {
                return new Promise((resolve) => {
                    this.$Modal.confirm({
                        title: '切换确认',
                        content: '您确认要切换开关状态吗？',
                        onOk: () => {
                            resolve();
                        }
                    });
                });
            }
        }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
