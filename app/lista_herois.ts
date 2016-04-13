import {Component} from 'angular2/core';

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'lista-herois',
  // Location of the template for this component
  templateUrl: 'app/lista-herois.html'
})
export class ListaHerois {
  herois: array = [];
}
