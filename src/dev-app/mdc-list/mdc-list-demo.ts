/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component} from '@angular/core';
import {MatListOptionCheckboxPosition} from '@angular/material-experimental/mdc-list';

@Component({
  selector: 'mdc-list-demo',
  templateUrl: 'mdc-list-demo.html',
  styleUrls: ['mdc-list-demo.css'],
})
export class MdcListDemo {
  items: string[] = ['Pepper', 'Salt', 'Paprika'];

  checkboxPosition: MatListOptionCheckboxPosition = 'before';

  contacts: {name: string; headline: string}[] = [
    {name: 'Nancy', headline: 'Software engineer'},
    {name: 'Mary', headline: 'TPM'},
    {name: 'Bobby', headline: 'UX designer'},
  ];

  messages: {from: string; subject: string; message: string; image: string}[] = [
    {
      from: 'John',
      subject: 'Brunch?',
      message: 'Did you want to go on Sunday? I was thinking that might work.',
      image: 'https://angular.io/generated/images/bios/devversion.jpg',
    },
    {
      from: 'Mary',
      subject: 'Summer BBQ',
      message: 'Wish I could come, but I have some prior obligations.',
      image: 'https://angular.io/generated/images/bios/twerske.jpg',
    },
    {
      from: 'Bobby',
      subject: 'Oui oui',
      message: 'Do you have Paris reservations for the 15th? I just booked!',
      image: 'https://angular.io/generated/images/bios/jelbourn.jpg',
    },
  ];

  links: {name: string}[] = [{name: 'Inbox'}, {name: 'Outbox'}, {name: 'Spam'}, {name: 'Trash'}];

  thirdLine = false;
  showBoxes = false;
  infoClicked = false;
  selectionListDisabled = false;
  selectionListRippleDisabled = false;

  selectedOptions: string[] = ['apples'];
  changeEventCount = 0;
  modelChangeEventCount = 0;

  onSelectedOptionsChange(values: string[]) {
    this.selectedOptions = values;
    this.modelChangeEventCount++;
  }

  toggleCheckboxPosition() {
    this.checkboxPosition = this.checkboxPosition === 'before' ? 'after' : 'before';
  }

  favoriteOptions: string[] = [];

  alertItem(msg: string) {
    alert(msg);
  }
}
