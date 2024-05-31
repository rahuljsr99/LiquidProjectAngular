import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  @Input() pageTitle: string = '';
  @Input() Link1: string = '';
  @Input() Link1Route: string = '';
  @Input() Link2: string = '';
  @Input() Link2Route: string = '';
  @Input() Link3: string = '';
  @Input() Link3Route: string = '';
  @Input() Link4: string = '';
  @Output() linkClicked = new EventEmitter<string>();

  onLinkClick(link: string): void {
    this.linkClicked.emit(link);
  }
}
