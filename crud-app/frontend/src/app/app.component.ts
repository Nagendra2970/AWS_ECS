import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  items: any[] = [];
  newItem = '';

  constructor(private service: ItemService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.service.getItems().subscribe(data => this.items = data);
  }

  add() {
    this.service.addItem({ name: this.newItem }).subscribe(() => {
      this.newItem = '';
      this.load();
    });
  }

  delete(id: number) {
    this.service.deleteItem(id).subscribe(() => this.load());
  }
}
