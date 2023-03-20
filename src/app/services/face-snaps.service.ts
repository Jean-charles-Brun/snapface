import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {

  constructor(private http: HttpClient) {}

  faceSnaps: FaceSnap[] = [

  ];

  getAllFaceSnaps() : Observable <FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(id: number) : Observable <FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${id}`);
  }

  snapFaceSnapById(id: number, snapType: 'snap' | 'unsnap') : Observable <FaceSnap> {
    return this.getFaceSnapById(id).pipe(
      map(faceSnap => ({
        ...faceSnap, // spread Operateur
        snaps: faceSnap.snaps + ( snapType === 'snap' ? 1 : -1 )
    })),
    switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${id}`, updatedFaceSnap))
    );
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
