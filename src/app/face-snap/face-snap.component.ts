import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  title!: string;
  description!:string;
  createdDate!: Date;
  snaps!: number;

  ngOnInit(): void {
    this.title = 'Pierro';
    this.description = 'Mon BF since 86';
    this.createdDate = new Date();
    this.snaps =6;
  }


}
