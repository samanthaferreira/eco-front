import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.scss']
})
export class StoreInfoComponent implements OnInit {

  @Input() store;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  addToFavorites () {
    this.authService.addFavorite(this.store._id);
    console.log('added to favorites');
}
}
