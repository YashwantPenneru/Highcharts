import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chart-selector',
  imports: [],
  templateUrl: './chart-selector.component.html',
  styleUrl: './chart-selector.component.css'
})
export class ChartSelectorComponent {
  @Output() chartSelected = new EventEmitter<string>();

  chartTemplates = [
    { name: 'Pie Chart', type: 'pie' },
    { name: 'Column Chart', type: 'column' },
    { name: 'Line Chart', type: 'line' },
    { name: 'TreeMap Chart', type: 'treemap' },
    { name: 'Area Chart', type: 'area' },
    { name: 'StackedBar Chart', type: 'stackedbar' }
  ];
selectedChart: any;

  selectChart(chartType: string) {
    this.chartSelected.emit(chartType);
  }
}
