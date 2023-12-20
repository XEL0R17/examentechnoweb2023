import express from 'express';
import Task from './models/Task.js';
import Television from './models/Televisions.js';
import Achat from './models/Achats.js';
import TvCassee from './models/TvCassees.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post("/add", async function (req, res) {
  const achat = new Achat({
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



app.get("/", async function (req, res) {
  const televisions = await Television.loadMany(); // Récupérez les données de télévisions
  const achats = await Achat.loadMany();
  const tvCassees = await TvCassee.loadMany(); // Récupérez les données de télévisions cassées

  res.render('listTelevisions.ejs', {
    televisions: televisions,
    achats: achats,
    tvCassees: tvCassees // Ajoutez les données de télévisions cassées à la vue
  });
});


app.listen(4000);
