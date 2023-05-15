import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Walkthroug1Component } from './Components/walkthroug1/walkthroug1.component';
import { Walkthroug2Component } from './Components/walkthroug2/walkthroug2.component';
import { LoginComponent } from './Components/login/login.component';
import { CadastroP1Component } from './Components/cadastro-p1/cadastro-p1.component';
import { CadastroP2Component } from './Components/cadastro-p2/cadastro-p2.component';
import { CadastroP3Component } from './Components/cadastro-p3/cadastro-p3.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Walkthroug1Component,
    Walkthroug2Component,
    LoginComponent,
    CadastroP1Component,
    CadastroP2Component,
    CadastroP3Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
