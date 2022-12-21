import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOptionsBarComponent } from './add-options-bar.component';

const routes: Routes = [

  { path: '', component: AddOptionsBarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddOptionsRoutingModule { }
