import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataVisualizationRoutingModule } from './data-visualization-routing.module';
import { ChartsAndGraphsComponent } from './charts-and-graphs/charts-and-graphs.component';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { DataVisualizationComponent } from './data-visualization.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { ChartModule } from 'primeng/chart';
import { PieAndDoughnutChartsComponent } from './charts-and-graphs/pie-and-doughnut-charts/pie-and-doughnut-charts.component';
import { BarChartsComponent } from './charts-and-graphs/bar-charts/bar-charts.component';
import { LineChartsComponent } from './charts-and-graphs/line-charts/line-charts.component';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChartsAndGraphsComponent,
    DataTablesComponent,
    DataVisualizationComponent,
    PieAndDoughnutChartsComponent,
    BarChartsComponent,
    LineChartsComponent,
  ],
  imports: [
    CommonModule,
    DataVisualizationRoutingModule,
    TabMenuModule,
    ChartModule,
    DialogModule, 
    ToastModule, 
    FormsModule,
    OverlayPanelModule,
    SelectButtonModule

  ]
})
export class DataVisualizationModule { }
