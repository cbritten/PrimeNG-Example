import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsAndGraphsComponent } from './charts-and-graphs/charts-and-graphs.component';
import { DataVisualizationComponent } from './data-visualization.component';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { PieAndDoughnutChartsComponent } from './charts-and-graphs/pie-and-doughnut-charts/pie-and-doughnut-charts.component';
import { BarChartsComponent } from './charts-and-graphs/bar-charts/bar-charts.component';
import { LineChartsComponent } from './charts-and-graphs/line-charts/line-charts.component';
import { OrganizationExmapleComponent } from './data-tables/organization-exmaple/organization-exmaple.component';
import { ShoppingExampleComponent } from './data-tables/shopping-example/shopping-example.component';

const routes: Routes = [
  {path: '', component: DataVisualizationComponent, children:[
    {path: 'charts-and-graphs', component: ChartsAndGraphsComponent, children: [
      {path: 'pie-and-doughnut-charts', component: PieAndDoughnutChartsComponent},
      {path: 'bar-charts', component: BarChartsComponent},
      {path: 'line-charts', component: LineChartsComponent},
    ]},
    {path : 'data-tables', component: DataTablesComponent, children:[
      {path: 'organizational-example', component: OrganizationExmapleComponent},
      {path: 'shopping-example', component: ShoppingExampleComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataVisualizationRoutingModule { }
