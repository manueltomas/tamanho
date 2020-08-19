import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tamanho';
  x1;
  x2;
  y1;
  y2;
  z1;
  z2;
  resultado;

  calculate(){
    var x = this.x1 > this.x2 ? this.x1 - this.x2 : this.x2 - this.x1;
    var y = this.y1 > this.y2 ? this.y1 - this.y2 : this.y2 - this.y1;
    var z = this.z1 > this.z2 ? this.z1 - this.z2 : this.z2 - this.z1;
    this.resultado = x * y * z >= 32768 ? "Não" : "Sim";
  }

}
