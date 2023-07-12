import {Component, Input} from '@angular/core';
import {CardData} from "../../../models/CardData";
import {cardDataArray} from "../home-info/cardDataArray";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardData: CardData = cardDataArray[1];

}
