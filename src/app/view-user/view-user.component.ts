import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../iuser';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userId:{
    uid:number;
  }

  userDetails: Iuser|any;
  constructor(private activeRoute: ActivatedRoute, private _service: CrudService, private router: Router) { }

  ngOnInit() {
    this.userId = {uid: this.activeRoute.snapshot.params['id']};

    this._service.getDataById(this.userId.uid).subscribe({
      next: (rez) =>{
        this.userDetails = rez;
        console.log(rez);
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }

  onClose(){
    this.router.navigateByUrl('users');
  }

}
