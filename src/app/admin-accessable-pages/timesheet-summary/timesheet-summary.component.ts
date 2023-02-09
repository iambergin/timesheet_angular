import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { GeneralService } from 'src/app/_services/general.service';

@Component({
  selector: 'app-timesheet-summary',
  templateUrl: './timesheet-summary.component.html',
  styleUrls: ['./timesheet-summary.component.css']
})
export class TimesheetSummaryComponent implements OnInit {

  chartData = new Map()
  monthView = new Map()
  
  constructor(private generalService: GeneralService,  private spinner: NgxSpinnerService) {}


  ngOnInit(): void {
    this.getAllTimesheet()
  }

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData_userBased: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  public barChartData_monthBased: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
  

  getAllTimesheet() {
    this.spinner.show()
    this.generalService.getTimesheetFoAll().subscribe((x) => {
      let timesheetData : any = x.response
      timesheetData.forEach((e: any) => {
      if (this.chartData.has(e.user.email)) {
        this.chartData.set(e.user.email, e.hrs + this.chartData.get(e.user.email))
      } else {
        this.chartData.set(e.user.email, e.hrs)
      }
      let month = new Date(e.date.split("T")[0]).toLocaleString('default', { month: 'short', year: "numeric" });
      if (this.monthView.has(month)) {
        this.monthView.set(month, e.hrs + this.monthView.get(month))
      } else {
        this.monthView.set(month, e.hrs)
      }
      });
    }, () => {}, () => {
      this.barChartData_userBased = {
        labels: [ ...this.chartData.keys() ],
        datasets: [
          { data: [ ...this.chartData.values() ], label: 'Users' }
        ]
      };
      this.barChartData_monthBased = {
        labels: [ ...this.monthView.keys() ],
        datasets: [
          { data: [ ...this.monthView.values() ], label: 'Month' }
        ]
      };
      this.spinner.hide()
    })
  }
}
