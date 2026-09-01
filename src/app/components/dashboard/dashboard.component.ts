import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonRouterLink, IonTitle, IonToolbar } from "@ionic/angular";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    IonRouterLink, RouterLink, IonToolbar, IonTitle, IonHeader,
    IonButtons, IonMenu, IonMenuButton, IonContent
  ],
})
export class DashboardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
