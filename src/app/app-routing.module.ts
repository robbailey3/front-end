import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { CvRootComponent } from './cv/cv-root/cv-root.component';
import { HomepageRootComponent } from './homepage/homepage-root/homepage-root.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageRootComponent,
    data: { state: 'home' }
  },
  { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
  { path: 'cv', component: CvRootComponent },
  { path: 'about', component: AboutMeComponent },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(mod => mod.BlogModule)
  },
  {
    path: 'photos',
    loadChildren: () =>
      import('./photos/photos.module').then(mod => mod.PhotosModule)
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
