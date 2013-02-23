var Messages;

Messages = new Meteor.Collection("messages");

if (Meteor.is_client) {
  window.Messages = Messages;
  
  Template.messages.messages = function() {
    return Messages.find({}, { sort: { time: -1 } });
  };

  Template.entry.events = {
    'keyup #messageBox': function(event) {
      var name, new_message;
      if (event.type === "keyup" && event.which === 13) { // ENTER key
        
        new_message = $("#messageBox");
        name = $("#name");
        
        Messages.insert({
          name: name.val(),
          message: new_message.val(),
          created: new Date()
        });

        new_message.val("");
        new_message.focus();
        
        return $("#chat").scrollTop(1000000);
      }
    }
  };
}
