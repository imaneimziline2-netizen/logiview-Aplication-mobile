import { Parcel, Vehicle } from "../types";

export const parcels: Parcel[] = [
  {
    id: 1,
    reference: "COL-001",
    destination: "Casablanca",
    status: "En transit",
    weight: "5 kg",
    shippingDate: "05/08/2026",
  },
  {
    id: 2,
    reference: "COL-002",
    destination: "Rabat",
    status: "Livré",
    weight: "2 kg",
    shippingDate: "03/08/2026",
  },
  {
    id: 3,
    reference: "COL-003",
    destination: "Marrakech",
    status: "En transit",
    weight: "8 kg",
    shippingDate: "04/08/2026",
  },
];

export const vehicles: Vehicle[] = [
  {
    id: 1,
    registration: "12345-A-1",
    type: "Camion",
    status: "Disponible",
    driver: "Ahmed",
    mileage: "150000 km",
  },
  {
    id: 2,
    registration: "67890-B-2",
    type: "Fourgon",
    status: "En mission",
    driver: "Youssef",
    mileage: "98000 km",
  },
  {
    id: 3,
    registration: "11223-C-3",
    type: "Camionnette",
    status: "Disponible",
    driver: "Salim",
    mileage: "50000 km",
  },
];