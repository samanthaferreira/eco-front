import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-stores-card',
  templateUrl: './stores-card.component.html',
  styleUrls: ['./stores-card.component.scss']
})
export class StoresCardComponent implements OnInit {

  @Input() store: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  addToFavorites () {
    this.authService.addFavorite(this.store.id);
    console.log('added to favorites');
    // .then optional show message "it has been added"
  }

}
