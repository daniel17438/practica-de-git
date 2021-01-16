import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  publictitle: string='Shiba Inu';
  public subTitleCard: string= '';

  @Input() subTitle: string;
  public subtitle: string= 'Breed Dog';

  constructor() { }

  ngOnInit(): void {
    this.subTitleCard = this.subTitle;
  }

}
