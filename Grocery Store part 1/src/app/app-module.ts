import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { StoreModule } from "./store/store.module";

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule, StoreModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
