import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from "./page-not-found.component";


const ROUTES: Route[] = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'products',
    loadChildren: () => import('./products/product.module').then(m => m.ProductModule )
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {enableTracing: true})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
