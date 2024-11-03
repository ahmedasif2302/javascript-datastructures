class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let itemCheck = bucket.find((item) => item[0] === key);
      if (itemCheck) {
        itemCheck[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    let item = bucket.find((item) => item[0] === key);
    if (item) {
      return item[1];
    }
    return null;
  }

  remove(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    let indexOfItem = bucket.findIndex((item) => item[0] === key);
    bucket.splice(indexOfItem, 1);
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (Array.isArray(this.table[i])) {
        console.log(this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "asif");

table.set("age", 1);
table.set("age", 11);

table.set("aeg", 11);
table.remove("aeg");
table.remove("age");

table.display();
