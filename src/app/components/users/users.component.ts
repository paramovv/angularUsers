import { Component, OnInit } from "@angular/core";
import {User} from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls:['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: User[];
  showExtended: boolean = true;
loaded: boolean=true;
enableAdd:boolean=true;
  constructor(){}
  ngOnInit(){
    
      this.users=[{
        firstName: "John",
        lastName: 'Doe',
        email: 'doe@get.com',
      image:'http://lorempixel.com/600/600/people/3'},
        {
          firstName: "Sam",
          lastName: 'Smith',
          email: 'sam@get.com',
          image:'http://lorempixel.com/600/600/people/2'},
          {
            firstName: "Jill",
            lastName: 'Arilli',
            email: 'jill@gets.com',
            image:'http://lorempixel.com/600/600/people/1'}
      ];
      this.loaded=true;
   

    
   // this.showExtended=false;
   this.addUser({
      firstName: "Tom",
          lastName: 'Gwint',
          email: 'tom@gets.com'
    });

  }
  addUser(user:User){
    this.users.push(user);
  }
}