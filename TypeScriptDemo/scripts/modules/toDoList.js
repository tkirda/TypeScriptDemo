define(["require", "exports", 'knockout', './toDoItem'], function(require, exports, ko, ToDoItem) {
    

    var ToDoList = (function () {
        function ToDoList() {
            this.item = ko.observable(new ToDoItem());
            this.list = ko.observableArray();
        }
        ToDoList.prototype.add = function () {
            this.list.push(this.item());
            this.item(new ToDoItem());
        };

        ToDoList.prototype.init = function () {
            ko.applyBindings(this, document.getElementById('ko'));
        };

        ToDoList.prototype.remove = function (item) {
            this.list.remove(item);
        };

        ToDoList.prototype.complete = function (item) {
            item.completed(item.completed());
        };

        ToDoList.prototype.completeAll = function () {
            this.list().forEach(function (x) {
                if (x.completed())
                    return;
                x.completed(true);
            });
        };

        ToDoList.prototype.removeCompletedItems = function () {
            this.list.remove(function (x) {
                return x.completed();
            });
        };
        return ToDoList;
    })();
    return ToDoList;
});
