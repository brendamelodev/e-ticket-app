import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Walkthroug1Component } from './Components/walkthroug1/walkthroug1.component';
import { Walkthroug2Component } from './Components/walkthroug2/walkthroug2.component';

const routes: Routes = [ {
  path: "",
  pathMatch: "full",
  redirectTo: "home"
},
{ path: 'home', component: Walkthroug1Component },
{ path: 'passo1', component: Walkthroug1Component },
{ path: 'passo2', component: Walkthroug2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
