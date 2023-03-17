import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {

  constructor(private httpClient: HttpClient) {}

  faceSnaps: FaceSnap[] = [
    // {
    //   id: 1,
    //   title:'Meowww',
    //   description:'Space Cat',
    //   createdDate: new Date(),
    //   snaps: 250,
    //   imageUrl: 'https://f.hellowork.com/blogdumoderateur/2013/02/nyan-cat-gif-1.gif',
    //   location: 'Tours'
    // },
    // {
    //   id: 2,
    //   title: 'My Goat',
    //   description: 'I LUV U',
    //   createdDate: new Date(),
    //   snaps: 50,
    //   imageUrl: 'https://i.giphy.com/media/cMso9wDwqSy3e/giphy.webp',
    //   location: 'la mer'
    // },
    // {
    //   id: 3,
    //   title: 'Dog Life',
    //   description: 'AOWWWWwwwwwwwwwwww',
    //   createdDate: new Date(),
    //   snaps: 0,
    //   imageUrl: 'https://i.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.webp'
    // }
  ];

  getAllFaceSnaps() : Observable <FaceSnap[]> {
    return this.httpClient.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(id: number) : Observable <FaceSnap> {
    return this.httpClient.get<FaceSnap>(`http://localhost:3000/facesnaps/${id}`);
  }

  snapFaceSnapById(id: number, snapType: 'snap' | 'unsnap') : void {
    // const faceSnap = this.getFaceSnapById(id);
    // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): void{
    const faceSnap: FaceSnap = {
      ...formValue,
      createdDate: new Date(),
      snaps: 0,
      id: this.faceSnaps[this.faceSnaps.length-1].id + 1
    }
    this.faceSnaps.push(faceSnap);
  }

}
