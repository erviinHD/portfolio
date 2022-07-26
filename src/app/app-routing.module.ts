import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Pages/contact/contact.component';
import { ExperienceComponent } from './Pages/experience/experience.component';
import { HomeComponent } from './Pages/home/home.component';
import { SkillsComponent } from './Pages/skills/skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'experience', component: ExperienceComponent,
  },
  {
    path: 'contact', component: ContactComponent,
  },
  {
    path: 'skills', component: SkillsComponent,
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
