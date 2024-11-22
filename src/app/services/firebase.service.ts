import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private collectionName = 'books';

  constructor(private firestore: AngularFirestore) {}

  saveBook(book: { title: string; image: string }) {
    return this.firestore.collection(this.collectionName).add(book);
  }
}
