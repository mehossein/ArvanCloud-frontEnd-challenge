import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'arvan-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() length: number = 0;
  @Input() pageIndex: number = 0;
  @Output() onChangePagination: EventEmitter<number> =
    new EventEmitter<number>();

  readonly pageSize: number = 10;
  constructor() {}

  ngOnInit(): void {}

  onPage(pageIndex: number): void {
    this.onChangePagination.emit(pageIndex);
    this.pageIndex = pageIndex;
  }

  get Pages(): number[] {
    if (this.length == 0) return [0];
    console.log(
      Array.from(
        { length: Math.ceil(this.length / this.pageSize) },
        (v, k) => k
      )
    );
    return Array.from(
      { length: Math.ceil(this.length / this.pageSize) },
      (v, k) => k
    );
  }
}
