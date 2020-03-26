import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SchoolComponentComponent } from './school-component/school-component.component';
import {RouterModule} from '@angular/router';
import { ClassComponentComponent } from './class-component/class-component.component';
import { SchoolService } from './school.service';
import { ClassService } from './class.service';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule , HttpClientModule,
  RouterModule.forRoot([
    {path: 'app', component:AppComponent}

  ])
  
  ],
  declarations: [ AppComponent, HelloComponent, SchoolComponentComponent, ClassComponentComponent, LoginFormComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SchoolService, ClassService]
})
export class AppModule { }
