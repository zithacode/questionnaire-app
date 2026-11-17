import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserReactiveForm: FormGroup | any;

  constructor(private router: Router, private fb: FormBuilder, private _crudService: CrudService) {

    // this.addUserReactiveForm = new FormGroup({
    //   name : new FormControl(''),
    //   username : new FormControl(''),
    //   email : new FormControl('')
    // });

    this.addUserReactiveForm =  this.fb.group({
      name : ['',],
      username : [''],
      email : ['']
    });

  }

  ngOnInit() {
  }

  onCancel(){
    this.router.navigateByUrl('users');
  }
  ngOnSubmit(){
    console.log(this.addUserReactiveForm.value);

    this._crudService.postData(this.addUserReactiveForm.value).subscribe({
      next: ()=> {
        this.router.navigateByUrl('users');
      },
      error : error =>{
        console.log(error);
      },
      complete: ()=>{ 
        console.log('done posting user.');
      }
    });

  }

}
