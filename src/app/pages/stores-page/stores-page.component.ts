import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StoresService} from '../../services/stores.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-stores-page',
  templateUrl: './stores-page.component.html',
  styleUrls: ['./stores-page.component.scss']
})

export class StoresPageComponent implements OnInit {
  loggedUser: object;

  constructor(
    private router: Router,
    private authService: AuthService) {
  }


  ngOnInit() {
    this.loggedUser = this.authService.getUser();
  }
}
