import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { LayoutComponent } from './areas/shared/layout/layout.component';
import { HeaderComponent } from './areas/shared/layout/header/header.component';
import { FooterComponent } from './areas/shared/layout/footer/footer.component';
import { IndexComponent } from './areas/home/index/index.component';
import { LoginComponent } from './areas/account/login/login.component';
import { SignupComponent } from './areas/account/signup/signup.component';
import { NotFoundComponent } from './areas/shared/err/not-found/not-found.component';
import { AccountLayoutComponent } from './areas/account/account-layout/account-layout.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { MobileNavigationComponent } from './areas/shared/layout/mobile-navigation/mobile-navigation.component';
import { ContactComponent } from './areas/contact/contact.component';
import { ProfileComponent } from './areas/user/profile/profile.component';
import { TournamentsComponent } from './areas/home/index/tournaments/tournaments.component';
import { LeaderboardsComponent } from './areas/home/index/leaderboards/leaderboards.component';
import { HistoryComponent } from './areas/home/index/history/history.component';
import { TournamentComponent } from './areas/home/index/tournaments/tournament/tournament.component';
import { EditProfileComponent } from './areas/user/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './areas/user/change-password/change-password.component';
import { UserLayoutComponent } from './areas/user/user-layout/user-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    AccountLayoutComponent,
    MobileNavigationComponent,
    ContactComponent,
    ProfileComponent,
    TournamentsComponent,
    LeaderboardsComponent,
    HistoryComponent,
    TournamentComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    UserLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
