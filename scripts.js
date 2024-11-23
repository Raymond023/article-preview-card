'use strict'

window.onload = function () {

    const share = $('.share-icon');
    const removeShare = $('svg');
    const socials = $('.socials');
    const user = $('.user');
    const desktopRS = $('.user svg')
    //RS = remove share
    
    
    $(window).ready(function() {
        

        if ($(window).width() >= 1024) {
            
            share.click(function () {
                share.css({'display': 'none'});
                socials.css({"display": "flex"});
                removeShare.css({'display': 'none'});
                desktopRS.css({'display': 'flex'});
            });

            desktopRS.click(function () {
                share.css({'display': 'flex'});
                socials.css({"display": "none"});
                desktopRS.css({'display': 'none'});
            });

            } else {
            share.on('click', function () {
            user.css({"display": "none"});
            socials.css({"display": "flex"});
            });

            removeShare.on('click', function () {
            user.css({"display": "flex"});
            socials.css({"display": "none"});
            });
        }

    });

    



}