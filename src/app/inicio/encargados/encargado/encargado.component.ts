import { Component, OnInit } from '@angular/core';
import {  ManagerService} from "../objeto/manager.service";

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.css']
})
export class EncargadoComponent implements OnInit {

  constructor(private e: ManagerService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.e.selectedManager = {
      
      En_id :null,
      En_Nombre: '',
      En_Apellido:'',
      En_Rolid: 0
    }
  }

  onSubmit(form : NgForm){
    this.e.PostTb_Encargado(form.value)
    .subscribe( data=> {
      this.resetForm(form);
    })
  }

}
