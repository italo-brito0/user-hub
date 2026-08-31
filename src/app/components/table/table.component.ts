import { Component, OnInit, Input } from '@angular/core';
import { IonCol, IonGrid, IonRow, IonTab } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  imports: [IonGrid, IonCol, IonRow]
})
export class TableComponent  implements OnInit {

  listaUsers: User[] = []

  constructor(private user: UserService) { }

  getExistingUsers() {
    this.user.getUser()
      .subscribe((users) => {
        this.listaUsers = users
        console.log(users)
      })
    // revisar direitinho isso 
  }

  ngOnInit(): void { 
    this.getExistingUsers()
  }

}

