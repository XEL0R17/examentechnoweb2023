import express from 'express';
import Vocabulaire from './models/listeVocabulaire.js';



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post("/addvoc", async function (req, res) {
  const vocabulaire = new Vocabulaire({
     
    word: req.body.word, 
    translation: req.body.translation, 
    action: req.body.action 
  });
  
  await vocabulaire.save();
  res.redirect('/vocabulaire'); 
});


app.get("/", async function (req, res) {
  

  res.render('pageprincipale.ejs', {

    
  });
});

app.get("/vocabulaire", async function (req, res) {
  const vocabulaires = await Vocabulaire.loadMany(); // Récupérez les données Vocabulaire

  res.render('vocabulairelist.ejs', {
    vocabulaires: vocabulaires,
    
  });
});


app.listen(4000);
