import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkerService } from './services/marker.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      // TODO change apiKey before commit
      apiKey: 'your_api_key'
    }),
    FormsModule
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
