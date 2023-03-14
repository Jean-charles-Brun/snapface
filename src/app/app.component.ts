import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  faceSnaps!: FaceSnap[];
  faceSnap!: FaceSnap;
  otherSnap!: FaceSnap;
  lastSnap!: FaceSnap;

  ngOnInit(): void {

    this.faceSnaps = [
      {
        title:'Meowww',
        description:'Space Cat',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://f.hellowork.com/blogdumoderateur/2013/02/nyan-cat-gif-1.gif',
        location: 'Tours'
      },
      {
        title: 'My Goat',
        description: 'I LUV U',
        createdDate: new Date(),
        snaps: 6,
        imageUrl: 'https://i.giphy.com/media/cMso9wDwqSy3e/giphy.webp',
        location: 'la mer'
      },
      {
        title: 'Dog Life',
        description: 'AOWWWWwwwwwwwwwwww',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://i.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.webp'
      }
    ];
  }

}
