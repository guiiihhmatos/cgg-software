import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  chart: any;
  chart2 : any

  ngOnInit() {
    this.createChart();
    this.createChart2()
  }

  createChart() {
    const canvas: any = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Dezembro','Janeiro', 'Fevereiro', 'Março', 'Abril'],
        datasets: [{
          label: 'Funcionários',
          data: [0, 0, 2, 3, 3],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 3,
          tension: 0.1,
          fill: false,
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom'
          },
          title: {
            display: true,
            text: 'Funcionários'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createChart2() {
    const canvas: any = document.getElementById('myChart2');
    const ctx = canvas.getContext('2d');

    this.chart2 = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'abril'],
        datasets: [{
          label: 'Serviços',
          data: [2, 3, 5, 7],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(144, 238, 144, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(144, 238, 144, 0.7)'
          ],
          borderWidth: 2,
          hoverBackgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(144, 238, 144, 1)'
          ]
        }]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Serviços prestados'
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.label || '';

                if (context.parsed) {
                  label += ': ' + context.parsed.toLocaleString();
                }

                return label;
              }
            }
          },
          legend: {
            position: 'bottom'
          },
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 0
          }
        }
      }
    });
  }

}
