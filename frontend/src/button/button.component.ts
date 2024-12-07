import { Component, Input} from '@angular/core';
import { LoginComponent } from '../components/login/login.component';

@Component({
  selector: 'app-btn',
  imports: [LoginComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() name='';

}
