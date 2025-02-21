import { Routes } from '@angular/router';
import { FlexComponent } from './flex/flex.component';
import { GridComponent } from './grid/grid.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'flex',
        pathMatch:'full'
    },
  
    {
        path:'flex',
        component:FlexComponent
    },
    {
        path:'grid',
        component:GridComponent
    },
];
