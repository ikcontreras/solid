import { Device } from '../api/devices';
import { DeviceFilter } from './device-filter';

/**
 * OPEN/CLOSED PRINCIPLE (OCP)
 * ---------------------------
 * The Open/Closed Principle (OCP) is one of the SOLID principles of object-oriented design. It states that software
 * entities (such as classes, modules, or functions) should be open for extension but closed for modification.
 *
 * This means that you should be able to extend the behavior of a class or module (e.g., by adding new features)
 * without modifying its existing code. By following this principle, you avoid changing the existing, tested code, which
 * reduces the chances of introducing bugs, while still allowing new functionality to be added.
 */
export class ExtendedDeviceFilter extends DeviceFilter {
  filterByLocation(devices: Device[], location: string): Device[] {
    return devices.filter((device) => device.location.address.includes(location));
  }
}
