$('#input-field').on("keypress", function (e) {            
    if (e.keyCode == 13) {
        e.preventDefault(); 
        reloadEmbed();
    }
});

function reloadEmbed(){
    var newVal = $("#input-field").val();
    player.setChannel(newVal);
}