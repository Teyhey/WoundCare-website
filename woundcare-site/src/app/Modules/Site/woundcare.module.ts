import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentComponent } from './views/Patient/Appointments_patient/appointment.component';
import { HealthpageComponent } from './views/Patient/Health_Homepage_patient/healthpage.component';
import { WoundhistoryComponent } from './views/Patient/Wound_History_patient/woundhistory.component';
import { WoundresultsComponent } from './views/Patient/Wound_Results_patient/woundresults.component';

const routes: Routes = [
  {path: '', redirectTo: 'healthpage'},
  {path: 'healthpage', component: HealthpageComponent},
  {path: 'appointments', component: AppointmentComponent},
  {path: 'woundhistory', component: WoundhistoryComponent},
  {path: 'woundresults', component: WoundresultsComponent},
];

@NgModule({
  declarations:[
    AppointmentComponent,
    HealthpageComponent,
    WoundhistoryComponent,
    WoundresultsComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [],
  providers: [],
  exports: [RouterModule]
})
export class WoundCareModule {}
