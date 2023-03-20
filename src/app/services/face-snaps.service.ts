import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, map, Observable, switchMap } from "rxjs";
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

  addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): Observable <FaceSnap> {
    return this.getAllFaceSnaps().pipe(
      map(faceSnaps => [...faceSnaps].sort((a, b) => a.id - b.id)),
      map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length-1]),
      map(previousFaceSnap => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: previousFaceSnap.id + 1
      })),
      switchMap(newFaceSnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFaceSnap))
    )
  }

}
