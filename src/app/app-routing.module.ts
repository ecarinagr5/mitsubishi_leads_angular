import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './views/inicio/inicio.component';
import { ThankyoupageComponent } from './views/thankyoupage/thankyoupage.component';



const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'thankyoupage', component: ThankyoupageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
