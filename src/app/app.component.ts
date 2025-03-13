import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calcv2';

  num1: number = 0; //inputs amarrados com os atributos = 1 operação somar
  num: number = 0;
  result: number = 0;
  sum: number = 0;
  sub: number = 0;
  mult: number = 0;
  div: number = 0;
  pot: number = 0;
  med: number = 0;


  //metodo: abre e fecha parenteses
  onClickSum(){
    this.result = this.num1 + this.num;
  }

  onClickSub(){
    this.result = this.num1 - this.num;
  }

  onClickMult(){
    this.result = this.num1 * this.num;
  }

  onClickDiv(){
    this.result = this.num1 / this.num;
  }

  onClickPot(){
    this.result = Math.pow(this.num1, this.num);
  }

  onClickMed(){
    this.result = (this.num1 + this.num) / 2;
  }

}
