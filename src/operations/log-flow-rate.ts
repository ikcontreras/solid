import { Device } from '../api/devices';

/**
 * INTERFACE SEGREGATION PRINCIPLE (ISP)
 * -------------------------------------
 * The Interface Segregation Principle states that clients should not be forced to depend on interfaces they do not use.
 * In other words, larger interfaces should be split into smaller, more specific ones so that clients only need to know
 * about the methods or properties that are relevant to them.
 *
 * In this example, the `FlowMeterDevice` interface is used instead of the more general `Device` interface for a
 * function that only needs the flow rate. This avoids forcing other devices, which do not have flow meters, to
 * implement irrelevant properties.
 */

interface FlowMeterDevice extends Device {
  specs: {
    manufacturer: string;
    model: string;
    max_flow_rate: string;
    pressure_range?: string; // Optional property
    battery_life: string;
    connectivity: string;
  };
}

export function logFlowRate(device: FlowMeterDevice): void {
  console.log(`${device.name} has a maximum flow rate of ${device.specs.max_flow_rate}`);
}
