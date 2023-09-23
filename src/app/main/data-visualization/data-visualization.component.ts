import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.scss']
})
export class DataVisualizationComponent implements OnInit{
  constructor(){}

  tabs: MenuItem[] = [
    {label: 'Charts and Graphs', routerLink: 'charts-and-graphs', command: (e : any) => {this.activeTab = this.tabs[0]}},
    {label: 'Data Tables', routerLink: 'data-tables', command: (e : any) => {this.activeTab = this.tabs[1]}}
  ]; 
  activeTab : any = this.tabs[0];

  ngOnInit(): void {
    
  }

}
