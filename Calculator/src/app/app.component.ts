import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="calculator">
      <h1>Calculadora Simple</h1>
      
      <div class="inputs">
        <input type="number" [(ngModel)]="num1" placeholder="Primer número">
        <input type="number" [(ngModel)]="num2" placeholder="Segundo número">
      </div>

      <div class="buttons">
        <button (click)="sumar()">Sumar</button>
        <button (click)="restar()">Restar</button>
        <button (click)="multiplicar()">Multiplicar</button>
        <button (click)="dividir()">Dividir</button>
      </div>

      <div class="result">
            Resultado: {{ resultado }}
      </div>
  `,
  styles: [`
    .calculator {
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .inputs {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
    input {
      flex: 1;
      padding: 8px;
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-bottom: 20px;
    }
    button {
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    .result {
      text-align: center;
      font-size: 1.2em;
      font-weight: bold;
      margin-top: 20px;
    }
  `]
})
export class AppComponent {
  num1: number | null = null;
  num2: number | null = null;
  resultado: number | null | string = null;
  fallido: string = "No se puede dividir por cero";

  sumar() {
    if (this.num1 !== null && this.num2 !== null) {
      this.resultado = this.num1 + this.num2;
    }
  }

  restar() {
    if (this.num1 !== null && this.num2 !== null) {
      this.resultado = this.num1 - this.num2;
    }
  }

  multiplicar() {
    if (this.num1 !== null && this.num2 !== null) {
      this.resultado = this.num1 * this.num2;
    }
  }

  dividir() {
    if (this.num1 !== null && this.num2 !== null) {
      if (this.num2 !== 0) {
        this.resultado = this.num1 / this.num2;
      } else {
        this.resultado = this.fallido;
      }
    }
  }
}
