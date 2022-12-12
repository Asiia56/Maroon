import { Component, OnInit } from '@angular/core';
const bootstrap = require('bootstrap');
import * as $ from "jquery";
import { CatalogData } from 'src/app/services/catalog.data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  items = CatalogData;

  constructor() {

  }

  ngOnInit(): void {
    let multipleCardCarousel: any = document.querySelector("#carouselExampleControls");
    slide();

    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 760px)").matches) {
        $(multipleCardCarousel).removeClass("slide");
        slide();
      } else {
        $(multipleCardCarousel).addClass("slide");
      }
    })


    function slide() {
      var carouselWidth = $(".carousel-inner")[0].scrollWidth;
      var cardWidth = $(".carousel-item").width() as number;
      var scrollPosition = 0;
      $("#carouselExampleControls .carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
          );
        }
      });
      $("#carouselExampleControls .carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
          );
        }
      });
    }
  }
}
