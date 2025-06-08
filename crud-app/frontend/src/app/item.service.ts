import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService {
  private api = 'http://localhost:3001/api/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  addItem(item: any): Observable<any> {
    return this.http.post<any>(this.api, item);
  }

  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
