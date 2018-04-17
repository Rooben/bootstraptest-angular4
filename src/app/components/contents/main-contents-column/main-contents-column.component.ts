import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-contents-column',
  templateUrl: './main-contents-column.component.html',
  styleUrls: ['./main-contents-column.component.scss']
})
export class MainContentsColumnComponent implements OnInit {
  @Input() yr;
  creditesEearned: number = 0;

  ngOnInit() {
  }

}
