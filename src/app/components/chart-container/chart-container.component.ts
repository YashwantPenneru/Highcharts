import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
import TreemapModule from 'highcharts/modules/treemap';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';


@Component({
  selector: 'app-chart-container',
  imports: [HighchartsChartModule, CommonModule],
  templateUrl: './chart-container.component.html',
  styleUrl: './chart-container.component.css'
})
export class ChartContainerComponent implements OnChanges,OnInit{
  @Input() chartType: string = '';
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  selectedChart: any;
   ngOnInit(): void {
    TreemapModule(Highcharts);    
  }

  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['chartType']) {
      this.generateChart(this.chartType);
    }
  }

// Generate Chart
  private generateChart(chartType: string) {
    switch (chartType) {
      case 'pie':
        this.chartOptions = this.getPieChartOptions();
        break;
      case 'column':
        this.chartOptions = this.getColumnChartOptions();
        break;
      case 'line':
        this.chartOptions = this.getLineChartOptions();
        break;
      case 'treemap':
        this.chartOptions = this.getTreemapOptions();
        break;
      case 'area':
        this.chartOptions = this.getAreaChartOptions();
        break;
      case 'stackedbar':
        this.chartOptions = this.getStackedBarOptions();
        break;
      default:
        this.chartOptions = {};
    }
    
  }

  
  // PieChart
  private getPieChartOptions(): Highcharts.Options {
    return {
      credits: {
        enabled: false
      },
      chart: { type: 'pie' },
      title: { text: 'Browser Market Shares' },
      series: [{
        type: 'pie',
        data: [
          { name: 'Chrome', y: 61.41 },
          { name: 'Edge', y: 11.84 },
          { name: 'Firefox', y: 10.85 },
          { name: 'Safari', y: 4.67 },
          { name: 'Other', y: 11.23 }
        ]
      }]
    };
  }

  // Column Chart
  private getColumnChartOptions(): Highcharts.Options {
    return {
      credits: {
        enabled: false
      },
      chart: { type: 'column' },
      title: { text: 'Monthly Fruit Consumption' },
      xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
      yAxis: { title: { text: 'Fruits consumed' } },
      series: [{
        type: 'column',
        name: 'Apples',
        data: [5, 3, 4, 7, 2]
      }, {
        type: 'column',
        name: 'Oranges',
        data: [2, 2, 3, 2, 1]
      }]
    };
  }

  // Line Chart
  private getLineChartOptions(): Highcharts.Options {
    return {
      credits: {
        enabled: false
      },
      chart: { type: 'line' },
      title: { text: 'Monthly Sales' },
      xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
      yAxis: { title: { text: 'Sales amount' } },
      series: [{
        type: 'line',
        name: 'Sales',
        data: [1, 3, 2, 4, 5]
      }]
    };
  }

  // Tree Chart
  private getTreemapOptions(): Highcharts.Options {
    return {
      credits: {
        enabled: false
      },
      chart: {
        type: 'treemap',
        height: '400px'
      },
      title: {
        text: 'Product Categories by Market Share'
      },
      series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        data: [{
          name: 'Electronics',
          value: 60,
          colorValue: 1
        }, {
          name: 'Furniture',
          value: 30,
          colorValue: 2
        }, {
          name: 'Clothing',
          value: 25,
          colorValue: 3
        }, {
          name: 'Home Appliances',
          value: 15,
          colorValue: 4
        }, {
          name: 'Sports',
          value: 10,
          colorValue: 5
        }],
        dataLabels: {
          enabled: true,
          format: '{point.name}<br>${point.value}M',
          style: {
            color: '#ffffff',
            fontWeight: 'bold',
            textOutline: 'none'
          }
        },
        levelIsConstant: false,
        levels: [{
          level: 1,
          dataLabels: {
            enabled: true
          },
          borderWidth: 3
        }]
      }],
      colorAxis: {
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors?.[0]
      },
      tooltip: {
        pointFormat: '<b>{point.name}</b>: ${point.value}M market share'
      }
    };
  }

  // Area Chart
  private getAreaChartOptions(): Highcharts.Options {
    return {
      credits: {
        enabled: false
      },
      chart: { type: 'area' },
      title: { text: 'Revenue Growth' },
      xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
      yAxis: { title: { text: 'Revenue (USD)' } },
      series: [{
        type: 'area',
        name: 'Revenue',
        data: [1, 3, 2, 4, 5]
      }]
    };
  }

  // Stacked Bar
  private getStackedBarOptions(): Highcharts.Options {
    return {
      credits: {
        enabled: false
      },
      chart: { type: 'bar' },
      title: { text: 'Stacked Bar Chart' },
      xAxis: { categories: ['Apples', 'Oranges', 'Pears'] },
      yAxis: { title: { text: 'Amount' } },
      plotOptions: {
        bar: { stacking: 'normal' }
      },
      series: [{
        type: 'bar',
        name: 'John',
        data: [5, 3, 4]
      }, {
        type: 'bar',
        name: 'Jane',
        data: [2, 2, 3]
      }]
    };
  }

}
