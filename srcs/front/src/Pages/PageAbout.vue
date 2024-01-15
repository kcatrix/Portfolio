<template>
  <div class="about">
    <div class="header">
      <h1>About</h1>
    </div>
    <div class="content">
      <div class="column">
        <h2>Mes Études</h2>
        <div class="list">
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
          <p>
             Je lance des pokeball comme personne ! On m'appel le lanceur fou !
          </p>
        </div>
      </div>
      <div class="column">
        <h2>Mes Compétences</h2>
        <div class="list">
          <p>
             lancer incroyable
          </p>
          <p>
             attaque de la mort ou taupe qui creuse ou encore attaque de la mort qui tue !
            mais aussi attaque de la mort qui tue et qui creuse !
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageAbout',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.about {
  background-image: url("../assets/about.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.header {
  text-align: center;
  padding-bottom: 3%;
}

h1 {
  margin: 0;
  color: #42b983;
  font-style: italic;
  font-size: 2rem;
}

.content {
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: inherit;
  display: flex;
  margin: auto;
  width: 90%;
  height: 50%;
  gap: 1%;
}

.column {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
}

h2 {
  color: #42b983;
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.list {
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
}

.list p {
  padding: 7px;
  border-bottom: 1px solid #e7ebf4;
  height: 100%;
}

</style>
