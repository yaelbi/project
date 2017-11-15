import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
public images: string[];
  public index: number;
  public urlImage1: string;
   public urlImage2: string;

  constructor() {
    this.index = 0;
    this.images = [
 " assets/pic1.jpg",
 " assets/pic2.jpg",
 " assets/pic3.jpg",
 " assets/pic4.jpg",
    ];
    this.urlImage1 = this.image;
    this.urlImage2 = this.image;
    setInterval(() => {
      this.urlImage1 = this.image;
      this.urlImage2 = this.image;
    }, 10000)
  }

  public get image(): string {
    this.index++;
    this.index %= this.images.length;
    return this.images[this.index];
  }
  ngOnInit() {
  }
}
