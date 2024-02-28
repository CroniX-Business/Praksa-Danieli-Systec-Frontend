import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRoutesConfig } from '../../configs/routes.config';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dario-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dario_home.component.html',
  styleUrl: './dario_home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarioHomeComponent {
  public appRoutes = AppRoutesConfig.routes;
}
