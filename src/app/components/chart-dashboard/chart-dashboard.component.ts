import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chart-data.service';
import { CookieService } from '../../services/cookie.service';
import { ChartSelectorComponent } from '../chart-selector/chart-selector.component';
import { ChartContainerComponent } from '../chart-container/chart-container.component';

@Component({
  selector: 'app-chart-dashboard',
  imports: [ChartSelectorComponent, ChartContainerComponent],
  templateUrl: './chart-dashboard.component.html',
  styleUrl: './chart-dashboard.component.css'
})
export class ChartDashboardComponent {
  selectedChart: string = '';

  constructor(
    private chartDataService: ChartDataService,
    private cookieService: CookieService
  ) {

    const lastChart = this.cookieService.get('lastSelectedChart');
    if (lastChart) {
      this.selectedChart = lastChart;
    }
  }

  onChartSelected(chartType: string) {
    this.selectedChart = chartType;
    this.chartDataService.setSelectedChart(chartType);
    this.cookieService.set('lastSelectedChart', chartType, 7);
  }
}
