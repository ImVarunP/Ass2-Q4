import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvellousCompComponent } from './marvellous-comp/marvellous-comp.component';
import { MarvellouscompComponent } from './marvellouscomp/marvellouscomp.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousCompComponent,
    MarvellouscompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
