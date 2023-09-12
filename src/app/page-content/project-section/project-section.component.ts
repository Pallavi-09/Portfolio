import { Component, OnInit } from '@angular/core';
import  * as projectAll  from '../../../assets/json/project.json'
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss'],
  host: {
    class:'portfolioSection'
  },
})
export class ProjectSectionComponent implements OnInit {
  projectAll: any = projectAll;

  constructor(public dialog: MatDialog) {}
  
  ngOnInit() {
    this.projectAll =  this.projectAll.projectDetails;
  }

  openDialog(projectData:any) {
    let dialogRef = this.dialog.open(ProjectDetailComponent, {
      width: '250px', 
      data: {projectData}
    });
  }
}
