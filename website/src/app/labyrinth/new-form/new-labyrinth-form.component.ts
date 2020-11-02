import {Component, OnInit, ViewChild} from '@angular/core';
import {GenerateLabService} from "../service/generate-lab.service";
import {AsciiModalComponent} from "../../utils/ascii/ascii-modal/ascii-modal.component";
import {ActivatedRoute, Router} from "@angular/router";
import {CHARACTER_SPACING} from "../../utils/ascii/AsciiConst";

@Component({
  selector: 'app-labyrinth-form',
  templateUrl: './new-labyrinth-form.component.html',
  styles:[`
    input {
      width: ${CHARACTER_SPACING * 8}px
    }


    .grid {
      max-width: ${CHARACTER_SPACING * 30}px;
      display: grid;
      grid-template-columns: 2fr ${CHARACTER_SPACING*9}px;
      align-items: center;
      text-align: center;
    }
  `]
})
export class NewLabyrinthFormComponent implements OnInit {

  size: Number = 5
  playerName: string

  @ViewChild('loadingModal') loadingModal: AsciiModalComponent;

  constructor(private labService: GenerateLabService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.size = params['size']?params['size']:5;
    });
  }

  play(): void {
    this.loadingModal.show()


    let timer = new Promise((resolve) => {
      // after 1 second signal that the job is finished with an error
      setTimeout(() => resolve('done'), 5000);
    });
    let generation = new Promise((resolve) => {
      // not taking our time to do the job
      resolve(this.labService.generate(this.size, this.playerName)); // immediately give the result: 123

    });

    Promise.all([timer, generation]).then(() => {
      this.loadingModal.hide()
      this.router.navigateByUrl('/game');
    })

  }

  emptyBoard(): void {
    this.labService.generateEmpty(this.size);
  }
}
