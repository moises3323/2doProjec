import { Component, OnInit } from '@angular/core';
import { Obje } from "../objeto/obje.model";
import { ObjeService } from "../objeto/obje.service";

@Component({
  selector: 'app-reportes-list',
  templateUrl: './reportes-list.component.html',
  styleUrls: ['./reportes-list.component.css']
})
export class ReportesListComponent implements OnInit {

  constructor(private t: ObjeService) { }

  ngOnInit() {
    this.t.getReporList();
  }
 
  showForEdit(emp: Obje) {
    this.t.selectedRepor = Object.assign({}, emp);;
  }
 
 
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.t.deleteRepor(id)
      .subscribe(x => {
        this.t.getReporList();
      })
    }
  }

}
