<script setup>
  
  import { nextTick } from 'vue'
  import { ref } from 'vue'

  const name = 'Jérôme BUAN';

  let buttonAccessCheck = ref(false);

  const changeValue = async () => {
    buttonAccessCheck.value = !buttonAccessCheck.value;
    await nextTick();
  }
  
</script>

<template>
  <PerfectScrollbar class="allpage">
      <template v-if="buttonAccessCheck">
        <NavBar />
      </template>
      <div class="Page-container">
        <section id="s1"><PageHome :name=name :buttonAccessCheck=buttonAccessCheck @changeValue="changeValue" :style="buttonAccessCheck > 0 ? 'padding-top: 45px;' : ''" /></section>
        <template v-if="buttonAccessCheck">
          <section id="s2"><PageAbout msg="pp" /></section>
          <section id="s3"><PageProject /></section>
          <section id="s4"><PageContact /></section>
        </template>
      </div>
  </PerfectScrollbar>
</template>

<script>

import PageHome from './Pages/PageHome.vue'
import PageAbout from './Pages/PageAbout.vue'
import PageProject from './Pages/PageProject.vue'
import PageContact from './Pages/PageContact.vue'
import NavBar from './components/NavBar.vue'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

export default {
  name: 'App',
  components: {
    PageHome,
    PageAbout,
    PageProject,
    PageContact,
    NavBar,

},
  props: {
    msg: String,
  }
}
</script>

<style>

.page-container{
 background-color: #2c3e50;
 height: fit-content;
}

body{
  margin:0;
}

#app {
  justify-content: center;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#s1{
  background-color: #e7ebf4;
}

#s2, #s3, #s4{
  padding-top: 45px;
}

section{
  justify-content: center;
  min-height: 100vh;
  height: fit-content;
  width: 100vw;
}

#s1{
  background-color: #e7ebf4;
}

#s3{
  background-image: url("./assets/project-5.gif");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60%;
}

.buttondisplayNav {
  border-radius: 4px;
  background-color: #42b983;
  border: none;
  color: #FFFFFF;
  margin-left: auto;
  margin-right: auto;
  font-size: 28px;
  padding: 20px;
  width: 10%;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

</style>
