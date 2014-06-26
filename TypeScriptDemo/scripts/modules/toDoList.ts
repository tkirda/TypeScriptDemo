import ko = require('knockout');
import ToDoItem = require('./toDoItem');

export = ToDoList;

class ToDoList {
    private list: KnockoutObservableArray<IToDoItem>;
    item = ko.observable(new ToDoItem());

    constructor() {
        this.list = ko.observableArray<IToDoItem>();
    }

    add() {
        this.list.push(this.item());
        this.item(new ToDoItem());
    }

    init() {
        ko.applyBindings(this, document.getElementById('ko'));
    }

    remove(item: IToDoItem): void {
        this.list.remove(item);
    }

    complete(item: IToDoItem): void {
        item.completed(item.completed());
    }

    completeAll(): void {
        this.list().forEach(x => {
            if (x.completed()) return;
            x.completed(true);
        });
    }

    removeCompletedItems(): void {
        this.list.remove(x => x.completed());
    }
}