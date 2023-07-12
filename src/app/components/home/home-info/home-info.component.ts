import { Component } from '@angular/core';
import {CardData} from "../../../models/CardData";
import {cardDataArray} from "./cardDataArray";
@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss']
})
export class HomeInfoComponent {
  protected readonly cardDataArray = cardDataArray;
}
