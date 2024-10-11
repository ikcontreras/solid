import { Device } from '../api/devices/devices.model';

/**
 * SINGLE RESPONSIBILITY PRINCIPLE (SRP)
 * -------------------------------------
 * The Single Responsibility Principle (SRP) states that a class or module should have only one reason to change,
 * meaning it should only have one responsibility or handle one specific part of the functionality in a system. In
 * simpler terms, each class or function should focus on doing one thing and doing it well. By adhering to SRP, the
 * code becomes easier to maintain, test, and extend, as changes in one responsibility won’t affect other parts of the
 * system. It also reduces the complexity and improves the clarity of the code.
 */
export class DeviceFilter {
  filterDevicesByUser(devices: Device[], userId: number): Device[] {
    return devices.filter((device) => device.user_id === userId);
  }

  filterDevicesByStatus(devices: Device[], status: string): Device[] {
    return devices.filter((device) => device.status === status);
  }
}
