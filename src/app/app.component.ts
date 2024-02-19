import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DominikComponentComponent } from "../components/dominik-component/dominik-component.component";
import { PetarComponentComponent } from "../components/petar-component/petar-component.component";
import { DarioComponentComponent } from "../components/dario-component/dario-component.component";
import { DraganComponent } from '../components/dragan/dragan.component';
import { BrunoCalculatorComponent } from '../components/bruno-calculator/bruno-calculator.component';
import { DraganLoginComponent } from '../components/dragan_login/dragan_login.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PetarComponentComponent, FormsModule, DominikComponentComponent, DarioComponentComponent,DraganComponent,BrunoCalculatorComponent, DraganLoginComponent,]
})
export class AppComponent {
}
