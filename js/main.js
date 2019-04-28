let type = $('#type');
let doc = $(document);
    let i = 0;
    let speed = 180;
    let del = 350;
    let s = "Navigation Animation";
    function typewriter(){
        if(i < s.length){
            if(s.charAt(i) === ' '){
                type.append("<br>");
            }
            type.append(s.charAt(i));
            i++;
            setTimeout(typewriter,speed);
        }
        else{
            i=0;
            type.html('');
            setTimeout(typewriter,del);
        }
    }
doc.ready(typewriter());

let message = $("#message");
let user = $("#user");
let notify = $("#notify");
let camera = $("#camera");
let wrapper = $('.wrapper');

message.on('click', ()=>{
    let itr = 0;
    if(itr === 0){
        itr = 1;
        message.addClass('animate');
    }
    if(user.hasClass('animate')){
        user.removeClass('animate').addClass('animate-down');
    }
    if(notify.hasClass('animate')){
        notify.removeClass('animate').addClass('animate-down');
    }
    if(camera.hasClass('animate')){
        camera.removeClass('animate').addClass('animate-down');
    }
    if(message.hasClass('animate-down')){
        message.removeClass('animate-down').addClass('animate');
    }
    wrapper.css('background','#F3A712');
});

user.on('click', ()=>{
    let itr = 0;
    if(itr === 0){
        itr = 1;
        user.addClass('animate');
    }
    if(notify.hasClass('animate')){
        notify.removeClass('animate').addClass('animate-down');
    }
    if(camera.hasClass('animate')){
        camera.removeClass('animate').addClass('animate-down');
    }
    if(message.hasClass('animate')){
        message.removeClass('animate').addClass('animate-down');
    }
    if(user.hasClass('animate-down')){
        user.removeClass('animate-down').addClass('animate');
    }
    wrapper.css('background','#FCD7AD');
});

notify.on('click', ()=>{
    let itr = 0;
    if(itr === 0){
        itr = 1;
        notify.addClass('animate');
    }
    if(camera.hasClass('animate')){
        camera.removeClass('animate').addClass('animate-down');
    }
    if(message.hasClass('animate')){
        message.removeClass('animate').addClass('animate-down');
    }
    if(user.hasClass('animate')){
        user.removeClass('animate').addClass('animate-down');
    }
    if(notify.hasClass('animate-down')){
        notify.removeClass('animate-down').addClass('animate');
    }
    wrapper.css('background','#DB2B39');
});

camera.on('click', ()=>{
    let itr = 0;
    if(itr === 0){
        itr = 1;
        camera.addClass('animate');
    }
    if(notify.hasClass('animate')){
        notify.removeClass('animate').addClass('animate-down');
    }
    if(message.hasClass('animate')){
        message.removeClass('animate').addClass('animate-down');
    }
    if(user.hasClass('animate')){
        user.removeClass('animate').addClass('animate-down');
    }
    if(camera.hasClass('animate-down')){
        camera.removeClass('animate-down').addClass('animate');
    }
    wrapper.css('background','#A5D0A8');
});

$('.reset').on('click', ()=>{
    if(notify.hasClass('animate') || notify.hasClass('animate-down')){
        notify.removeClass('animate').removeClass('animate-down');
    }
    if(message.hasClass('animate') || message.hasClass('animate-down')){
        message.removeClass('animate').removeClass('animate-down');
    }
    if(camera.hasClass('animate') || camera.hasClass('animate-down')){
        camera.removeClass('animate').removeClass('animate-down');
    }
    if(user.hasClass('animate') || user.hasClass('animate-down')){
        user.removeClass('animate').removeClass('animate-down');
    }
    wrapper.css('background', 'linear-gradient(to top, #09203f 0%, #537895 100%)');
});