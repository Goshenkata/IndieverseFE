import { Component } from '@angular/core';
import {Game} from "../../models/Game";
import {GameService} from "../../services/game.service";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  games: Game[] = [];
  username: string = ''
  constructor(public gameService: GameService,
              public userService: UserService,
              public toatr: ToastrService,
              public route: ActivatedRoute,
              public loadingService: LoadingService) {
  }
  ngOnInit(): void {
    this.username = <string>this.route.snapshot.paramMap.get('username')
    if (this.userService.isLoggedIn()) {
      this.loadingService.isLoading = true;
      this.gameService.getGamesForUser(this.username).subscribe({
        next: value => this.games = [...value],
        error: () => this.toatr.error('Error fetching games'),
        complete: () => this.loadingService.isLoading = false
      })
    }
  }
}
