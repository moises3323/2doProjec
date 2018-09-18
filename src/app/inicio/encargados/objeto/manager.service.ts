import { Injectable } from '@angular/core';
import { Manager  } from "./manager.model";
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  selectedManager: Manager;
  managerList : Manager[];

  constructor(private http:Http) { }

  PostTb_Encargado(tnd : Manager){
    var body = JSON.stringify(tnd);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('https://backtiendesita.azurewebsites.net/api/Encargados',body,requestOptions).map(x => x.json());

}

putiManager(id, emp) {
  var body = JSON.stringify(emp);
  var headerOptions = new Headers({ 'Content-Type': 'application/json' });
  var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
  return this.http.put('https://backtiendesita.azurewebsites.net/api/Encargados/' + id,
    body,
    requestOptions).map(res => res.json());
}

getManagerList(){
  this.http.get('https://backtiendesita.azurewebsites.net/api/Encargados')
  .map((data : Response) =>{
    return data.json() as Manager[];
  }).toPromise().then(x => {
    this.managerList = x;
  })
}
deleteManager(id: number) {
  return this.http.delete('https://backtiendesita.azurewebsites.net/api/Encargados/' + id).map(res => res.json());
}





}
