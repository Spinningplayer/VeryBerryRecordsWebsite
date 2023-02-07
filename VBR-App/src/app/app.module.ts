import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { ContactComponent } from './body-container/contact/contact.component';
import { AgendaComponent } from './body-container/agenda/agenda.component';
import { ArtistsComponent } from './body-container/artists/artists.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'agenda', component: AgendaComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'contact', component: ContactComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyContainerComponent,
    ContactComponent,
    AgendaComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
