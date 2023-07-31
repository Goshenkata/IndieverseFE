import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {using} from "rxjs";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {Game} from "../../models/Game";
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-mygames',
  templateUrl: './mygames.component.html',
  styleUrls: ['./mygames.component.scss']
})
export class MygamesComponent implements OnInit{
  public games: Game[] = []
  constructor(public gameService: GameService,
              public userService: UserService,
              public toatr: ToastrService,
              public loadingService: LoadingService) {
  }
  ngOnInit(): void {
    this.loadingService.isLoading = true
    if (this.userService.isLoggedIn()) {
      this.gameService.getMyGames().subscribe({
        next: value => this.games = [...value],
        error: () => this.toatr.error('Error fetching games'),
        complete: () => this.loadingService.isLoading = false
      })
    }
  }

}
