import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenu, IonMenuButton, IonRow, IonTitle, IonToolbar } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  imports: [ 
    IonButton, RouterLink, IonHeader, 
    IonToolbar, IonTitle, IonGrid, 
    IonCol, IonRow, IonContent,
    IonButtons, IonMenu, IonMenuButton
  ],
})
export class UsersComponent  implements OnInit {

  users: User[] = []

  constructor(private user: UserService) {}

  getExistingUsers() {
    this.user.getUser()
      .subscribe((users) => {
        this.users = users
        console.log(users)
      })
  }

  ngOnInit() {
    this.getExistingUsers()
    console.log()
  }


  // pesquisar sobre signal e como implementar

}
