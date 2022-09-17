import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  selected = '';

  trackRow(...args) {
    console.log(args);
    return `column-${args[0]}`;
  }
  trackBox(...args) {
    console.log(args);
    return `item-${args[0]}-${args[1]}`;
  }

  onClick(y: number, x: number, item: HTMLDivElement): void {
    console.log(x, y, item);
    item.classList.add('selected');
    this.selected = item.innerText;
    this.items[y][x] = 5;
  }
}
