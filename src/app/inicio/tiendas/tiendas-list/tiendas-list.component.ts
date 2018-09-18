import { Component, OnInit } from '@angular/core';
import {StoreService  } from "../objeto/store.service";
import { Store } from "../objeto/store.model";
@Component({
  selector: 'app-tiendas-list',
  templateUrl: './tiendas-list.component.html',
  styleUrls: ['./tiendas-list.component.css']
})
export class TiendasListComponent implements OnInit {

 
  constructor(private t: StoreService) { }
 
  ngOnInit() {
    this.t.getStoreList();
  }
 
  showForEdit(emp: Store) {
    this.t.selectedStore = Object.assign({}, emp);;
  }
 
 
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.t.deleteStore(id)
      .subscribe(x => {
        this.t.getStoreList();
      })
    }
  }
}