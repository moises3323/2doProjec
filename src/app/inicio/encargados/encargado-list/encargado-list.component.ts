import { Component, OnInit } from '@angular/core';
import { ManagerService } from "../objeto/manager.service";
import { Manager } from "../objeto/manager.model";

@Component({
  selector: 'app-encargado-list',
  templateUrl: './encargado-list.component.html',
  styleUrls: ['./encargado-list.component.css']
})
export class EncargadoListComponent implements OnInit {

  constructor(private e: ManagerService) { }

  ngOnInit() {
    this.e.getManagerList();
  }
 
  showForEdit(emp: Manager) {
    this.e.selectedManager = Object.assign({}, emp);;
  }
 
 
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.e.deleteManager(id)
      .subscribe(x => {
        this.e.getManagerList();
      })
    }
  }

}
