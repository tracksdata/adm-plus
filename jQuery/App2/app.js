
$(function () {

    // find an element h2 in dom using jQuery
    //let s1=$('h2').text(); // finding
    // find and change
    //$('h2').text('JQuery Modified Text....'); // every h2 element 
    // select any element whose id is id1
    //$('#id1').text('Changed text...')

    // select whose class is c1 and change text

    // $('.c1').text('Div Data');

    //$('li').text('Orlando')
    //$('.promo').text('Orlando')

    // let d1=$('<div> My New Div </div>');
    // $('#d2').append(d1);


    //$('button').on('click',function(){
    //  console.log('button1 clicked....');
    //})

    let amount = $('#ticket').data('price');

    $('#b1').on('click', function () {
        let p1=$(`<p>Ticket fare is ${amount}</p>`)
        $('#ticket').append(p1);
       // console.log(amount);
    })

    $('#b2').on('click', function () {
        console.log('button2 clicked....');
    })

    













})

