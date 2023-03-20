import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap$!: Observable<FaceSnap>;
  butonText!:string;

  constructor( private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.butonText ='Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id']; // (+) typeCast => transforme en number
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap(faceSnapId: number) {
    if (this.butonText === 'Oh Snap!'){
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => this.butonText = 'Oops, un Snap!')
      );
    } else {
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => this.butonText = 'Oh Snap!')
      );
    }
  }
}
