import { Component, OnInit } from '@angular/core';

import { StoreService } from "../objeto/store.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor(private t: StoreService) {  }

  ngOnInit() { 
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.t.selectedStore = {
      Tienda_Id :null,
      Tienda_Nombre: '',
      Tienda_Direccion:''
    }
  }

  onSubmit(form : NgForm){
    this.t.PostTb_Tiendas(form.value)
    .subscribe( data=> {
      this.resetForm(form);
    })
  }
}
