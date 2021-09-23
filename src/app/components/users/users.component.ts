import { Component, OnInit } from "@angular/core";
import {User} from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls:['./users.component.css']
})
export class UsersComponent implements OnInit{
  user:User={
    firstName:'',
    lastName:'',
    email:''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean=false;
  enableAdd:boolean=false;
  currentClasses={};
  currentStyles={};
  showUserForm:boolean=false;

  constructor(){}
  ngOnInit(){
    
      this.users=[{
        firstName: "John",
        lastName: 'Doe',
        email: 'doe@get.com',
        isActive:true,
        registered:new Date('01/02/2018 08:30:00'),
        hide:true
  },
        {
          firstName: "Sam",
          lastName: 'Smith',
          email: 'sam@get.com',
          isActive:false,
          registered:new Date('01/02/2015 09:50:00'),
          hide:true
        },
          {
            firstName: "Jill",
            lastName: 'Arilli',
            email: 'jill@gets.com',
            isActive:false,
            registered:new Date('09/09/2019 09:20:90'),
            hide:true
          }
      ];
      this.loaded=true;
  }

 /* addUser()
  {
    this.user.registered=new Date();
    this.user.isActive=true;
    this.users.unshift(this.user);
    this.user={
      firstName:'',
      lastName:'',
      email:''
    }
  }*/
 
onSubmit(e) {
  console.log(123);

  e.preventDefault();
}



}