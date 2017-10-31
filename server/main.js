import { Meteor } from 'meteor/meteor';


    Meteor.startup(function() {


    })

return Meteor.methods({

    'remove'() {
        return Loto.remove({});

    },


   'listing'(a){

        Loto.insert({
            tableau:a


        })

   }




});


