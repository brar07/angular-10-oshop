import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}

  getAll() {
    return this.db.list('/categories', (ref) => {
      return ref.orderByChild('name');
    });
  }
}
