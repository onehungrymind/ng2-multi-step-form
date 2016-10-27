import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { user, UserService } from './state/user';
import { health, HealthService } from './state/health';
import { ResultService} from './state/result';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { FormsComponent } from './forms/forms.component';
import { UserComponent } from './forms/user/user.component';
import { HealthComponent } from './forms/health/health.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    FormsComponent,
    UserComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore({user, health})
  ],
  providers: [
    UserService,
    HealthService,
    ResultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
