import { ServiceCategory } from '../../types';
import { Truck, Package, Warehouse } from 'lucide-react';

export const logisticsMHE: ServiceCategory = {
  title: "Logistics & Material Handling Equipment (MHE)",
  services: [
    {
      title: "Reach Truck Operator",
      description: "Professional training for reach truck operations in warehouse environments",
      icon: Truck
    },
    {
      title: "Forklift Operator",
      description: "Comprehensive forklift operation and safety certification",
      icon: Truck
    },
    {
      title: "Warehouse Operations",
      description: "Training for various warehouse roles including picking, packing, and inventory management",
      subServices: [
        "Picker", "Packer", "Kitter", "Binner", "Inventory"
      ],
      icon: Warehouse
    },
    {
      title: "Warehouse Supervision",
      description: "Leadership training for warehouse supervisors and team leaders",
      icon: Package
    }
  ]
};