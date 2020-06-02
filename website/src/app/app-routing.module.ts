import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterFormComponent} from "./characterEditor/character-form/character-form.component";
import {LabyrinthFormComponent} from "./labyrinth/labyrinth-form/labyrinth-form.component";
import {LabyrinthGameComponent} from "./labyrinth/labyrinth-game/labyrinth-game.component";


const routes: Routes = [  { path: 'character', component: CharacterFormComponent },
  { path: 'labyrinthForm', component: LabyrinthFormComponent },
  { path: 'labyrinthGame', component: LabyrinthGameComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
