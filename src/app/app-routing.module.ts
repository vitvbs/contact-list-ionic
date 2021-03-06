import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  { 
    path: 'details', 
    loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) 
  },
  { 
    path: 'details/:id', 
    loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
