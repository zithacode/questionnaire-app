import { Component, Inject, inject, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../iuser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {


  updateUserForm: FormGroup | any;
  // private document = inject(DOCUMENT);
  constructor(@Inject(DOCUMENT) private document: Document,private _crud: CrudService, private activeRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) {

     this.updateUserForm = this.fb.group({
      name : ['',],
      username : [''],
      email : ['']
    });
  }

  userId!: {
    uid: number;
  };

  user: Iuser | any;
  
  ngOnInit() {

    this.userId = {
      uid : this.activeRoute.snapshot.params['id']
    };

    this._crud.getDataById(this.userId.uid).subscribe({

      next: (response)=>{
        this.user = response;
        console.log(response);
      },
      error: (error)=>{
        console.log(error);
        alert('oops!');
      },
      complete: ()=>{
        console.log('Done getting user to update');

        this.updateUserForm.setValue({name: this.user.name, username:this.user.username, email:this.user.email})
      }
    });

  }

  onCancel(){
    this.router.navigateByUrl('users');
  }

  showModal = false;

  closeModal() {
    this.showModal = false;
    this.router.navigateByUrl('users');
  }


  onSubmit(){
    console.log('Update user data!');
    this._crud.putDataById(this.userId.uid, this.updateUserForm.value).subscribe({
      next: (res)=>{
        // this.router.navigateByUrl('users');

        this.showModal = true;
        this.document.body.classList.add('blur-page');
        
      },
      error: (err)=>{
        console.log(err);
      }
    })    
  }

}
