class AtomicCounter {
  private counter = 0;

  getAndIncrement() {
    this.counter += 1;
    return this.counter;
  }
}

export const counter = new AtomicCounter();
