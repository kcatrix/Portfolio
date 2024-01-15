<template>
  <div class="hello" >
    <h1 class="Titre"> Bienvenue sur le Portfolio de {{ name }} </h1>
    <p class="PhraseDouce"> Ferme les yeux et sois impacté ... </p>
    <button class="click" @click="$emit('changeValue')"> Do you want to know more ? </button>
  </div>
</template>

<script>

export default {
  name: 'PageHome',
  props: {
    name: String,
    buttonAccessClick: Boolean,
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  background-image: url("../assets/home_office.gif");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10%;
  justify-content: space-evenly;
}

.Titre {
  margin: 0 0 0 0;
  padding: 1% 0px 1% 0px;
  color: #fcfcfc;
  font-weight: bold;
  font-size: 35px;
  font-style: normal;
  text-shadow: 0px 0px 15px #000000;
}

.PhraseDouce{
  font-style: italic;
  font-size: 100%;
  font-weight: bold;
  color: rgb(255, 255, 255);
  text-shadow: 0px 0px 10px #000000;
}

.click{
  margin: 50% 50% 50% 50% ;
  background-color: #e9ece9d7;
  border: none;
  color: white;
  padding: 1.5% 1.5%;
  text-align: center;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  border: 2px;
  width: fit-content;
  text-shadow: 0px 0px 10px #000000;
  box-shadow: 0px 0px 10px #000000;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

</style>
