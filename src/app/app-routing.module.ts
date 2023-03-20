import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/components/login.component";
import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
