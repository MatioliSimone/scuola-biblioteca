import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { LibroComponent } from './libro/libro.component';
import { ElencoLibriService } from './common/elenco-libri.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BibliotecaComponent, LibroComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ElencoLibriService]
})
export class AppModule { }
