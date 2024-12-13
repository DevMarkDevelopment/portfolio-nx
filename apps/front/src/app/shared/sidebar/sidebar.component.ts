import { Component, signal } from '@angular/core';
import { SidebarContentData } from './sidebar-content.data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isOpen = signal(true);

  readonly sidebarContent = SidebarContentData;

  toggleSidebar(): void {
    this.isOpen.set(!this.isOpen());
  }
}
