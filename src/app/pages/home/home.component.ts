import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {GameService} from "../../services/game.service";
import {Game} from "../../models/Game";
import {ToastrService} from "ngx-toastr";
import {createThrowErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public mostPopularGames: Game[] = []

  constructor(protected userService: UserService,
              protected gameService: GameService,
              private toastr: ToastrService,
              private loadingService: LoadingService) {
  }

  getPopular() {
    this.loadingService.isLoading = true;
    this.gameService.getPopular().subscribe({
      next: (value: Game[]) => {
        this.mostPopularGames = value
      },
      error: err => this.toastr.error(err.error.nessage),
      complete: () => this.loadingService.isLoading = false
    })
  }

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      this.getPopular()
    }
  }
}
