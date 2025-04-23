import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
  private selectedChartSource = new BehaviorSubject<string>('');
  selectedChart$ = this.selectedChartSource.asObservable();

  private chartData = {
    pie: {
      title: 'Browser Market Shares',
      series: [{
        type: 'pie',
        data: [
          { name: 'Chrome', y: 61.41, color: '#7cb5ec' },
          { name: 'Edge', y: 11.84, color: '#434348' },
          { name: 'Firefox', y: 10.85, color: '#90ed7d' },
          { name: 'Safari', y: 4.67, color: '#f7a35c' },
          { name: 'Other', y: 11.23, color: '#8085e9' }
        ]
      }]
    },
    column: {
      title: 'Monthly Fruit Consumption',
      xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
      series: [
        { name: 'Apples', data: [5, 3, 4, 7, 2], color: '#7cb5ec' },
        { name: 'Oranges', data: [2, 2, 3, 2, 1], color: '#434348' }
      ]
    },
    line: {
      title: 'Monthly Sales',
      xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
      series: [
        { name: 'Sales', data: [1, 3, 2, 4, 5], color: '#7cb5ec' },
        { name: 'Target', data: [2, 2, 3, 3, 4], color: '#434348' }
      ]
    },

    treemap: {
      title: 'Product Categories by Market Share',
      series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        data: [
          { name: 'Electronics', value: 60, colorValue: 1 },
          { name: 'Furniture', value: 30, colorValue: 2 },
          { name: 'Clothing', value: 25, colorValue: 3 },
          { name: 'Home Appliances', value: 15, colorValue: 4 },
          { name: 'Sports', value: 10, colorValue: 5 }
        ]
      }],
      colorAxis: {
        minColor: '#FFFFFF',
        maxColor: '#7cb5ec'
      }
    },
    area: {
      title: 'Revenue Growth',
      xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
      series: [
        { name: 'Revenue', data: [1, 3, 2, 4, 5], color: '#7cb5ec', type: 'area' },
        { name: 'Expenses', data: [2, 2, 1, 3, 2], color: '#434348', type: 'area' }
      ]
    },
    stackedbar: {
      title: 'Stacked Bar Chart',
      xAxis: { categories: ['Apples', 'Oranges', 'Pears'] },
      series: [
        { name: 'John', data: [5, 3, 4], color: '#7cb5ec', type: 'bar' },
        { name: 'Jane', data: [2, 2, 3], color: '#434348', type: 'bar' },
        { name: 'Joe', data: [3, 4, 1], color: '#90ed7d', type: 'bar' }
      ],
      plotOptions: {
        bar: { stacking: 'normal' }
      }
    }
  };

  setSelectedChart(chartType: string) {
    this.selectedChartSource.next(chartType);
  }

  getChartData(chartType: string) {
    return this.chartData[chartType as keyof typeof this.chartData];
  }
}
