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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArtistPageComponent } from './body-container/artist-page/artist-page.component';
import { ArtistShowTablerowComponent } from './body-container/artist-page/artist-show-tablerow/artist-show-tablerow.component';
import { ShowCardComponent } from './body-container/agenda/show-card/show-card.component';
import { DatePipe } from '@angular/common';
import { ArtistService } from './services/artist.service';
import { ShowService } from './services/show.service';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminArtistComponent } from './admin/admin-artist/admin-artist.component';
import { AdminShowsComponent } from './admin/admin-shows/admin-shows.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AuthGuard } from './_helpers/auth.guard';
import { JwtInterceptor } from './_helpers/jwt.intercepter';
import { AdminArtistFormComponent } from './admin/admin-artist/admin-artist-form/admin-artist-form.component';
import { HttpErrorInterceptor } from './_helpers/error.interceptor';
import { AdminShowFormComponent } from './admin/admin-shows/admin-show-form/admin-show-form.component';

const appRoutes: Routes = [
  {path: 'backstage', component: AdminComponent, children: [
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'artist', component: AdminArtistComponent, canActivate: [AuthGuard]},
    {path: 'artist/:name', component: AdminArtistFormComponent, canActivate: [AuthGuard]},
    {path: 'show', component: AdminShowsComponent, canActivate: [AuthGuard]},
    {path: 'show/:id', component: AdminShowFormComponent, canActivate: [AuthGuard]}
  ], canActivate: [AuthGuard]},
  {path: 'login', component: AdminLoginComponent},
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
    ShowCardComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminArtistComponent,
    AdminArtistFormComponent,
    AdminShowsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [
    DatePipe, 
    ArtistService, 
    ShowService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    // {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
