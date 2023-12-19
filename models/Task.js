import Model from './Model.js';

export default class Task extends Model {

  static table = ".tasks";
  static primary = ["id"];
}
