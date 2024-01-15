<!-- il faut crée un mots de pass d'application pour gmail
https://support.google.com/accounts/answer/185833?hl=fr -->

<template>
  <h1>Contact Form</h1>
  <div class="all">
    <div class="form-box">
      <div class="form-container">
        <div class="placing-field">
          <img src="../assets/email-2.gif" alt="Logo">
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="form-fields">
            <label for="name">Company's Name</label>
            <input type="text" id="name" name="name" v-model="formData.name" required>
          </div>
          <div class="form-fields">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="formData.email" required>
          </div>
          <div class="form-fields">
            <label for="message">Message</label>
            <textarea id="message" name="message" v-model="formData.message" required></textarea>
          </div>
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      // Envoyez les données du formulaire au serveur ici
      axios.post('http://localhost:3000/envoyer-email', this.formData)
        .then(response => {
          console.log('Réponse du serveur :', response.data);
          // Réinitialisez le formulaire ou effectuez d'autres actions si nécessaire
          this.formData = {
            name: '',
            email: '',
            message: '',
          };
        })
        .catch(error => {
          console.error('Erreur de requête POST :', error);
        });
    },
  },
};
</script>

<style scoped>

  .all {
    min-width: 100vh;
    display: flex;
    flex-direction: column;
    min-height: 88vh;
    max-height: fit-content;
    justify-content: space-around;
    width: 100%;
  }

  img {
    border-radius: 100%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 95%;
    margin-bottom: auto;
    margin-top: auto;
    box-sizing: border-box;
    border-color: aqua;
    border: 10px;
  }

  h1 {
	display: flex;
    top: 0;
    margin: 0;
	justify-content: center;
    color: #42b983;
    font-style: italic;
    font-size: 2rem;
  }
  .form-box {
    min-width: 80vh;
    display: flex;
    background-color: #f0f0f0; /* Couleur de fond de la boîte */
    padding: 20px; /* Espacement intérieur de la boîte */
    border-radius: 8px; /* Coins arrondis pour la boîte */
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
  .form-container {
    display: flex; /* Utilisez la flexbox pour mettre l'image à côté du formulaire */
    align-items: center; /* Alignez les éléments verticalement au centre */
    height: 100%;
  }
  .placing-field {
    margin-right: 20px; /* Espace à droite de l'image */
    height: 100%;
  }
  .form-fields {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    margin-bottom: 4px;
    font-weight: bold;
    font-size: 0.9rem;
  }
  input[type="text"],
  input[type="email"],
  textarea {
    border: 1px solid #ccc;
    font-size: 1rem;
    padding: 6px 10px;
    border-radius: 4px;
  }

  button[type="submit"] {
    background-color: rgb(67 56 202);
    color: white;
    font-size: 0.8rem;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    font-weight: 500;
  }
</style>
