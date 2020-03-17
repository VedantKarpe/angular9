import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { OnChangeComponent } from './components/on-change/on-change.component';
import { DoCheckComponent } from './components/do-check/do-check.component';
import { FormsModule } from '@angular/forms';
import { ViewchildDemoComponent } from './components/viewchild-demo/viewchild-demo.component';
import { ContentchildDemoComponent } from './components/contentchild-demo/contentchild-demo.component';
import { ContentParentDemoComponent } from './components/content-parent-demo/content-parent-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    OnChangeComponent,
    DoCheckComponent,
    ViewchildDemoComponent,
    ContentchildDemoComponent,
    ContentParentDemoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
