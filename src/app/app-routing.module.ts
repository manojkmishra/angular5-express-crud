import{ CrudComponent} from './crud/crud.component';
import{ HomeComponent} from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path : '',redirectTo:'/home', pathMatch:'full'},
{path: 'home', component: HomeComponent},
{path: 'crud',component: CrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
