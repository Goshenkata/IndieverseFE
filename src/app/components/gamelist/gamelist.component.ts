import {Component, Input} from '@angular/core';
import {Game} from "../../models/Game";

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.scss']
})
export class GamelistComponent {
  @Input("games")
  games: Game[] = [];

}
