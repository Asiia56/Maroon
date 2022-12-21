import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './parts/carousel/carousel.component';
import { MapComponent } from './parts/map/map.component';

const routes: Routes = [

  //home component and its parts
  { path: 'carousel', component: CarouselComponent },
  { path: 'map', component: MapComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
