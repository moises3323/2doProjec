import { Component, OnInit } from '@angular/core';
import { RolinService } from "../objeto/rolin.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  constructor(private r: RolinService) { }

  ngOnInit() { 
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.r.selectedRolin = {
      Rol_id :null,
      Rol_descripcion: '',
      
    }
  }

  onSubmit(form : NgForm){
    this.r.PostTb_rol(form.value)
    .subscribe( data=> {
      this.resetForm(form);
    })
  }
  
}
