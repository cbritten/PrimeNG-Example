import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SkillsHeaderComponent } from './home-page/skills-header/skills-header.component';
import { FeaturesCardsComponent } from './home-page/features-cards/features-cards.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';


@NgModule({
  declarations: [
    HomePageComponent,
    SkillsHeaderComponent,
    FeaturesCardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RatingModule,
    FormsModule,
    ButtonModule, 
    RippleModule,
    SplitButtonModule,
    SpeedDialModule
  ]
})
export class HomeModule { }
