import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { ContactComponent } from './body-container/contact/contact.component';
import { AgendaComponent } from './body-container/agenda/agenda.component';
import { ArtistsComponent } from './body-container/artists/artists.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body-container/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ArtistCardComponent } from './body-container/artists/artist-card/artist-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArtistPageComponent } from './body-container/artist-page/artist-page.component';
import { ArtistShowTablerowComponent } from './body-container/artist-page/artist-show-tablerow/artist-show-tablerow.component';
import { ShowCardComponent } from './body-container/agenda/show-card/show-card.component';
import { DatePipe } from '@angular/common';

const appRoutes: Routes = [
  {path: 'agenda', component: AgendaComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'artist/:name', component: ArtistPageComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyContainerComponent,
    ContactComponent,
    AgendaComponent,
    ArtistsComponent,
    HomeComponent,
    FooterComponent,
    ArtistCardComponent,
    PageNotFoundComponent,
    ArtistPageComponent,
    ArtistShowTablerowComponent,
    ShowCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
