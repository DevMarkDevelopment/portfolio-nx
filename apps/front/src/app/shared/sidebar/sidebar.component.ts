import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isOpen = signal(true);

  toggleSidebar(): void {
    this.isOpen.set(!this.isOpen());
  }
}
