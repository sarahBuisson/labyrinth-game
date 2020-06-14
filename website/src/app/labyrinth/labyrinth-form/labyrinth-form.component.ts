import { Component, OnInit } from '@angular/core';
import {ServiceLabService} from "../service/service-lab.service";

@Component({
  selector: 'app-labyrinth-form',
  templateUrl: './labyrinth-form.component.html',
  styleUrls: ['./labyrinth-form.component.css']
})
export class LabyrinthFormComponent implements OnInit {


  size:Number=5

  constructor(private labService:ServiceLabService) { }

  ngOnInit(): void {
  }

  play():void{
    this.labService.generate(this.size);
  }
  emptyBoard():void{
    this.labService.generateEmpty(this.size);
  }
}
