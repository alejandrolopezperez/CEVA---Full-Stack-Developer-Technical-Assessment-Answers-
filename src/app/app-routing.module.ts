import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularExercice1Component } from './pages/angular-exercice1/angular-exercice1.component';
import { AngularExercice2Component } from './pages/angular-exercice2/angular-exercice2.component';
//import { AngularExercice3Component } from './pages/angular-exercice3/angular-exercice3.component';
import { BoostrapExerciceComponent } from './pages/boostrap-exercice/boostrap-exercice.component';
import { HomeComponent } from './pages/home/home.component';
import { TestExerciceComponent } from './pages/test-exercice/test-exercice.component';
import { NodejsExerciseComponent } from './pages/nodejs-exercise/nodejs-exercise.component';
import { MongodbExcersiceComponent } from './pages/mongodb-excersice/mongodb-excersice.component';

const routes: Routes = [
  {
    path: 'boostrap-exercice',
    component: BoostrapExerciceComponent,
  },
  {
    path: 'angular-exercice-1',
    component: AngularExercice1Component,
  },
  {
    path: 'angular-exercice-2',
    component: AngularExercice2Component,
  },
  {
    path: 'mongodb',
    component: MongodbExcersiceComponent,
  },
  {
    path: 'nodejs',
    component: NodejsExerciseComponent,
  },
  //{
   // path: 'angular-exercice-3',
    //component: AngularExercice3Component,
  //},
  {
    path: 'test-exercice',
    component: TestExerciceComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
