import { Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { AgregarComponent } from './agregar/agregar.component';
export default [
  {
    path: 'agregar',
    loadComponent: () => import('./agregar/agregar.component').then(m=>m.AgregarComponent)
  },
  {
    path: 'alumnos',
    loadComponent: () => import('./alumnos/alumnos.component').then(m=>m.AlumnosComponent)
  },
  {
    path: 'editar/:id',
    loadComponent: () => import('./editar/editar.component').then(m=>m.EditarComponent)
  },
  {
    path: 'eliminar/:id',
    loadComponent: () => import('./eliminar/eliminar.component').then(m=>m.EliminarComponent)
  },
]as Routes
