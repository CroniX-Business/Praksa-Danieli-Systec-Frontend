import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DominikLoginComponent } from './pages/Dominik_login/Dominik_login.component';
import { DominikRegisterComponent } from './pages/Dominik_register/Dominik_register.component';
import { DominikErrorComponent } from './pages/Dominik_error/Dominik_error.component';
import { DominikMainComponent } from './pages/Dominik_main/Dominik_main.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DominikLoginComponent,
    DominikRegisterComponent,
    DominikErrorComponent,
    DominikMainComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
