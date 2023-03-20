import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
  }

  onLogin(): void{
    this.authService.login('coucou');
    this.router.navigateByUrl('/facesnaps')
  }

}
