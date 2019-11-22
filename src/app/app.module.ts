import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AppRootModule} from './root-components/root.module';
import {CustomersModule} from './app-customers/customers.module';

import { OrdersModule} from "./orders/orders.module";
import { ShareModule} from './shared-artefacts/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommsLoggerInterceptor } from './interceptor/comms.logger.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRootModule,
    CustomersModule,
    OrdersModule,
    ShareModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: CommsLoggerInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
