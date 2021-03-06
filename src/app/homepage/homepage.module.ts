import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { BlogComponent } from './blog/blog.component';
import { HeroComponent } from './hero/hero.component';
import { HomepageRootComponent } from './homepage-root/homepage-root.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillsComponent } from './skills/skills.component';
import { ParticlesComponent } from './particles/particles.component';

@NgModule({
  declarations: [HomepageRootComponent, IntroductionComponent, HeroComponent, SkillsComponent, BlogComponent, ParticlesComponent],
  exports: [HomepageRootComponent],
  imports: [CommonModule, SharedModule, RouterModule]
})
export class HomepageModule {}
