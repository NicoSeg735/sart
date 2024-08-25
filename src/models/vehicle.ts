import { IClient } from './client'

export interface IVehicle {
  id: number
  brand: string
  model: string
  type: string
  category: string
  licensePlate: string
  client: IClient
}

export class Vehicle {
  private id: number
  private brand: string
  private model: string
  private type: string
  private category: string
  private licensePlate: string
  private client: IClient

  constructor(data: IVehicle) {
    this.id = data.id
    this.brand = data.brand
    this.model = data.model
    this.type = data.type
    this.category = data.category
    this.licensePlate = data.licensePlate
    this.client = data.client
  }

  public getId(): number {
    return this.id
  }

  public getBrand(): string {
    return this.brand
  }

  public getModel(): string {
    return this.model
  }

  public getType(): string {
    return this.type
  }

  public getCategory(): string {
    return this.category
  }

  public getLicensePlate(): string {
    return this.licensePlate
  }

  public getClient(): IClient {
    return this.client
  }

  public setBrand(brand: string): void {
    this.brand = brand
  }

  public setModel(model: string): void {
    this.model = model
  }

  public setType(type: string): void {
    this.type = type
  }

  public setCategory(category: string): void {
    this.category = category
  }

  public setLicensePlate(licensePlate: string): void {
    this.licensePlate = licensePlate
  }

  public setClient(client: IClient): void {
    this.client = client
  }

  public getData(): IVehicle {
    return {
      id: this.id,
      brand: this.brand,
      model: this.model,
      type: this.type,
      category: this.category,
      licensePlate: this.licensePlate,
      client: this.client
    }
  }
}
