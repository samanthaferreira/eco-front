import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StoresService} from '../../services/stores.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss']
})
export class StoreDetailComponent implements OnInit {
  loggedUser: object;
 store: object;
  constructor(private router: Router,
    private authService: AuthService, private activatedRoute: ActivatedRoute,
    private storesService: StoresService) { }

  ngOnInit() {
    this.loggedUser = this.authService.getUser();
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      this.storesService.getOne(id)
      .then((data) => {
          this.store = data;
        }) ;
      });
    }
  }



