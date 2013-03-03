/*(function($) {
 $(document).ready(function() {
 $('.opentok-container').openTok({
 apiKey : 22948822,
 sessionId : '1_MX4yMjk0ODgyMn4xMjcuMC4wLjF-U2F0IEZlYiAyMyAxMjoxMzo0NCBQU1QgMjAxM34wLjI4NDU5Mzg4fg',
 connectionToken : 'T1==cGFydG5lcl9pZD0yMjk0ODgyMiZzZGtfdmVyc2lvbj10YnJ1YnktdGJyYi12MC45MS4yMDExLTAyLTE3JnNpZz05NjU5ZGIzODZkZTZjMmQ5NDg5ODEzZmNlZjk5YjhjZGVhNGM2YmE5OnJvbGU9cHVibGlzaGVyJnNlc3Npb25faWQ9JmNyZWF0ZV90aW1lPTEzNjE2NTA0MjQmbm9uY2U9MC44NTEzMzg0NTgyOTQzNTc4JmV4cGlyZV90aW1lPTEzNjE3MzY4MjMmY29ubmVjdGlvbl9kYXRhPQ==',
 streamWrapper : '<div class="opentok-stream" style="display:hidden;visible:none"></div><div class="opentok-stream-wrapper"><div class="opentok-stream-controls"><a href="#" class="opentok-mute">Mute</a><a href="#" class="opentok-unmute">Unmute</a><a href="#" class="opentok-close">Close</a></div><div class="opentok-stream"></div>',
 }).openTokLayout();
 });
 })(jQuery);
 */

(function($) {
    $(document).ready(function() {
        $('#opentok_container').openTok({
            apiKey : '22948822',
            sessionId : '1_MX4yMjk0ODgyMn4xMjcuMC4wLjF-U2F0IE1hciAwMiAxODo1MjozNSBQU1QgMjAxM34wLjQwODQ2MDk3fg',
            connectionToken : 'T1==cGFydG5lcl9pZD0yMjk0ODgyMiZzZGtfdmVyc2lvbj10YnJ1YnktdGJyYi12MC45MS4yMDExLTAyLTE3JnNpZz1hMTQwMGIyOTY3Y2VmMDFiYzJlOTY3ZTMxZTM1YmEyYTE3ODcxODcyOnJvbGU9cHVibGlzaGVyJnNlc3Npb25faWQ9MV9NWDR5TWprME9EZ3lNbjR4TWpjdU1DNHdMakYtVTJGMElFMWhjaUF3TWlBeE9EbzFNam96TlNCUVUxUWdNakF4TTM0d0xqUXdPRFEyTURrM2ZnJmNyZWF0ZV90aW1lPTEzNjIyNzkxNzQmbm9uY2U9MC40MTg3MzQwMDAwNzYyMDczJmV4cGlyZV90aW1lPTEzNjIzNjU1NzQmY29ubmVjdGlvbl9kYXRhPQ==',
            cssSelector : {
                connect : '#connectLink',
                disconnect : '#disconnectLink',
                publish : '#publishLink',
                unpublish : '#unpublishLink',
                streamsContainer : '.subscriberContainer',
                publisherContainer : '.publisherContainer'
            },
            streamWrapper : '<div class="opentok-stream" style="display:hidden;visible:none"></div>'
        });
    });
})(jQuery); 