export class Order {
  constructor(
    completed,
    location,
    manager,
    driver,
    dimensions,
    startTime,
    price
  ) {
    this.completed = completed;
    this.location = location;
    this.manager = manager;
    this.driver = driver;
    this.dimensions = dimensions;
    this.startTime = startTime;
    this.price = price;
  }
}
