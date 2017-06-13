import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { routes } from './menu-config';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { ChequeDetailComponent } from './cheque-detail.component';
import { ChequeListComponent }   from './cheque-list.component';
import { ChequeService }         from './services/cheque.service';
import { BackendService }      from './services/backend.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routes ],
  declarations: [ AppComponent, HomeComponent, ChequeListComponent, ChequeDetailComponent ],
  providers:    [ BackendService, ChequeService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
