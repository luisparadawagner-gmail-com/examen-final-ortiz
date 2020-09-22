import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ComponentConsultarService } from './servicio/component-consultar.service';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';

import { MatSelectModule } from '@angular/material/select';

import { FormularioNoticiaComponent } from './componentes/formulario-noticia/formulario-noticia.component';
import { TablaNoticiaComponent } from './componentes/tabla-noticia/tabla-noticia.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    FormularioNoticiaComponent,
    TablaNoticiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  providers: [ComponentConsultarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
