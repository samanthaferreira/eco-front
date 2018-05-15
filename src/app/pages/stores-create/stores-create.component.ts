import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-stores-create',
  templateUrl: './stores-create.component.html',
  styleUrls: ['./stores-create.component.scss']
})
export class StoreCreateComponent implements OnInit {
  loggedUser: object;

  constructor(
    private router: Router,
    private authService: AuthService) {
  }


  ngOnInit() {
    this.loggedUser = this.authService.getUser();
  }

}
