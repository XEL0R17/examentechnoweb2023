import Model from './Model.js'; // Assurez-vous que le chemin d'importation est correct

class TvCassee extends Model {
  static table = 'tvcasse';
  static primary = ['id']; // Remplacez 'id' par la ou les clés primaires de votre table
   
  constructor({ id, marque, prix, taille, descriptionCasse }) {
    super();
    this.id = id; // Supposons que 'id' est la clé primaire auto-incrémentée
    this.marque = marque;
    this.prix = prix;
    this.taille = taille;
    this.descriptionCasse = descriptionCasse;


    
    
  }
  
  // Vous pouvez ajouter ici des méthodes spécifiques à Achat, si nécessaire
}

export default TvCassee;