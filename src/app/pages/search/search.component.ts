import {Component, OnInit, ViewChild} from '@angular/core';
import {Game} from "../../models/Game";
import {GameService} from "../../services/game.service";
import {UserService} from "../../services/user.service";
import {ToastrService} from "ngx-toastr";
import {LoadingService} from "../../services/loading.service";
import {Search} from "../../models/Search";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  games: Game[] = []
  @ViewChild('f') form!: NgForm
  constructor(public gameService: GameService,
              public userService: UserService,
              public toastr: ToastrService,
              public loadingService: LoadingService) {
  }

  ngOnInit(): void {
    if (this.userService.isLoggedIn()) {
      this.loadingService.isLoading = true;
      this.gameService.getPopular().subscribe({
        next: (value: Game[]) => {
          this.games = value
        },
        error: err => this.toastr.error(err.error.nessage),
        complete: () => this.loadingService.isLoading = false
      })
    }
  }

  submit() {
    this.loadingService.isLoading = true;
    let seachData:Search = {...this.form.value}
    this.gameService.search(seachData).subscribe({
      next: value => this.games = [...value],
      error: () => this.toastr.error('Encountered error while searching...'),
      complete: () => this.loadingService.isLoading = false
    })
  }
}
