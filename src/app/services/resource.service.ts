import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private url = 'https://fake-json-api.mock.beeceptor.com';

  constructor(private _http: HttpClient) { }


  getAllData(){
    return this._http.get(`${this.url}/users`);
  }


  // rxResourceData = rxResource({
  //   loader : () => this._http.get(`${this.url}/users`)
  // })
}
