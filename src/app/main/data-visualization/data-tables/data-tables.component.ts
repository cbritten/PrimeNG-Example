import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { CarService } from 'src/app/showcase/service/carservice';
import { ProductService } from 'src/app/showcase/service/productservice';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})
export class DataTablesComponent implements OnInit{
  constructor(public products : ProductService){}

  tabs: MenuItem[] = [
    {label: 'Organizational Example', routerLink: 'organizational-example', command: (e : any) => {this.activeTab = this.tabs[0]}},
    {label: 'Shopping Example', routerLink: 'shopping-example', command: (e : any) => {this.activeTab = this.tabs[1]}},
  ]; 
  activeTab : any = this.tabs[0];

  ngOnInit(): void {
    
  }
}
