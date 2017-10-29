Router.configure({
    layoutTemplate: 'layout',

});

Router.route('/', {name: 'tirrage'});
Router.route('/series', {name : 'liste'});