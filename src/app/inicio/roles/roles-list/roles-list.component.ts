import { Component, OnInit } from '@angular/core';
import { RolinService } from "../objeto/rolin.service";
import { Rolin } from "../objeto/rolin.model";

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  constructor(private r : RolinService) { }

  ngOnInit() {
    this.r.getRolList();
    
  }
  showForEdit(emp: Rolin) {
    this.r.selectedRolin = Object.assign({}, emp);;
  }
 
 
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.r.deleteRol(id)
      .subscribe(x => {
        this.r.getRolList();
      })
    }
  }
  

}
