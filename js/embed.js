function reloadEmbed(info){
    //alert(info.elements.namedItem("channel").value);
    var newUrl = "https://player.twitch.tv/?channel="+info.elements.namedItem("channel").value;
    document.getElementsByTagName("iframe")[0].setAttribute("src", newUrl);
}