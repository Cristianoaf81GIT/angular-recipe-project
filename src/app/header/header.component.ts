import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() featuredSelected: EventEmitter<string> = new EventEmitter<string>();

  onSelect(featured: string) {
    this.featuredSelected.emit(featured);
  }
}
