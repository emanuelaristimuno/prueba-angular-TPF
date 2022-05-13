import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { ExperiencesComponent } from './componentes/experiences/experiences.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    AcercadeComponent,
    ExperienceComponent,
    ExperiencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
