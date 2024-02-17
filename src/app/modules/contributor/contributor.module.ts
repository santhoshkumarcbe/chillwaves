import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributorRoutingModule } from './contributor-routing.module';
import { ChatComponent } from './chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { ContributorDashboardComponent } from './contributor-dashboard/contributor-dashboard.component';
import { HeaderComponent } from "../../components/header/header.component";
import { TasksComponent } from './tasks/tasks.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';


@NgModule({
    declarations: [
        ChatComponent,
        ContributorDashboardComponent,
        TasksComponent
    ],
    imports: [
        CommonModule,
        ContributorRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HeaderComponent,
        FooterComponent
    ]
})
export class ContributorModule { }
