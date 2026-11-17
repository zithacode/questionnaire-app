import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  sessionValue: string = "";
  localValue: string = "";
  cookieValue: string = "";

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
  }

  setSession(){
    sessionStorage.setItem('name','session');
    sessionStorage.setItem('pass','session123');
  }
  getSession(){
    this.sessionValue = sessionStorage.getItem('name')!;
  }
  removeSession(){
    sessionStorage.removeItem('pass');
  }
  clearSession(){
    sessionStorage.clear();
    this.sessionValue = "";
  }
  setLocal(){
    localStorage.setItem('username','local');
    localStorage.setItem('password','local123');
  }
  getLocal(){
    this.localValue = localStorage.getItem('username')!;
  }
  removeLocal(){
    localStorage.removeItem('password');
  }
  clearLocal(){
    localStorage.clear();
    this.localValue = "";
  }

  setCookie(){
    this.cookieService.set('username', 'Sipho');
    console.log('set cookie')
  }


  getCookie(){
   this.cookieValue = this.cookieService.get('username');
  }
 removeCookie(){
    this.cookieService.delete('username');
    this.cookieValue = "";
  }

}
