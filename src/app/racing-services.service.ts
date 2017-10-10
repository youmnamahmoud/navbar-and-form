import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RacingServicesService {

  constructor(private http:Http) { }

  postData(){
  this.http.post('/api',JSON.stringify({
        username: name,
        

      })).subscribe(
      data => {
        alert('ok');
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
      )
  }
}
