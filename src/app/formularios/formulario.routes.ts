import { Routes } from '@angular/router';

export default[
  {
    path: 'distancia',
    loadComponent:()=>import('./distancia/distancia.component')
  },
  {
    path: 'multiplicar',
    loadComponent:()=>import('./multiplicar/multiplicar.component')
  },

]
