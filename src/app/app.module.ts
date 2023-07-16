import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { SharedModule } from './shared/shared.module';
registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SharedModule],
  providers: [
	{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
	{ provide: LOCALE_ID, useValue: 'pt' },
	{ provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },


],
  bootstrap: [AppComponent],
})
export class AppModule {}
