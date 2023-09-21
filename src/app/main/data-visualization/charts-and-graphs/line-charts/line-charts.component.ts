import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; 

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html',
  styleUrls: ['./line-charts.component.scss']
})
export class LineChartsComponent implements OnInit{
  constructor(){}

  lineChartData : any; 
  lineChartOptions : any; 
  lineChartLegendPosition : any = {position : 'top', class: 'pi pi-arrow-down'};
  comboChartData : any; 
  comboChartOptions : any; 
  comboChartLegendPosition : any = {position : 'top', class: 'pi pi-arrow-down'};
  //general chart variables
  justifyOptions : any[] = [
    {position : 'top', class: 'pi pi-arrow-up'},{position : 'right', class: 'pi pi-arrow-right'},
    {position : 'bottom', class: 'pi pi-arrow-down'},{position : 'left', class: 'pi pi-arrow-left'}
  ]

  ngOnInit(): void {
    Chart.register(ChartDataLabels);
    this.setChartData(); 
    this.setChartOptions(); 
  }

  //chart functions
  setChartData(){
    const documentStyle = getComputedStyle(document.documentElement);
    this.lineChartData = {
      labels: ['Electric Forest', 'Bonaroo', 'Coachella', 'Lost Lands', 'Lollapalooza', 'North Coast', 'Suwannee Hulaween'],
      datasets: [
        {
          label: '2021',
          data: [8.4, 6.5, 10.1, 4.5, 8.4, 3.2, 4.2],
          fill: false,
          yAxisID: 'y',
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--orange-500')
        },
        {
          label: '2022',
          data: [9.6, 7.3, 12.2, 5, 9.1, 3.9, 4.5],
          fill: false,
          yAxisID: 'y1',
          borderDash: [10, 10],
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--purple-500')
        },
        {
          label: '2023',
          data: [11.1, 7.6, 18.3, 6.2, 10, 4.3, 4.8],
          fill: true,
          yAxisID: 'y1',
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          backgroundColor: 'rgba(20,184,166,0.2)'
        }
      ]
    };
    this.comboChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'line',
          label: 'Annual Targets',
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          borderWidth: 2,
          tension: 0.4,
          data: [250, 275, 275, 325, 400, 300, 150]
        },
        {
          type: 'bar',
          label: 'Q1 Sales',
          backgroundColor: documentStyle.getPropertyValue('--green-400'),
          data: [45, 87, 110, 113, 134, 65, 25],
          borderColor: documentStyle.getPropertyValue('--green-600'),
          borderWidth: 1
        },
        {
          type: 'bar',
          label: 'Q2 Sales',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          data: [100, 35, 45, 74, 97, 115, 16],
          borderColor: documentStyle.getPropertyValue('--blue-600'),
          borderWidth: 1
        },
        {
          type: 'bar',
          label: 'Q3 Sales',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [46, 97, 68, 74, 176, 145, 38],
          borderColor: documentStyle.getPropertyValue('--yellow-600'),
          borderWidth: 1
        },
        {
          type: 'bar',
          label: 'Q4 Sales',
          backgroundColor: documentStyle.getPropertyValue('--purple-300'),
          data: [73, 52, 48, 74, 90, 75, 43],
          borderColor: documentStyle.getPropertyValue('--purple-600'),
          borderWidth: 1
        }
      ]
    };
  }
  setChartOptions() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.lineChartOptions = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          position : this.lineChartLegendPosition.position,
          labels: {
            color: textColor
          }
        },
        datalabels: {
          display : true,
          anchor : 'end',
          clamp : true, 
          color: 'black',
          font: {
            weight: 'bold', 
            size : 10
          },
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          max : 20, 
          min : 0, 
          ticks: {
            stepSize : 2,
            steps : 10,
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          max : 20, 
          min : 0, 
          ticks: {
            stepSize : 5,
            steps : 4,
            color: textColorSecondary
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder
          }
        }
      }
    };
    this.comboChartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          position : this.comboChartLegendPosition.position,
          labels: {
            color: textColor
          }
        },
        datalabels: {
          display : true,
          color : 'black',
          font: {
            weight: 'bold', 
            size : 10
          },
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          stacked: true,
          type: 'linear',
          display: true,
          position: 'left', 
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
      }
    };
  }
}
