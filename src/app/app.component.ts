import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonApp, IonContent, IonHeader, IonItem, IonList, IonMenu, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
            IonRouterOutlet, IonApp, IonHeader,
            IonTitle, IonToolbar, IonContent,
            IonList, IonItem, IonMenu,
            RouterLink
          ], 
})
export class AppComponent {

  constructor() {}

  
}
