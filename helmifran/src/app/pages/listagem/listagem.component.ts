import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListagemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
