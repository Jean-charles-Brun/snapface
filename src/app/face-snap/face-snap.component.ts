import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;
  butonText!:string;

  constructor( private faceSnapService: FaceSnapsService) {}

  ngOnInit(): void {
    this.butonText ='On Snap!';
  }

  onSnap() {
    if (this.butonText === 'On Snap!'){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id);
      this.butonText = 'Oops, un Snap!';
    } else {
      this.faceSnapService.unSnapFaceSnapById(this.faceSnap.id);
      this.butonText = 'On Snap!';
    }
  }


}
