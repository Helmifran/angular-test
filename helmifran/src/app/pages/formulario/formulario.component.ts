import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
