requirejs([
    'underscore'
],function(
    _
) {
    var template = _.template('Hello <%- name %>');
    document.body.innerHTML = template({name: 'Jordan'});
});
