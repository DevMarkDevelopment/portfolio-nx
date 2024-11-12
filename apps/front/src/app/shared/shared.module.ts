import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbar } from '@angular/material/toolbar';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatToolbar,
    NgOptimizedImage,
  ],
  exports: [
    NavbarComponent,
  ],
})
export class SharedModule {
}
