import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subject, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;
  //private destroy$! : Subject<boolean>;


  constructor(private faceSnapsService: FaceSnapsService){}


  ngOnInit(): void {

    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();

    //this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

    // fuite mémoire test-----------------------------
    //this.destroy$ = new Subject<boolean>();
    // interval(1000).pipe(
    //   takeUntil(this.destroy$),
    //   tap(console.log)
    // ).subscribe();
  }

  ngOnDestroy(): void {
    //this.destroy$.next(true);
  }

}
