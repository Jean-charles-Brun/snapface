import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {

  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title:'Meowww',
      description:'Space Cat',
      createdDate: new Date(),
      snaps: 250,
      imageUrl: 'https://f.hellowork.com/blogdumoderateur/2013/02/nyan-cat-gif-1.gif',
      location: 'Tours'
    },
    {
      id: 2,
      title: 'My Goat',
      description: 'I LUV U',
      createdDate: new Date(),
      snaps: 50,
      imageUrl: 'https://i.giphy.com/media/cMso9wDwqSy3e/giphy.webp',
      location: 'la mer'
    },
    {
      id: 3,
      title: 'Dog Life',
      description: 'AOWWWWwwwwwwwwwwww',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'https://i.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.webp'
    }
  ];

  getAllFaceSnaps() : FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(id: number) : FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    if (!faceSnap) {
      throw new Error('FaceSnap not found');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(id: number) : void {
    const faceSnap = this.getFaceSnapById(id);
    faceSnap.snaps++;
  }

  unSnapFaceSnapById(id: number) : void {
    const faceSnap = this.getFaceSnapById(id);
    faceSnap.snaps--;
  }
}
