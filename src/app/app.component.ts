import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  faceSnap!: FaceSnap;
  otherSnap!: FaceSnap;
  lastSnap!: FaceSnap;

  ngOnInit(): void {
    this.faceSnap = new FaceSnap(
      'Meowww',
      'Space Cat',
      new Date(),
      6,
      'https://f.hellowork.com/blogdumoderateur/2013/02/nyan-cat-gif-1.gif'
      );

    this.otherSnap = new FaceSnap(
      'My Goat',
      'I LUV U',
      new Date(),
      15,
      'https://i.giphy.com/media/cMso9wDwqSy3e/giphy.webp'
    );
    this.lastSnap = new FaceSnap(
      'Dog Life',
      'AOWWWWwwwwwwwwwwww',
      new Date(),
      28,
      'https://i.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.webp'
    );
  }



}
