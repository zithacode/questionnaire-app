import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../services/resource.service';

@Component({
  selector: 'app-resource-api',
  templateUrl: './resource-api.component.html',
  styleUrls: ['./resource-api.component.css']
})
export class ResourceApiComponent implements OnInit {

  data: any;
  
  constructor(private _service: ResourceService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this._service.getAllData().subscribe(res=>{
      this.data = res;
    })
  }

}
