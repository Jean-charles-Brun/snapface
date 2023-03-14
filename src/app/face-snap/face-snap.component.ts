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
  imageUrl!: string;

  ngOnInit(): void {
    this.title = 'Meowww';
    this.description = 'Space Cat';
    this.createdDate = new Date();
    this.snaps =6;
    this.imageUrl = 'https://f.hellowork.com/blogdumoderateur/2013/02/nyan-cat-gif-1.gif';

  }


}
