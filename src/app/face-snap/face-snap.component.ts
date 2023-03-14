import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;
  butonText!:string;

  ngOnInit(): void {
    this.butonText ='On Snap!';
  }

  onSnap() {
    if (this.butonText === 'On Snap!'){
      this.faceSnap.snaps++;
      this.butonText = 'Oops, un Snap!';
    } else {
      this.faceSnap.snaps--;
      this.butonText = 'On Snap!';
    }
  }


}
