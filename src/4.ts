class Key {
    constructor(private signature: number = Math.random()) {}

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[] = [];
  
    constructor(key: Key) {
      this.door = false;
      this.key = key;
    }

    comeIn(person: Person): void {
        if (this.door) {
          this.tenants.push(person);
          console.log('The door is open.');
        } else {
          console.log('The door is closed.');
        }
      }
    
      abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
          this.door = true;
          console.log('The door is open.');
        } else {
          console.log('The door is closed.');
        }
      }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};