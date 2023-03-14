import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  faceSnap! : FaceSnap;
  butonText!:string;

  ngOnInit(): void {

    this.faceSnap = new FaceSnap('Meowww','Space Cat',new Date(),6, 'https://f.hellowork.com/blogdumoderateur/2013/02/nyan-cat-gif-1.gif')

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
