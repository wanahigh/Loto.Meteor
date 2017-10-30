Meteor.subscribe('loto');

Template.tirrage.events({
    'click #gen' (event){
        event.preventDefault();

        var rst = Math.random() * 50;
        var rnd =  (Math.round(rst));
        $(result).html(Math.round(rst))+',';
        var rst1 = Math.random() * 50;
        var rnd1 = (Math.round(rst1));
        $(result1).html(Math.round(rst1))+',';
        var rst2 = Math.random() * 50;
        var rnd2 = (Math.round(rst2));
        $(result2).html(Math.round(rst2))+',';
        var rst3 = Math.random() * 50;
        var rnd3 = (Math.round(rst3));
        $(result3).html(Math.round(rst3))+',';
        var rst4 = Math.random() * 50;
        var rnd4 = (Math.round(rst4));
        $(result4).html(Math.round(rst4))+',';
        var rst5 = Math.random() * 50;
        var rnd5 = (Math.round(rst4))
        $(result5).html(Math.round(rst4))+',';


        a = new Array();
        a.push({num:rnd});
        a.push({num:rnd1});
        a.push({num:rnd2});
        a.push({num:rnd3});
        a.push({num:rnd4});
        a.push({num:rnd5});

        var doc = {
            names: a

        }

        Loto.insert(a);
    },
    'click #rem' (event){
        event.preventDefault();


        Meteor.call('remove')
    },

    'click #toto' (event) {
        event.preventDefault();
        $("push").html('listing');
    }
});

Template.tirrage.helpers({
    liste : function(){

   return Meteor.call('listing');

    }

});