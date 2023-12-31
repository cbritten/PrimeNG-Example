import { Component } from '@angular/core';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent {

  menuItems : any = [
    // {label: '', icon: 'pi pi-home', styleClass:'text-xl p-0', routerLink: ['home-page']},
    {label: 'Data Visualization', icon: '', items: [
        {label: 'Charts and Graphs', icon : '', routerLink: ['data-visualization/charts-and-graphs/pie-and-doughnut-charts']},
        {label: 'Data Tables', icon : '', routerLink: ['data-visualization/data-tables/organizational-example']},
    ]},
    {label: 'Input', icon: '', items: [
        {label: 'Forms and Popups', icon : '', routerLink: ['']},
    ]}
];
}
