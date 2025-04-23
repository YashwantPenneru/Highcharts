import { Routes } from '@angular/router';
import { ChartDashboardComponent } from './components/chart-dashboard/chart-dashboard.component';

export const routes: Routes = [
  { 
    path: 'highcharts', 
    component: ChartDashboardComponent,
    data: { title: 'Chart Dashboard' }
  },
  { 
    path: '', 
    redirectTo: '/highcharts', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: '/highcharts' 
  }
];