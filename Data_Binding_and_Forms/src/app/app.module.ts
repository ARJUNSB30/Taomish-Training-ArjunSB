import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { CustombindingComponent } from './custombinding/custombinding.component'

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    NgmodelComponent,
    InterpolationComponent,
    CustombindingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
