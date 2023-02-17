import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';


//platformBrowserDynamic().bootstrapModule(AppModule)
  //.catch(err => console.error(err));

  //platformBrowserDynamic().bootstrapModule(AppModule)
//.catch(err => console.error(err));
bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
