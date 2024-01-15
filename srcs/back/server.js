// server

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(express.json()); 
app.use(cors());

// Configurer le transporteur Nodemailer (utilisez vos propres informations SMTP)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

/* SPOILER ALERTE 
   j'ai du crée un mots de passe d'application pour autorisé node a accéder a gmail 
   Quelle enfer 
   #AD https://support.google.com/mail/answer/185833?hl=fr
    Section crée des mots de passe d'application */

// Point de terminaison pour gérer l'envoi de courriel
app.post('/envoyer-email', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Nom reçu:', name);
  console.log('Email reçu:', email);
  console.log('Message reçu:', message);

  const mailOptions = {
    to: process.env.GMAIL_USER,
    subject: 'Nouveau message de contact',
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'e-mail' });
    } else {
      res.status(200).json({ message: 'E-mail envoyé avec succès' });
    }
  });
});

app.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});
