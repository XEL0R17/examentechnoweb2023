import express from 'express';
import Vocabulaire from './models/listeVocabulaire.js';
import TvCassee from './TvCassees.js'



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post("/addvoc", async function (req, res) {
  const vocabulaire = new Vocabulaire({
     // ou toute autre clé étrangère nécessaire
    marque: req.body.marque, // Assurez-vous que le formulaire contient un champ 'marque'
    prix: req.body.prix, // Assurez-vous que le formulaire contient un champ 'prix'
    taille: req.body.taille // ...
  });
  
  await achat.save();
  res.redirect('/'); // ou vers une page de confirmation
});


app.post("/addTvCassee", async function (req, res) {
  const tvCassee = new TvCassee({
    marque: req.body.marque, // Assurez-vous que le formulaire contient un champ 'marque'
    prix: req.body.prix, // Assurez-vous que le formulaire contient un champ 'prix'
    taille: req.body.taille, // Assurez-vous que le formulaire contient un champ 'taille'
    descriptionCasse: req.body.descriptionCasse // Assurez-vous que le formulaire contient un champ 'descriptionCasse'
  });
  
  await tvCassee.save();
  res.redirect('/'); // ou vers une page de confirmation ou de succès
});


app.get("/delete/:id", async function (req, res) {
  await Task.delete({ id: req.params.id });
  res.redirect('/');
});



app.get("/vocabulaire", async function (req, res) {
  const vocabulaires = await Vocabulaire.loadMany(); // Récupérez les données Vocabulaire

  res.render('vocabulairelist.ejs', {
    vocabulaires: vocabulaires,
    
  });
});


app.listen(4000);
