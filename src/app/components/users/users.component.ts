import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userdata: any;
  userdatadetails: any;
  searchText: string = '';
  items : any;
  pageOfItems: any;
  
  constructor(private users : UsersService) { }

  ngOnInit(): void {
    this.users.getUserdata().subscribe((data: any) => {
      console.log('chipmunk data >>>'+JSON.stringify(data))
      this.userdata = data;
      this.userdatadetails = [
        {
        "id": 7,
        "email": "michael2.lawson@reqres.in",
        "first_name": "Michael3",
        "last_name": "Lawsonf",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 74,
        "email": "michggael.lawson@reqres.in",
        "first_name": "Micgdghael",
        "last_name": "Lawsoggdn",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 75,
        "email": "micdgdghhael.lawson@reqres.in",
        "first_name": "Mifgfdgchael",
        "last_name": "Lawsogdstggn",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 76,
        "email": "micgssdfhghael.lawson@reqres.in",
        "first_name": "Micsrtjhhael",
        "last_name": "Lawfgfgfson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 788,
        "email": "michdgvsdfael.lawson@reqres.in",
        "first_name": "Miasfsachael",
        "last_name": "Lawsgsdgson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 78,
        "email": "micdsdghael.lawson@reqres.in",
        "first_name": "Misdzgbvschael",
        "last_name": "xsghsdg",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 75,
        "email": "midsgdgchael.lawson@reqres.in",
        "first_name": "dsgsd",
        "last_name": "Lawdggson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 744,
        "email": "michgsgdael.lawson@reqres.in",
        "first_name": "sgd",
        "last_name": "Lsgdgsdawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 744,
        "email": "sggs.lawson@reqres.in",
        "first_name": "sgdgds",
        "last_name": "Lawgsgson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 73,
        "email": "gsgds.lawson@reqres.in",
        "first_name": "sggs",
        "last_name": "sggs",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 7665,
        "email": "sggsd.lawson@reqres.in",
        "first_name": "Misggchael",
        "last_name": "sggd",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 7666,
        "email": "michgsgdael.lawson@reqres.in",
        "first_name": "sggd",
        "last_name": "sgdsd",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 766,
        "email": "gsgd.lawson@reqres.in",
        "first_name": "Migsdgdchael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 766,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 736434,
        "email": "micgdshael.lawson@reqres.in",
        "first_name": "gsd",
        "last_name": "Lawgdsson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 766,
        "email": "michdgsael.lawson@reqres.in",
        "first_name": "Michgdsael",
        "last_name": "Lawsgdson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      }, {
        "id": 866,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
      }, {
        "id": 944,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
      }, {
        "id": 1033,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
      }, {
        "id": 1155,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
      }, {
        "id": 1255,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
      }];
     })

  }
}
