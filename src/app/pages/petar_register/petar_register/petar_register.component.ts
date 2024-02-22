import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppConfig } from '../../../config/app.config';

@Component({
  selector: 'app-petar-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './petar_register.component.html',
  styleUrl: './petar_register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetarRegisterComponent {
  public appConfig = AppConfig;

  public show: boolean = true;
  public showRepeat: boolean = true;

  public registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
}
