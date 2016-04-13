import {Component} from 'angular2/core';

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'mensagem',
  // Location of the template for this component
  templateUrl: 'app/mensagem.html'
})
export class Mensagem {
  // Declaring the variable for binding with initial value
  idade: number = 18;
  nome: string = '';
}
