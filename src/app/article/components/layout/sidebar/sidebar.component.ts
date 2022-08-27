// angular
import { ChangeDetectionStrategy, Component } from '@angular/core';

// app
import { SIDEBAR_ITEMS } from '@app/article/shared/config';
import { sidebarItem } from '@app/article/shared/interface';

@Component({
  selector: 'arvan-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  get getSidebarItems(): sidebarItem[] {
    return SIDEBAR_ITEMS;
  }

  trackBySidebarItems(index: number, sidebarItem: sidebarItem) {
    return sidebarItem.index;
  }
}
