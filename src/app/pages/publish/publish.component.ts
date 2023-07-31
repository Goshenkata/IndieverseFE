import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {GameService} from "../../services/game.service";
import formatters from "chart.js/dist/core/core.ticks";
import {GamePublish} from "../../models/GamePublish";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent {
  public imageUrlIsValid: boolean = false;
  @ViewChild('imageElement', {static: false}) imageElement?: ElementRef<HTMLImageElement>;
  @ViewChild('f') form!: NgForm

  constructor(private gameService: GameService, private router: Router, private toastr: ToastrService) {
  }


  submit() {
    if (this.form.valid) {
      const game: GamePublish = {...this.form.value}
      if (!this.imageUrlIsValid) game.imageUrl = null
      this.gameService.publish(game).subscribe({
        next: () => this.router.navigateByUrl('/'),
        error: (error) => this.toastr.error(error.error.message)
      })
    }
  }

  checkImageUrl() {
    if (this.imageElement) {
      this.imageElement.nativeElement.src = this.form.controls['imageUrl'].value;
      this.imageUrlIsValid = false;
      this.imageElement.nativeElement.onerror = () => {
        this.imageUrlIsValid = false;
      };
      this.imageElement.nativeElement.onload = () => {
        this.imageUrlIsValid = true;
      };
    }
  }
}
