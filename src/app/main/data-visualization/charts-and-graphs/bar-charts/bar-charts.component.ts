import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; 

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.scss']
})
export class BarChartsComponent implements OnInit{
  constructor(){}

  //bar chart variables
  barChartData : any; 
  verticalBarOptions : any; 
  stackedVerticalBars : any = 'Off'; 
  verticalLegendPosition : any = {position : 'top', class: 'pi pi-arrow-down'};
  horizontalBarOptions : any; 
  stackedHorizontalBars : any = 'On'; 
  horizontalLegendPosition : any = {position : 'bottom', class: 'pi pi-arrow-down'};
  //general chart variables
  justifyOptions : any[] = [
    {position : 'top', class: 'pi pi-arrow-up'},{position : 'right', class: 'pi pi-arrow-right'},
    {position : 'bottom', class: 'pi pi-arrow-down'},{position : 'left', class: 'pi pi-arrow-left'}
  ]

  ngOnInit(): void {
    Chart.register(ChartDataLabels)
    this.setChartData(); 
    this.setChartOptions(); 
  }
  setChartData() {
    const documentStyle = getComputedStyle(document.documentElement);
    this.barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              type: 'bar',
              label: 'Q1 Sales',
              backgroundColor: documentStyle.getPropertyValue('--indigo-500'),
              data: [64, 31, 12, 11, 45, 98, 23]
          },
          {
              type: 'bar',
              label: 'Q2 Sales',
              backgroundColor: documentStyle.getPropertyValue('--primary-500'),
              data: [76, 45, 15, 13, 37, 65, 34]
          },
          {
              type: 'bar',
              label: 'Q3 Sales',
              backgroundColor: documentStyle.getPropertyValue('--pink-500'),
              data: [86, 76, 16, 74, 23, 21, 32]
          },
          {
            type: 'bar',
            label: 'Q4 Sales',
            backgroundColor: documentStyle.getPropertyValue('--blue-500'),
            data: [86, 76, 16, 74, 23, 21, 32]
        }
      ]
  };
  }
  setChartOptions() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.verticalBarOptions = {
      plugins: {
        legend: {
          position : this.verticalLegendPosition.position,
          labels: {
            color: textColor
          }
        },
        datalabels: {
          display : true,
          color: 'white',
          font: {
            weight: 'bold', 
            size : 10
          },
        }
      },
      scales: {
        y: {
          stacked : this.stackedVerticalBars == 'On' ? true : false,
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          stacked : this.stackedVerticalBars == 'On' ? true : false,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
    this.horizontalBarOptions = {
      indexAxis : 'y',
      plugins: {
        legend: {
          position : this.horizontalLegendPosition.position,
          labels: {
            color: textColor
          }
        },
        datalabels: {
          display : true,
          color: 'white',
          font: {
            weight: 'bold', 
            size : 10
          },
        }
      },
      scales: {
        y: {
          stacked : this.stackedHorizontalBars == 'On' ? true : false,
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          stacked : this.stackedHorizontalBars == 'On' ? true : false,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }
}
