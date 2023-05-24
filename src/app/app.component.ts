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

  generateNewImage(query: string): void {
    this.generateImage({ query }).then(result => {
      console.log('result => ', result.data.foo);
    })
  }
}
