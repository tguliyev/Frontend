$(()=>{
    let path= './img/'
    let image = ['avatar.jpg','baloon.webp','hacker.jpg','fudzi.jpg','qiji.webp','qiz.jpeg','maral.jpg','sauron.jpg']
    let x = 0

    $('#trakers')
        .append('<p id="counter"></p>')
        .append('<p id="time"></p>')
        .append('<div id="progressbar"></div>')
        .children().css({
            height: '20px',
            margin: 0
        })

    const counter = $('#counter')
    const time = $('#time')
    const progressbar = $('#progressbar')
    counter
        .css({width: '50px'})
    time
        .css({width: '50px'})
    progressbar
        .css({
            width: '100%'
        })
        .progressbar({
            value: 0,
            change: function() {
                time.text( progressbar.progressbar( "value" ) + "%" );
            },
            complete: function() {
                time.text( "Complete!" );
            }
        })

    $("#slider")
        .css({
            position: 'relative',
            overflow: 'hidden'
        })
        .append('<div id="slide"></div>')
        .append('<div id="thumbs"></div>')
        .click(function(e){
            change( e.clientX > $(window).width() / 2 ? 1 : -1)
        })
    const slide = $("#slide")
    let timer = setTimeout(change, 1, 0)
    let proggressTimer = 0

    slide
        .css({
            position: 'absolute',
            width: image.length * 100 + '%',
            height: '100%',
            display: 'flex'
        })
        
    const thumbs = $("#thumbs")
    thumbs
        .css({
            position: 'absolute',
            width: '100%',
            bottom: 0,
            textAlign: 'center'
        })
    
    image.forEach(item => thumbs.append(`<img src="${path}${item}" />`)) 
    image.forEach(item => slide.append(`<img src="${path}${item}" />`)) 

    slide.children()
        .css({
            width: $("#slider").width(),
            height: "100%",
            objectFit: 'cover'
        })

    thumbs.children()
        .css({
            width: "32px",
            height: "32px",
            borderRadius: '50%',
            border: '3px solid #fff',
            margin: '5px',
            cursor: 'pointer',
            zIndex: '99'
        })
        .click(function(e){
            e.stopPropagation()
            x = $(this).index()
            change(0)
        })

    function change(dir = 1) {
        clearTimeout(timer)
        x += dir
        if(x >= image.length) x = 0
        if(x < 0) x = image.length - 1
        show(dir >= 0 ? 1 : -1)
        changeTrakers()
        timer = setTimeout(change, 3000)
    }

    function show() {
        slide.animate({ left: -100 * x + '%' }, 300)

        thumbs.children().css({opacity: .5})
        thumbs.children().eq(x).css({opacity: 1})
    }

    function changeTrakers() {
        counter.text(`${image.length}/${x + 1}`)
        progressbar.progressbar('value', 0);
        clearTimeout(proggressTimer)
        progress()
    }

    function progress() {
        let val =  progressbar.progressbar( "value" ) || 0;
   
        progressbar.progressbar( "value", val + 2 );
   
        if ( val < 99 ) {
            proggressTimer = setTimeout( progress, 49 );
        }
    }
    
    $( ".ui-progressbar-value" )
        .css({
            background: '#1755a2'
        })

})