import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        HttpClientModule

    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }