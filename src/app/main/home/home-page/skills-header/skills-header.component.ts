import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-skills-header',
  templateUrl: './skills-header.component.html',
  styleUrls: ['./skills-header.component.scss']
})
export class SkillsHeaderComponent implements OnInit{
  constructor(private builder: FormBuilder){}

  //general variables
  skillsArray: any= {
    frontendLanguages: [
      {name: 'Javascript', proficency: 5}, {name: 'HTML5', proficency: 5}, {name: 'CSS/SCSS', proficency: 5}, {name: 'React', proficency: 1},
    ],
    backendLanguages: [
      {name: 'SQL', proficency: 2}, {name: 'Java', proficency: 1}
    ],
    skills: [
      {name: 'Data Visualization', proficency: 5}, {name: 'OOP', proficency: 4}, {name: 'Data Modeling', proficency: 3}, {name: 'Debugging', proficency: 3},
    ],
    tools: [
      {name: 'GIT', proficency: 4}, {name: 'Postman', proficency: 4}, {name: 'Tableau', proficency: 3}, 
    ],
  }
  contactItems: MenuItem[] = [
    {
      tooltipOptions: {
        tooltipLabel: 'Email me'
      },
      icon: 'pi pi-google',
      command: () => {
          this.email();
      }
    },
    {
      tooltipOptions: {
        tooltipLabel: 'Navigate to my LinkedIn'
      },
      icon: 'pi pi-linkedin',
      command: () => {window.open('http://www.linkedin.com/in/caleb-britten', '_blank')}
    },
    {
      tooltipOptions: {
        tooltipLabel: 'Export my resume'
      },
        icon: 'pi pi-file-pdf',
        command: () => {
            this.exportResume();
        }
    },
  ]

  ngOnInit(): void {
    
  }
  //contact functions
  email() { 
    let formData: FormGroup; 
    formData = this.builder.group({
    })
  }
  exportResume() {

  }
}
