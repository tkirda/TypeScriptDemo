declare var require: Require;

require.config({
    baseUrl: '/scripts/',
    paths: {
        jquery: 'libs/jquery-2.1.0.min',
        knockout: 'libs/knockout-3.0.0'
    }
});

require(['jquery', 'modules/toDoList'], ($: JQueryStatic, toDoList) => {
    $(() => {
        console.log('Page loaded...');
        var list = new toDoList();
        list.init();
    });
});