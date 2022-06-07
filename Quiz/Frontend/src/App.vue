<template>
  <div
    id="app"
    class="container"
  >
    

    <Head></Head>
    <Menu></Menu>

    <router-view></router-view>
    <Footer></Footer>
    <!-- <Head></Head> -->
  </div>
</template>

<script>
import Head from "./components/Head.vue";
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";


export default {
  name: "App",
  components: {
    Head,
    Footer,
    Menu,
    
  },
};
</script>

<style>
.my-border {
  border: 2px solid white;
  padding: 0 10px;
  color: white;
  border-radius: 25px
}

.container {
  max-width: 400px;
  margin: 20px auto;
  background: #09796b;
  border-radius: 25px
}
</style>
