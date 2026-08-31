import { Component, Input, OnInit } from '@angular/core';
import { IonButton, IonContent } from '@ionic/angular';
import { TableComponent } from '../table/table.component';
import { Environment } from '../../environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonButton, IonContent, TableComponent],
})
export class HomeComponent  implements OnInit {

  cont = 0

  clicouBotao() {
    console.log("Clicou")
    this.cont++
  }

  @Input() contador:number = 0

  constructor() {}

  ngOnInit() {}

}
