import { Component, ElementRef, EventEmitter, Injectable } from '@angular/core';
import { ModalContainerComponent } from '../utility/atomic/modal-container/modal-container.component';
import { ModalComponent } from '../utility/atomic/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private isInitialized: boolean = false;
  container!: ModalContainerComponent;

  modals: ModalComponent[] = [];

  constructor() {

  }

  /**
   * Show a modal using it's reference
   * @param modal A reference to the modal Component
   */
  show(modal: ModalComponent): void {
    this.container.show(modal);
    modal.shown.emit();
  }

  /**
   * 
   * @param modal A reference to the modal Component
   */
  hide(modal: ModalComponent): void {
    this.container.hide(modal);
    modal.hidden.emit();
  }

  /**
   * Look for a modal using its name and show it if it exists
   * @param name Modals name, set in the name property
   */
  callShow(name: string): void {
    // look for the modal in the registered modals array
    const query = this.modals.filter(i => i.name === name);

    if (query.length > 1)
      console.warn(`Multiple modal instances with the name "${name}" were found`);

    if (query.length === 0)
      throw (`No modal instances with the name "${name}" were found`);

    this.container.show(query[0]);
  }

  /**
   * Look for a modal using its name and close it if it exists
   * @param name Modals name, set in the name property
   */
  callHide(name: string): void {
    // look for the modal in the registered modals array
    const query = this.modals.filter(i => i.name === name);

    if (query.length > 1)
      console.warn(`Multiple modal instances with the name "${name}" were found`);

    if (query.length === 0)
      throw (`No modal instances with the name "${name}" were found`);

    this.container.hide(query[0]);
  }

  // This method registers the modal container
  registerModalContainer(component: ModalContainerComponent) {
    this.container = component;
    this.isInitialized = true;
  }

  registerModalComponent(component: ModalComponent) {
    this.modals.push(component);
  }

}

export enum ModalSize {
  /** used for alerting the user */
  small,
  /** used for messages and confirmation */
  medium,
  /** one-time small dialog with one goal*/
  large,
  /** a complex modal often with nested routes */
  xlarge
}