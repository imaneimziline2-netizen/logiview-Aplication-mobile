export interface Parcel {
    id: number;
    reference: string;
    destination: string;
    status: "En transit" | "Livré";
    weight: string;
    shippingDate: string;
}

export interface Vehicle {
  id: number;
  registration: string;
  type: string;
  status: "Disponible" | "En mission";
  driver: string;
  mileage: string;
}