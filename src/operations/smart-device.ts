/**
 * LISKOV SUBSTITUTION PRINCIPLE (LSP)
 * -------------------------------------
 * The Liskov Substitution Principle states that objects of a derived class
 * should be replaceable by objects of the base class without affecting the
 * correctness of the program.
 *
 * In this example, `SmartDevice` extends `BasicDevice` and can be used
 * wherever `BasicDevice` is expected. The function `operateDevice()`
 * works with both `BasicDevice` and `SmartDevice`, illustrating that the
 * derived class can substitute the base class without breaking the behavior
 * of the program.
 */

export class BasicDevice {
  id: string;
  status: boolean;

  constructor(id: string, status: boolean) {
    this.id = id;
    this.status = status;
  }

  turnOn(): void {
    this.status = true;
    console.log(`${this.id} is now ON`);
  }

  turnOff(): void {
    this.status = false;
    console.log(`${this.id} is now OFF`);
  }
}

export class SmartDevice extends BasicDevice {
  activateSmartFeatures(): void {
    if (this.status) {
      console.log(`${this.id} smart features activated`);
    } else {
      console.log(`${this.id} must be ON to activate smart features.`);
    }
  }
}
