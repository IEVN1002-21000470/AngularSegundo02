import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Multiplicar } from '../distancia/distancia';

@Component({
  selector: 'app-multiplicar',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './multiplicar.component.html',
  styleUrl: './multiplicar.component.css'
})
@Component({
  selector: 'app-distancia',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl:'.multiplicar.component.html',
  styleUrl: '.multiplicar.component.css'
})
export class MultiplicarComponent {
  formulario!: FormGroup
  resultado!: number;

  constructor(){}
  ngOnInit():void{
    this.formulario = new FormGroup({
      numero1:new FormControl(''),
      numero2:new FormControl('')
    });
  }
  multiplicacion():void{
    let n1=this.formulario.value.numero1;
    let n2=this.formulario.value.numero2;
    this.resultado=n1*n2;
  }
}
