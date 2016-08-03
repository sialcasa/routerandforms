/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BankingComponent } from './banking.component';

describe('Component: Banking', () => {
  it('should create an instance', () => {
    let component = new BankingComponent();
    expect(component).toBeTruthy();
  });
});
