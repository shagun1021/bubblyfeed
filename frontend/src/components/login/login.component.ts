import { Component } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ButtonComponent,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


}
