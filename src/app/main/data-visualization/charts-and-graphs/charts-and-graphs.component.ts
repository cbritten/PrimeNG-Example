import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-charts-and-graphs',
  templateUrl: './charts-and-graphs.component.html',
  styleUrls: ['./charts-and-graphs.component.scss']
})
export class ChartsAndGraphsComponent implements OnInit{
  constructor(){}

  tabs: MenuItem[] = [
    {label: 'Pie, Doughnut, and Other Charts', routerLink: 'pie-and-doughnut-charts', command: (e : any) => {this.activeTab = this.tabs[0]}},
    {label: 'Bar Charts', routerLink: 'bar-charts', command: (e : any) => {this.activeTab = this.tabs[1]}},
    {label: 'Line Charts', routerLink: 'line-charts', command: (e : any) => {this.activeTab = this.tabs[2]}},
  ]; 
  activeTab : any = this.tabs[0];

  ngOnInit(): void {}

  
}
