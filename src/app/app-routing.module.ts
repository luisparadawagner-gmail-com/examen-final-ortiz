import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioNoticiaComponent } from './componentes/formulario-noticia/formulario-noticia.component';
import { TablaNoticiaComponent } from './componentes/tabla-noticia/tabla-noticia.component';

const routes: Routes = [
  {
    path: 'formulario-noticia-component',
    component: FormularioNoticiaComponent,
  },
  { path: 'tabla-noticia-component', component: TablaNoticiaComponent },
  { path: '', redirectTo: 'tabla-noticia-component', pathMatch: 'full' },
  { path: '**', component: TablaNoticiaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
