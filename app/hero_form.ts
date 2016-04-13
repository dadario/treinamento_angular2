import {Component} from 'angular2/core';

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'hero-form',
  // Location of the template for this component
  templateUrl: 'app/hero_form.html'
})
export class HeroForm {
  // Declaring the variable for binding with initial value
  nome: string = '';
  superPoder: string = '';
  alterEgo: string = '';
}
