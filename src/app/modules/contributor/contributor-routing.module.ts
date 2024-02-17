import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributorDashboardComponent } from './contributor-dashboard/contributor-dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path:'', component:TasksComponent},
  {path:'chat', component:ChatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContributorRoutingModule { }
