import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/clase/Noticia';
import { ComponentConsultarService } from 'src/app/servicio/component-consultar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabla-noticia',
  templateUrl: './tabla-noticia.component.html',
  styleUrls: ['./tabla-noticia.component.css'],
})
export class TablaNoticiaComponent implements OnInit {
  displayedColumns: string[] = [
    'titulo',
    'texto',
    'fechaDePublicacion',
    'estado',
    'editar',
    'cambiarEstado',
  ];
  dataSource: Noticia[] = [];

  noticiaNuevo: any;

  constructor(
    private componentConsultarService: ComponentConsultarService,
    private router: Router,
    private rutaA: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getNoticia();
  }

  getNoticia() {
    this.componentConsultarService.getNoticia().subscribe((noticias) => {
      this.dataSource = noticias;
      this.agregarFila();
    });
  }

  agregarFila() {
    this.noticiaNuevo = this.rutaA.snapshot.params;
    this.dataSource.push(this.noticiaNuevo);
  }

  editar(element) {
    this.router.navigate(['/formulario-noticia-component', element]);
  }

  cambiarEstado(element) {
    this.router.navigate(['/formulario-noticia-component', element]);
  }
}
