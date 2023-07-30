import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../models/Game";
import {UserService} from "../../services/user.service";
import {GameService} from "../../services/game.service";
import {Toast, ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input()
  public game: Game | undefined

  public ownsGame: boolean = false

  constructor(protected userService: UserService,
              protected gameService: GameService,
              protected toastr: ToastrService) {
  }

  delete() {
    this.gameService.delete(this.game?.id).subscribe({
      next: value => {
        location.reload()
        this.toastr.success(value.message)

      },
      error: err => this.toastr.error(err.error.message),
    })

  }

  buy() {
    this.gameService.buy(this.game?.id).subscribe({
      next: value => {
        location.reload()
        this.toastr.success(value.message);
      },
      error: err => this.toastr.error(err.error.message),
    })
  }

  ngOnInit(): void {
    this.userService.ownsGame(this.game?.id).subscribe({
      next: value => {
        this.ownsGame = value
      },
      error: () => this.ownsGame = false
    });
  }
}
