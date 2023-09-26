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
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { OrganizationExmapleComponent } from './data-tables/organization-exmaple/organization-exmaple.component';
import { ShoppingExampleComponent } from './data-tables/shopping-example/shopping-example.component';
import { SliderModule } from 'primeng/slider';
import { BadgeModule } from 'primeng/badge';
import { MessageService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  declarations: [
    ChartsAndGraphsComponent,
    DataTablesComponent,
    DataVisualizationComponent,
    PieAndDoughnutChartsComponent,
    BarChartsComponent,
    LineChartsComponent,
    OrganizationExmapleComponent,
    ShoppingExampleComponent,
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
    SelectButtonModule,
    TableModule,
    RatingModule,
    ButtonModule, 
    InputTextModule, 
    TooltipModule, 
    RippleModule,
    MultiSelectModule,
    TriStateCheckboxModule,
    SliderModule,
    BadgeModule,
    CheckboxModule, 
    RadioButtonModule,
  ]
})
export class DataVisualizationModule { }
