import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbar } from '@angular/material/toolbar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    MatToolbar,
    NgOptimizedImage,
    MatIcon,
    RouterLink,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
  ],
})
export class SharedModule {
}
