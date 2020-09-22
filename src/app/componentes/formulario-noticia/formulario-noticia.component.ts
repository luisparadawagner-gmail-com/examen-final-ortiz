import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Noticia } from 'src/app/clase/Noticia';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-noticia',
  templateUrl: './formulario-noticia.component.html',
  styleUrls: ['./formulario-noticia.component.css'],
})
export class FormularioNoticiaComponent implements OnInit {
  noticia: Noticia;
  registro: any;

  constructor(
    private fb: FormBuilder,
    private rutaActiva: ActivatedRoute,
    private router: Router
  ) {}

  noticiaForm = this.fb.group({});

  ngOnInit(): void {
    this.registro = this.rutaActiva.snapshot.params;

    if (Object.keys(this.registro).length) {
      this.noticia = this.registro;
    }

    this.initForm(this.noticia);
  }

  initForm(editarNoticia: Noticia) {
    this.noticiaForm = this.fb.group({
      titulo: [editarNoticia ? editarNoticia.titulo : ''],
      texto: [editarNoticia ? editarNoticia.texto : ''],
      fechaDePublicacion: [
        editarNoticia ? editarNoticia.fechaDePublicacion : '',
      ],
      estado: [editarNoticia ? editarNoticia.estado : ''],
    });
  }

  submit() {
    this.noticiaForm.value;

    this.noticia = this.noticiaForm.value;
    this.router.navigate(['/tabla-noticia-component', this.noticia]);
  }
}
