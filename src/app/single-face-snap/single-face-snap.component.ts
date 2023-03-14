import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;
  butonText!:string;

  constructor( private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.butonText ='Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id']; // (+) typeCast => transforme en number
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.butonText === 'Oh Snap!'){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.butonText = 'Oops, un Snap!';
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.butonText = 'Oh Snap!';
    }
  }
}
