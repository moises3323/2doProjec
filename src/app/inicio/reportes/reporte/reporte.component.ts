import { Component, OnInit } from '@angular/core';
import { ObjeService } from "../objeto/obje.service";

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  constructor(private t: ObjeService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.t.selectedRepor = {
      
      Repor_Id :null,
      Repor_Descipcion: '',
      Repor_MontoTotal: 0,
      Repor_NumUnidades: 0,
      Repor_Fecha: "",
      Tienda_Id: 0,
      En_id: 0,
      TipoA_id: 0
    }
  }

  onSubmit(form : NgForm){
    this.t.PostTb_repor(form.value)
    .subscribe( data=> {
      this.resetForm(form);
    })
  }

}
