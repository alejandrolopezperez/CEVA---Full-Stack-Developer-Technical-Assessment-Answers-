import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularExercice1Component } from './pages/angular-exercice1/angular-exercice1.component';
import { BoostrapExerciceComponent } from './pages/boostrap-exercice/boostrap-exercice.component';
import { HomeComponent } from './pages/home/home.component';
import { TestExerciceComponent } from './pages/test-exercice/test-exercice.component';
import { AngularExercice2Component } from './pages/angular-exercice2/angular-exercice2.component';
import { NodejsExerciseComponent } from './pages/nodejs-exercise/nodejs-exercise.component';
import { MongodbExcersiceComponent } from './pages/mongodb-excersice/mongodb-excersice.component';
//import { AngularExercice3Component } from './pages/angular-exercice3/angular-exercice3.component';

@NgModule({
  declarations: [
    AppComponent,
    BoostrapExerciceComponent,
    AngularExercice1Component,
    HomeComponent,
    TestExerciceComponent,
    AngularExercice2Component,
    NodejsExerciseComponent,
    MongodbExcersiceComponent,
    //AngularExercice3Component,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
