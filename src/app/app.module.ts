import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { LeftSiderComponent } from './components/main/left-sider/left-sider.component';
import { ContentComponent } from './components/main/content/content.component';
import { RightSiderComponent } from './components/main/right-sider/right-sider.component';
import { FooterComponent } from './components/main/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSiderComponent,
    ContentComponent,
    RightSiderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
