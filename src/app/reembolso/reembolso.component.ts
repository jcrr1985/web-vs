import { Component, OnInit } from '@angular/core';
import '@vs-design-system/ds-input'
import '@vs-design-system/ds-stepper'
import '@vs-design-system/ds-radio'
import '@vs-design-system/ds-title'
import '@vs-design-system/ds-tooltip'
import '@vs-design-system/ds-button'

import { Chip } from '../shareds/interfaces/interfaces';


@Component({
  selector: 'app-reembolso',
  templateUrl: './reembolso.component.html',
  styleUrls: ['./reembolso.component.scss']
})
export class ReembolsoComponent implements OnInit {


  public paragraphEnabled: string = '#EF6F00';
  public paragraphDisabled: string = '#43505E';

  public chipsData: Chip[] = [{
    nombre: "vs-Nurse-men",
    desripcion: "Consulta Médica",
    state: false
  }, {
    nombre: "vs-Hospital-bed-vive",
    desripcion: "Atención Hospitalaria",
    state: false
  }, {
    nombre: "vs-Microscope",
    desripcion: "Marcos y lentes",
    state: false
  },
  {
    nombre: "vs-Sad",
    desripcion: "Atención Dental",
    state: false
  }, {
    nombre: "bi-sunglasses",
    desripcion: "Marcos y lentes",
    state: false
  }, {
    nombre: "vs-Recetas",
    desripcion: "Compra de medicamentos",
    state: false
  }];

  constructor() { }

  ngOnInit(): void {
  }


  setColor(id: number) {
    this.chipsData.forEach((card: Chip) => {
      card.state = false;
    })
    this.chipsData[id].state = true;
  }
}
