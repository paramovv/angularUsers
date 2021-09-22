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
  loaded: boolean=false;
  enableAdd:boolean=true;
  currentClasses={};
  currentStyles={};

  constructor(){}
  ngOnInit(){
    
      this.users=[{
        firstName: "John",
        lastName: 'Doe',
        email: 'doe@get.com',
        image:'http://lorempixel.com/600/600/people/3',
        isActive:true,
        balance:100,
        registered:new Date('01/02/2018 08:30:00'),
        hide:true
  },
        {
          firstName: "Sam",
          lastName: 'Smith',
          email: 'sam@get.com',
          image:'http://lorempixel.com/600/600/people/2',
          isActive:false,
          balance:400,
          registered:new Date('01/02/2015 09:50:00'),
          hide:true
        },
          {
            firstName: "Jill",
            lastName: 'Arilli',
            email: 'jill@gets.com',
            image:'http://lorempixel.com/600/600/people/1',
            isActive:false,
            balance: 50,
            registered:new Date('09/09/2019 09:20:90'),
            hide:true
          }
      ];
      this.loaded=true;
   
   // this.showExtended=false;
   this.addUser({
      firstName: "Tom",
          lastName: 'Gwint',
          email: 'tom@gets.com',
          hide:true
    });
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user:User){
    this.users.push(user);
  }
  setCurrentClasses(){
this.currentClasses={
  'btn-success':this.enableAdd,
  'big-text':this.showExtended
}
  }
setCurrentStyles(){
  this.currentStyles={'padding-top': this.showExtended? '0':'40px',
'font-size': this.showExtended? '':'40px'}
}

}