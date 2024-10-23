import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { PrincipalComponent } from "./principal/principal.component"; 

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, PrincipalComponent, NgIf] 
})
export class AppComponent {
  title = 'api-front';
  showContent = true;
}