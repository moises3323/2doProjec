import { Injectable } from '@angular/core';

import { Rolin } from "../objeto/rolin.model";
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class RolinService {

  selectedRolin: Rolin;
  rolinList : Rolin[];

  constructor(private http:Http) {  }

  PostTb_rol(tnd : Rolin){
    var body = JSON.stringify(tnd);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('https://backtiendesita.azurewebsites.net/api/Roles',body,requestOptions).map(x => x.json());

}

putirol(id, emp) {
  var body = JSON.stringify(emp);
  var headerOptions = new Headers({ 'Content-Type': 'application/json' });
  var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
  return this.http.put('https://backtiendesita.azurewebsites.net/api/Roles/' + id,
    body,
    requestOptions).map(res => res.json());
}

getRolList(){
  this.http.get('https://backtiendesita.azurewebsites.net/api/Roles')
  .map((data : Response) =>{
    return data.json() as Rolin[];
  }).toPromise().then(x => {
    this.rolinList = x;
  })
}
deleteRol(id: number) {
  return this.http.delete('https://backtiendesita.azurewebsites.net/api/Roles/' + id).map(res => res.json());
}







}
