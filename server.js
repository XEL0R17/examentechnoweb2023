import express from 'express';
import Vocabulaire from './models/listeVocabulaire.js';



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post("/addvoc", async function (req, res) {
  const vocabulaire = new Vocabulaire({
     
    marque: req.body.word, 
    prix: req.body.translation, 
    taille: req.body.action 
  });
  
  await vocabulaire.save();
  res.redirect('/'); 
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
