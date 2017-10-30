
import { Mongo } from 'meteor/mongo';
Loto = new Mongo.Collection('loto');








return Meteor.methods({

    remove: function () {

        return Loto.remove({});

    }


});

return Meteor.methods({

    listing: function () {

        return Loto.find({}).fetch();

    }
});
