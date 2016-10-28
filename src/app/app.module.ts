import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { user, UserService } from './state/user';
import { health, HealthService } from './state/health';
import { RemoteService} from './state/remote';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { FormsComponent } from './forms/forms.component';
import { SuccessDialogComponent } from './forms/success-dialog.component';
import { UserComponent } from './forms/user/user.component';
import { HealthComponent } from './forms/health/health.component';
import { SummaryComponent } from './forms/summary/summary.component';
import { CapitalizePipe } from './forms/summary/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    FormsComponent,
    UserComponent,
    HealthComponent,
    SuccessDialogComponent,
    SummaryComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    StoreModule.provideStore({user, health})
  ],
  entryComponents: [
    SuccessDialogComponent
  ],
  providers: [
    UserService,
    HealthService,
    RemoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
