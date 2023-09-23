import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; 

@Component({
  selector: 'app-pie-and-doughnut-charts',
  templateUrl: './pie-and-doughnut-charts.component.html',
  styleUrls: ['./pie-and-doughnut-charts.component.scss']
})
export class PieAndDoughnutChartsComponent implements OnInit{

  //pie chart variables
  pieData1 : any; 
  pieData2 : any; 
  pieOptions : any; 
  showPieChartLabels : any = 'On'; 
  pieChartLegendPosition : any = {position : 'top', class: 'pi pi-arrow-up'};
  //doughnut chart variables
  doughnutData1 : any; 
  doughnutData2 : any; 
  doughnutOptions : any;
  showDoughnutChartLabels : any = 'On'; 
  doughnutChartLegendPosition : any = {position : 'bottom', class: 'pi pi-arrow-down'};
  //radar chart variables
  radarChartData : any; 
  radarChartOptions : any;
  showRadarChartLabels : any = 'Off'; 
  radarChartLegendPosition : any = {position : 'top', class: 'pi pi-arrow-up'};
  //polar chart variables
  polarChartData : any; 
  polarChartOptions : any; 
  showPolarChartLabels : any = 'On'; 
  polarChartLegendPosition : any = {position : 'top', class: 'pi pi-arrow-up'}; 
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
  //chart option functions
  setChartData() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    //PIE DATA VARIABLES 
    this.pieData1 = {
      labels: ['Ford', 'Chevy', 'Hyundai', 'Honda', 'BMW', 'Nissan', 'Toyota'],
      datasets: [
        {
          data: [22.1, 21.9, 18.9, 11, 9, 8.6, 8.5],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'), 
            documentStyle.getPropertyValue('--yellow-500'), 
            documentStyle.getPropertyValue('--green-500'),
            documentStyle.getPropertyValue('--indigo-500'),
            documentStyle.getPropertyValue('--primary-500'),
            documentStyle.getPropertyValue('--purple-500'),
            documentStyle.getPropertyValue('--orange-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-300'), 
            documentStyle.getPropertyValue('--yellow-300'), 
            documentStyle.getPropertyValue('--green-300'),
            documentStyle.getPropertyValue('--indigo-300'),
            documentStyle.getPropertyValue('--primary-300'),
            documentStyle.getPropertyValue('--purple-300'),
            documentStyle.getPropertyValue('--orange-300'),
          ]
        }
      ]
    };
    this.pieData2 = {
      labels: ['No Data Retrieved'],
      datasets: [
        {
          data: [1],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'), 
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-300'), 
          ]
        }
      ]
    };
    //DOUGHNUT DATA VARIABLES
    this.doughnutData1 = {
      labels: ['Cornell', 'Penn', 'Columbia', 'Harvard',],
      datasets: [
        {
          data: [5548, 6590, 7240, 10412],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'), 
            documentStyle.getPropertyValue('--yellow-500'), 
            documentStyle.getPropertyValue('--primary-500'),
            documentStyle.getPropertyValue('--indigo-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-300'), 
            documentStyle.getPropertyValue('--yellow-300'), 
            documentStyle.getPropertyValue('--primary-300'),
            documentStyle.getPropertyValue('--indigo-300'),
          ]
        }
      ]
    };
    this.doughnutData2 = {
      labels: ['No Data Retrieved'],
      datasets: [
        {
          data: [1],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'), 
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-300'), 
          ]
        }
      ]
    };
    //RADAR CHART VARIABLES
    this.radarChartData = {
      labels: ['Contract Ended', 'Voluntary', 'Team Reduction', 'Fiscal Reduction'],
      datasets: [
        {
          label: 'Q1',
          borderColor: documentStyle.getPropertyValue('--primary-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--primary-400'),
          pointBorderColor: documentStyle.getPropertyValue('--primary-800'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--primary-400'),
          fill : false,
          data: [3, 1, 0, 3]
        },
        {
          label: 'Q2',
          borderColor: documentStyle.getPropertyValue('--indigo-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--indigo-400'),
          pointBorderColor: documentStyle.getPropertyValue('--indigo-800'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--indigo-400'),
          fill : false,
          data: [4, 2, 7, 2]
        },
        {
          label: 'Q3',
          borderColor: documentStyle.getPropertyValue('--yellow-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--yellow-400'),
          pointBorderColor: documentStyle.getPropertyValue('--yellow-800'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--yellow-400'),
          fill : false,
          data: [0, 2, 1, 0]
        },
        {
          label: 'Q4',
          borderColor: documentStyle.getPropertyValue('--pink-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
          pointBorderColor: documentStyle.getPropertyValue('--pink-800'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
          fill : false,
          data: [1, 3, 2, 4,]
        }
      ]
    };
    //POLAR CHART VARIABLES
    this.polarChartData = {
      datasets: [
        {
          data: [2, 4, 0, 3, 1, 4],
          backgroundColor: [
            documentStyle.getPropertyValue('--red-500'),
            documentStyle.getPropertyValue('--green-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--primary-500'),
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--indigo-500')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--red-300'),
            documentStyle.getPropertyValue('--green-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--primary-300'),
            documentStyle.getPropertyValue('--blue-300'),
            documentStyle.getPropertyValue('--indigo-300')
          ],
          label: 'My dataset'
        }
      ],
      labels: ['January', 'February', 'March', 'April', 'May', 'June']
    };
  }
  setChartOptions() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = 'rgba(0, 0, 0, .6)';
    //PIE OPTIONS
    this.pieOptions = {
      plugins: {
        legend: {
          position : this.pieChartLegendPosition.position,
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }, 
        datalabels: {
          display : this.showPieChartLabels == 'On' ? true : false,
          color: 'white',
          font: {
            weight: 'bold', 
            size : 12
          },
          formatter:function(value : any) {
            if(value > 0){
              return value + ' %';
            }else {
              value = ''
              return value;
            }
          }
        }
      }
    };
    //DOUGHNUT OPTIONS
    this.doughnutOptions = {
      cutout: '55%',
      plugins: {
        legend: {
          position : this.doughnutChartLegendPosition.position,
          labels: {
            usePointStyle: true,
            color: textColor,
          }
        },
        datalabels: {
          display : this.showDoughnutChartLabels == 'On' ? true : false,
          color: 'white',
          font: {
            weight: 'bold', 
            size : 12
          },
          formatter:function(value : any) {
            if(value > 0){
              return value;
            }else {
              value = ''
              return value;
            }
          }
        }
      }
    };
    //RADAR OPTIONS
    this.radarChartOptions = {
      plugins: {
        legend: {
          position : this.radarChartLegendPosition.position,
          labels: {
            color: textColor
          }
        },
        datalabels: {
          display : this.showRadarChartLabels == 'On' ? true : false,
          color: 'black',
          font: {
            weight: 'bold', 
            size : 12
          },
        }
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondary
          },
          pointLabels: {
            color: textColorSecondary
          }
        }
      }
    };
    //POLAR OPTIONS
    this.polarChartOptions = {
      plugins: {
        legend: {
          position : this.polarChartLegendPosition.position,
          labels: {
            color: textColor
          }
        },
        datalabels: {
          display : this.showPolarChartLabels == 'On' ? true : false,
          color: 'white',
          font: {
            weight: 'bold', 
            size : 12
          },
        }
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondary
          },
          pointLabels: {
            color: textColorSecondary
          }
        }
      }
    };
  }

}
