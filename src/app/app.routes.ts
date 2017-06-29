import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', loadChildren: 'app/user/user.module#UserModule' }
];
