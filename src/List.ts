export default class List {
  private _items: string[] = [];

  get items() {
    return this._items;
  }

  add(item: string) {
    this._items.push(item);
  }

  isEmpty() {
    return this._items.length === 0;
  }

  edit(id: number, description: string) {
    this._items[id] = description;
  }

  remove(id: number) {
    this._items.splice(id, 1);
  }
}
