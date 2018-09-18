import { Injectable } from '@angular/core';
import { Obje } from "../objeto/obje.model";
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ObjeService {
  selectedRepor: Obje;
  reporList : Obje[];

  constructor(private http:Http) { }

  PostTb_repor(tnd : Obje){
    var body = JSON.stringify(tnd);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('https://backtiendesita.azurewebsites.net/api/Reportes',body,requestOptions).map(x => x.json());

}

putirepor(id, emp) {
  var body = JSON.stringify(emp);
  var headerOptions = new Headers({ 'Content-Type': 'application/json' });
  var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
  return this.http.put('https://backtiendesita.azurewebsites.net/api/Reportes/' + id,
    body,
    requestOptions).map(res => res.json());
}

getReporList(){
  this.http.get('https://backtiendesita.azurewebsites.net/api/Reportes')
  .map((data : Response) =>{
    return data.json() as Obje[];
  }).toPromise().then(x => {
    this.reporList = x;
  })
}
deleteRepor(id: number) {
  return this.http.delete('https://backtiendesita.azurewebsites.net/api/Reportes/' + id).map(res => res.json());
}


}
