import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthComponent } from './components/auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsService } from './components/planets/planets.service';
import { PlanetCardComponent } from './components/planets/planet-card/planet-card.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetCardComponent,
    AuthComponent,
    NotFoundComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    PlanetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
