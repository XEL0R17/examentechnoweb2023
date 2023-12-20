import Model from './Model.js'; 

class addVocabulaire extends Model {
  static table = 'vocabulaire';
  static primary = ['id']; 
   
  constructor({ id, word, translation, action }) {
    super();
    this.id = id;
    this.word = word;
    this.translation = translation;
    this.action = action;

}
  
  // Vous pouvez ajouter ici des méthodes spécifiques à Achat, si nécessaire
}

export default addVocabulaire;