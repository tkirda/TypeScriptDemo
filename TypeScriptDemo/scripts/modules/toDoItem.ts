import knock = require('knockout');
import $ = require('jquery');

export = ToDoItem;

class ToDoItem implements IToDoItem {
    name = knock.observable('');
    completed = knock.observable(false);

    init(): void {
        $('body').addClass('ok');
    }
}