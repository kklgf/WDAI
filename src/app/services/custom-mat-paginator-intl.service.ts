import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class CustomMatPaginatorIntlService extends MatPaginatorIntl {
  constructor() {
    super();
    this.itemsPerPageLabel = 'Wyświetl:';
    const defaultGetRangeLabel = this.getRangeLabel;
    this.getRangeLabel = (...args): string => {
      return defaultGetRangeLabel(...args).replace('of', 'z');
    };
  }
}
