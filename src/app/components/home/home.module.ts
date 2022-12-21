import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialExampleModule } from '../../material.module';
import { CarouselComponent } from './parts/carousel/carousel.component';
import { MapComponent } from './parts/map/map.component';


@NgModule({
  declarations: [
    HomeComponent,
    MapComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GoogleMapsModule,
    MaterialExampleModule
  ]
})
export class HomeModule { }
