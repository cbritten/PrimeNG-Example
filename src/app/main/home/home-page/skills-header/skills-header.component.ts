import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
        tooltipLabel: 'Download my resume'
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
    window.location.href = "mailto:britten.caleb@gmail.com"; 
  }
  exportResume() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '/assets/components/files/resume2023.pdf');
    link.setAttribute('download', `Caleb Britten's Resume 2023`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
