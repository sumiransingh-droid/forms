import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { PracticeFormsComponent } from './forms/practice-forms/practice-forms.component';

const routes: Routes = [
  {
    component:TemplateDrivenComponent,
    path:'template'
  },
  {
    component:ReactiveFormComponent,
    path:'reactive'
  },
  {
    component:PracticeFormsComponent,
    path:'PracticeForm'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
