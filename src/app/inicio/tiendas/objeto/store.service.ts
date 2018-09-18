import { Injectable } from '@angular/core';
import { Store } from "./store.model";
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  selectedStore: Store;
  storeList : Store[];

  constructor(private http:Http) { }

  PostTb_Tiendas(tnd : Store){
    var body = JSON.stringify(tnd);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('https://backtiendesita.azurewebsites.net/api/Tiendas',body,requestOptions).map(x => x.json());

}

putitienda(id, emp) {
  var body = JSON.stringify(emp);
  var headerOptions = new Headers({ 'Content-Type': 'application/json' });
  var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
  return this.http.put('https://backtiendesita.azurewebsites.net/api/Tiendas/' + id,
    body,
    requestOptions).map(res => res.json());
}

getStoreList(){
  this.http.get('https://backtiendesita.azurewebsites.net/api/Tiendas')
  .map((data : Response) =>{
    return data.json() as Store[];
  }).toPromise().then(x => {
    this.storeList = x;
  })
}
deleteStore(id: number) {
  return this.http.delete('https://backtiendesita.azurewebsites.net/api/Tiendas/' + id).map(res => res.json());
}

}
