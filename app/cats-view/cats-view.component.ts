import { Component, OnInit } from '@angular/core';
import { CatFactService } from '../cat-fact.service';

@Component({
  selector: 'app-cats-view',
  templateUrl: './cats-view.component.html',
  styleUrl: './cats-view.component.css'
})
export class CatsViewComponent implements OnInit {
  catFacts: any[] = [];

  constructor(private catFactService: CatFactService) { }

  ngOnInit(): void {
    this.catFactService.getCatFacts()
      .subscribe(data => {
        this.catFacts = data;
      });
  }
}
