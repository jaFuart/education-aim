var outer_width = window.screen.width;

if (outer_width >= 1896) {

    jQuery(".left-top").attr("src", "./img/left-top.svg");
    jQuery(".right-top").attr("src", "./img/right-top.svg");

    jQuery(".left-bot").attr("src", "./img/left-bot.svg");
    jQuery(".right-bot").attr("src", "./img/right-bot.svg");

}

else if ((outer_width >= 768) && (outer_width <= 1824)) {

    jQuery(".left-top").attr("src", "./img/left-top-m.svg");
    jQuery(".right-top").attr("src", "./img/right-top-m.svg");

    jQuery(".left-bot").attr("src", "./img/left-bot-m.svg");
    jQuery(".right-bot").attr("src", "./img/right-bot-m.svg");

}

else if ((outer_width >= 320) && (outer_width <= 640)) {

    jQuery(".left-top").attr("src", "./img/left-top-s.svg");
    jQuery(".right-top").attr("src", "./img/right-top-s.svg");

    jQuery(".left-bot").attr("src", "./img/left-bot-s.svg");
    jQuery(".right-bot").attr("src", "./img/right-bot-s.svg");

}