import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlinesComponent } from './headlines.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '',
    component: HeadlinesComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [HeadlinesComponent]
})
export class HeadlinesModule { }
