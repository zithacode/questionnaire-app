import { Component, HostListener, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Iuser } from '../iuser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Iuser[] = [];

  parentProperty : string = "CRUD Op: Kindly find all users.";

  constructor(private _crudService: CrudService, private router: Router) { }

  ngOnInit() {
    this.getAllData();
  }

  getAllData(){
    
    this._crudService.getData().subscribe({
      next: (response) => {
        this.users = response;
        console.log(response);
      },
      error: (error)=>{
        console.log(error);
      }
    });
  }


  addNewUser(){
      this.router.navigateByUrl('add-user');
  }
  onUpdate(id:number){
    this.router.navigate(['update-user',id]);
  }
  onView(id: number){
    this.router.navigate(['view-user',id])
  }
  onDelete(id: number){
    this._crudService.deleteData(id).subscribe({
      next: rez =>{
        console.log(rez);
      },
      error: err =>{
        console.log(err);
      },
      complete: ()=>{
        this.getAllData();
      }
    });
  }
  
  @HostListener('click')
  onClick(){
    console.log('clicked');
  }
}
