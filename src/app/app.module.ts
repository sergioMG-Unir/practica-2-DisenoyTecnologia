import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CompoPracticaComponent } from './compo-practica/compo-practica.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'room',
    component: RoomComponent,
    children: [{ path: ':id/:name', component: RoomComponent }],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    NavbarComponent,
    CompoPracticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

