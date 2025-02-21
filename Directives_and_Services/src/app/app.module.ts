import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShapeComponent } from './shape/shape.component';
import { ResultComponent } from './result/result.component';
import { DirectiveComponent } from './directive/directive.component';

import { DisableButtonDirective } from './disable-button.directive';
import { TooltipDirective } from './tooltip.directive';

import { PipePipe } from './pipe.pipe';

import { PerimeterService } from './perimeter.service';

@NgModule({
  declarations: [
    AppComponent,
    ShapeComponent,
    ResultComponent,
    DirectiveComponent,
    DisableButtonDirective,
    TooltipDirective,
    PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [
    PerimeterService, 
    provideClientHydration(withEventReplay()) 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
