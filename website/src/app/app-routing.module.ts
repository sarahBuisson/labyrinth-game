import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CharacterFormComponent} from "./characterEditor/character-form/character-form.component";
import {LabyrinthFormComponent} from "./labyrinth/labyrinth-form/labyrinth-form.component";
import {LabyrinthGameComponent} from "./labyrinth/labyrinth-game/labyrinth-game.component";
import {MenuComponent} from "./labyrinth/menu/menu.component";

import {APP_BASE_HREF} from '@angular/common';

const routes: Routes = [{path: 'character', component: CharacterFormComponent},
  {path: 'newLabyrinth', component: LabyrinthFormComponent},
  {path: 'labyrinthForm', component: LabyrinthFormComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'labyrinthGame', component: LabyrinthGameComponent},
  {path: '', redirectTo: '/menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
