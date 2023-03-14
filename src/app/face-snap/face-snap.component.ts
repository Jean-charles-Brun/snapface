import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor( private faceSnapService: FaceSnapsService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.butonText ='Oh Snap!';
  }

  onViewFaceSnap(): void {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

}
