import { Component } from '@angular/core';
import { ApipaisesService } from '../../../services/apipaises.service';

@Component({
  selector: 'app-apitercero',
  imports: [],
  templateUrl: './apitercero.component.html',
  styleUrl: './apitercero.component.css',
})
export class ApiterceroComponent {
  pais: any;

  constructor(private paiseservice: ApipaisesService) {}

  ngOnInit(): void {
    this.obtenerpais();
  }

  obtenerpais(): void {
    this.paiseservice.getpaises().subscribe((response: any) => {
      this.pais = response;
      console.log(this.pais);
    });
  }
}
