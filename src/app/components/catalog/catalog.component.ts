import { Component, OnInit } from '@angular/core';
import { CatalogData } from 'src/app/services/catalog.data';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items = CatalogData;

  constructor() { }

  ngOnInit(): void {
  }

}
