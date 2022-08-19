import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home/home.component';


const routes : Routes = [
    {path : '' , pathMatch:'full' , redirectTo: 'home'},
    {path:'home' , component: HomeComponent},
    {path:'product',
loadChildren:() => import('./product/product.module').then(m => m.ProductModule)}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    
})
export class AppRoutingModule { }

export const RoutedComponents = [
    AboutComponent,
    HeaderComponent,
    HomeComponent
]
