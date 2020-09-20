import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CharacterFormComponent} from "./characterEditor/character-form/character-form.component";
import {NewLabyrinthFormComponent} from "./labyrinth/new-form/new-labyrinth-form.component";
import {LabyrinthGameComponent} from "./labyrinth/game-view/labyrinth-game.component";
import {MenuComponent} from "./labyrinth/menu/menu.component";
import {MusicViewComponent} from "./music-view/music-view.component";

const routes: Routes = [{path: 'character', component: CharacterFormComponent},
  {path: 'new', component: NewLabyrinthFormComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'game', component: LabyrinthGameComponent},
  {path: 'music', component: MusicViewComponent},
  {path: '**', redirectTo: '/menu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
