import { Device } from '../api/devices';

/**
 * DEPENDENCY INVERSION PRINCIPLE (DIP)
 * -----------------------------------
 * The Dependency Inversion Principle states that high-level modules should not depend on low-level modules.
 * Both should depend on abstractions (e.g., interfaces). This principle helps decouple software components,
 * making the system more modular, flexible, and easier to maintain.
 *
 * In this example, `DeviceService` depends on the `DeviceRepository` abstraction, allowing us to change
 * the implementation of the repository (e.g., in-memory or database) without affecting the service logic.
 */
interface DeviceRepository {
  getDeviceById(id: string): Device | undefined;
  updateDevice(device: Device): void;
}

export class UpdateFirmwareDevice {
  constructor(private repository: DeviceRepository) {}

  updateFirmware(id: string, newVersion: string): void {
    const device = this.repository.getDeviceById(id);
    if (device) {
      console.log(`Updating firmware for ${device.name} from version ${device.firmwareVersion} to ${newVersion}`);
      device.firmwareVersion = newVersion;
      this.repository.updateDevice(device);
      console.log(`${device.name} firmware updated to version ${device.firmwareVersion}`);
    }
  }
}
