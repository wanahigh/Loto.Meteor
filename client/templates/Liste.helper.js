Meteor.subscribe('loto');
Template.liste.events({
    'click #toto'(event) {
        event.preventDefault()
        var aff = Meteor.call('listing');
        $("push").html(aff);
    }
})

// Meteor.subscribe('loto');
//
// Template.liste.helpers({
//     affichage : function () {
//         return Loto.find()
//     }
// });
//
//
//
//
//
// Template.liste.events({
//     'click .push' (event){
//         event.preventDefault();
//         console.log(name)
//     }
//
//
// })