Meteor.subscribe('loto');

Template.tirrage.events({
    'click #gen' (event){
        event.preventDefault();
        a = new Array();


        var rnd = Math.floor(Math.random() * 51)

        if(a.indexOf(rnd)!=(-1)){
            rnd = Math.floor(Math.random() * 51)
        }
        else {
            a.push({num: rnd});
            $(result).html(rnd)

        }

        var rnd1 = Math.floor(Math.random() * 51)

        if(a.indexOf(rnd1)!=(-1)){
             rnd1 = Math.floor(Math.random() * 51)
        }
        else {
            a.push({num: rnd1});
            $(result1).html(rnd1)

        }

        var rnd2 = Math.floor(Math.random() * 51)

        if(a.indexOf(rnd2)!=(-1)){
            rnd2 = Math.floor(Math.random() * 51)
        }
        else {
            a.push({num: rnd2});
            $(result2).html(rnd2)

        }

        var rnd3 = Math.floor(Math.random() * 51)

        if(a.indexOf(rnd3)!=(-1)){
            rnd3 = Math.floor(Math.random() * 51)
        }
        else {
            a.push({num: rnd3});
            $(result3).html(rnd3)

        }

        var rnd4 = Math.floor(Math.random() * 51)

        if(a.indexOf(rnd4)!=(-1)){
            rnd4 = Math.floor(Math.random() * 51)
        }
        else {
            a.push({num: rnd4});
            $(result4).html(rnd4)

        }

        var rnd5 = Math.floor(Math.random() * 11)

        if(a.indexOf(rnd5)!=(-1)){
            rnd5 = Math.floor(Math.random() * 11)

        }
        else {
            a.push({num: rnd5});
            $(result5).html(rnd5)

        }

        Meteor.call('listing',a);


    },




    'click #rem' (event){
        event.preventDefault();


        Meteor.call('remove')
    }
});

Template.tirrage.helpers({
    loto : function(){

   return Loto.find({});

    }


});

