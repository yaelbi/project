import { Component, OnInit } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { ServiceService} from "../service.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title='Yael';
decription='this is my first application ';
  constructor(public ServiceService: ServiceService) {

   }
  ngOnInit() {
  }
}