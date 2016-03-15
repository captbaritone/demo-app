requirejs([
    'jquery',
    'underscore'
],function(
    $,
    _
) {
    var template = _.template('Hello <%- name %>');
    $('body').html(template({name: 'Jordan'}));
});
