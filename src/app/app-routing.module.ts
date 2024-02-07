import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContributorModule } from './modules/contributor/contributor.module';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'contributor',
   canActivate: [AuthGuard],
   loadChildren: () =>
    import ('./modules/contributor/contributor.module')
    .then((m) => m.ContributorModule)
  },
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
