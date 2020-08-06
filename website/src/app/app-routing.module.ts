import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CharacterFormComponent} from "./characterEditor/character-form/character-form.component";
import {NewLabyrinthFormComponent} from "./labyrinth/new-form/new-labyrinth-form.component";
import {LabyrinthGameComponent} from "./labyrinth/game-view/labyrinth-game.component";
import {MenuComponent} from "./labyrinth/menu/menu.component";

const routes: Routes = [{path: 'character', component: CharacterFormComponent},
  {path: 'newLabyrinth', component: NewLabyrinthFormComponent},
  {path: 'labyrinthForm', component: NewLabyrinthFormComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'labyrinthGame', component: LabyrinthGameComponent},
  {path: '**', redirectTo: '/menu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
