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

   },


 'show'(a){
        return Loto.find({})
 }


});


// Server
Meteor.publish('userData', function () {
  if (this.userId) {
    return Meteor.users.find({ _id: this.userId }, {
      fields: { other: 1, things: 1 }
    });
  } else {
    this.ready();
  }
});
