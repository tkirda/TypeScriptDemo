define(["require", "exports", 'knockout', 'jquery'], function(require, exports, knock, $) {
    

    var ToDoItem = (function () {
        function ToDoItem() {
            this.name = knock.observable('');
            this.completed = knock.observable(false);
        }
        ToDoItem.prototype.init = function () {
            $('body').addClass('ok');
        };
        return ToDoItem;
    })();
    return ToDoItem;
});
