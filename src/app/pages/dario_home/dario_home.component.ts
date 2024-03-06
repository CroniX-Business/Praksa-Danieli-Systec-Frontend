import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { AppRoutesConfig } from '../../configs/routes.config';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DarioCategoryComponent } from '../dario_category/dario_category.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dario-home',
  standalone: true,
  templateUrl: './dario_home.component.html',
  styleUrl: './dario_home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    DarioCategoryComponent,
  ],
})
export class DarioHomeComponent {
  public appRoutes = AppRoutesConfig;

  public constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  @HostListener('click') public myClick(): void {
    if (!this.authService.isLoggedIn()) {
      this.authService.logOut();
      this.router.navigate([AppRoutesConfig.routeNames.login]);
    }
  }

  public logOut(): void {
    this.authService.logOut();
  }
}
