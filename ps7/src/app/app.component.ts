import { Component, Input } from '@angular/core';
import { FormComponent} from './form/form.component';
import { DisplayComponent} from './display/display.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Parent of other 2 components
  title = 'Some Random Application';

  upperCase(text: string): string {
    return text.toUpperCase();
  }
}
