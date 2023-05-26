import { Component, inject } from '@angular/core';
import { Functions, httpsCallable } from '@angular/fire/functions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private functions: Functions = inject(Functions);
  private generateImage = httpsCallable<{ query: string }, { foo: string }>(this.functions, 'generateImage');

  imageUrl = 'https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2022/06/01121637/Manchester-United-badge-1200x630.jpg';

  generateNewImage(query: string): void {
    this.generateImage({ query }).then(result => {
      console.log('result => ', result.data);
    }).catch(e => {
      console.log('e => ', e);
    })
  }
}
