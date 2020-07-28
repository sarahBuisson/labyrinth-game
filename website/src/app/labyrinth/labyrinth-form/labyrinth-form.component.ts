import {Component, OnInit, ViewChild} from '@angular/core';
import {GenerateLabService} from "../service/generate-lab.service";
import {AsciiModalComponent} from "../../utils/ascii/ascii-modal/ascii-modal.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-labyrinth-form',
  templateUrl: './labyrinth-form.component.html',
  styleUrls: ['./labyrinth-form.component.css']
})
export class LabyrinthFormComponent implements OnInit {

  size: Number = 5
  playerName: string
  currentLoadingMessage: number = 1;

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
      this.router.navigateByUrl('/labyrinthGame');
    })

  }

  clickDuringLoading() {
    this.currentLoadingMessage = Math.round(Math.random() * 5.0)
  }

  emptyBoard(): void {
    this.labService.generateEmpty(this.size);
  }
}
