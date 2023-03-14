import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {

  faceSnaps: FaceSnap[] = [
    {
      title:'Meowww',
      description:'Space Cat',
      createdDate: new Date(),
      snaps: 250,
      imageUrl: 'https://f.hellowork.com/blogdumoderateur/2013/02/nyan-cat-gif-1.gif',
      location: 'Tours'
    },
    {
      title: 'My Goat',
      description: 'I LUV U',
      createdDate: new Date(),
      snaps: 50,
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
