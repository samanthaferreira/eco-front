import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  username: String;
  password: String;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const user = {
        username: this.username,
        password: this.password
      };
      this.authService.login(user)
        .then((result) => {
          this.router.navigate(['/']);
        })
       .catch((err) => {
           this.error = err.error.code; // :-)
           this.processing = false;
          this.feedbackEnabled = false;
         });
    }
  }

}

