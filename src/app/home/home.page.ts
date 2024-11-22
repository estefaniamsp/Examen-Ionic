import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/dog.service';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items: Array<{ title: string; image: string }> = [];

  constructor(private apiService: ApiService, private firebaseService: FirebaseService) {}


  ngOnInit() {
    this.loadItems();
  }

  async loadItems() {
    const books: any = await this.apiService.getBooks().toPromise();
    for (let i = 0; i < 10; i++) {
      const title = books.results[i]?.title || `Book ${i + 1}`;
      const useDog = i % 2 === 0; 
      const image = useDog
  ? (await this.apiService.getDogImage().toPromise())?.message || 'default-dog-image-url.jpg'
  : this.apiService.getRobotImage(i + 1);


      this.items.push({ title, image });
    }
  }
  
  saveBook(item: { title: string; image: string }) {
    this.firebaseService.saveBook(item).then(() => {
      alert('Libro guardado en Firebase!');
    }).catch(error => {
      console.error('Error al guardar en Firebase:', error);
    });
  }
  
}
