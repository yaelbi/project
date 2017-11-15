import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {
public headerItems: headerItem[];
  constructor() { 
    this.headerItems=[
      new headerItem("Home", ""),
      new headerItem("propile", ""),
      new headerItem("imge", ""),
        new headerItem("Contact my", ""),
    ]
  }
}
export class headerItem{
  constructor(public text: string, public url: string){

  }
}