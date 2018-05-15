import { Component, OnInit } from '@angular/core';
import { StoresService } from '../../services/stores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stores-form',
  templateUrl: './stores-form.component.html',
  styleUrls: ['./stores-form.component.scss']
})
export class StoresFormComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  stores: object = {};

  constructor(private storesService: StoresService, private router: Router) { }

  ngOnInit() {}

    submitForm(form) {
      this.error = '';
      this.feedbackEnabled = true;
      if (form.valid) {
        this.processing = true;
        this.storesService.create(this.stores)
          .then((result) => {
            this.router.navigate(['/']);
          })
          .catch((err) => {
            this.error = err.error.error; // :-)
            this.processing = false;
            this.feedbackEnabled = false;
          });
      }
  }
}

