import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Languages } from '../../configs/app-languages.config';
import { appConfiguration } from '../../configs/app.config';
@Component({
  selector: 'app-dominik-login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Dominik_login.component.html',
  styleUrl: './Dominik_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DominikLoginComponent { 
  Lan=Languages;
  showPassword=false
  appCnfg=appConfiguration;
  passwordstate = "Password"
  change_pass_state(){
    if (this.passwordstate=="Password"){
      this.passwordstate="Text"
      this.showPassword=true}
    else{
      this.passwordstate="Password"
      this.showPassword=false}
  }
}
