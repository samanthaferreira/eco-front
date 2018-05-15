import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // (() => {
    //   const prevArrow = document.getElementsByClassName('left')[0];
    //   const nextArrow = document.getElementsByClassName('right')[0];
    //   prevArrow.addEventListener('click', carousel.prevSlide);
    //   nextArrow.addEventListener('click', carousel.nextSlide);
    // })();
  }


}
