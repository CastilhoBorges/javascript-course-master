
function day2(day){
    switch(day) {
        case 'monday':
            console.log('Watch course of Js');
            break;
        case 'tuesday':
            console.log('Run in the park');
            break;
        case 'wednesday':
        case 'thursday':
            console.log('Record Videos');
            break;
        case 'friday':
            console.log('Edit Videos');
            break;
        case 'saturday':
        case 'sunday':
            console.log('Play Video game');
            break;
        default:
            console.log('Not a valid day');
    } 
}
day2('sunday');


function day(day){
    if (day === 'monday') {
        console.log('Watch course of Js');
    } else if (day === 'tuesday') {
        console.log('Run in the park');
    } else if (day === 'wednesday' || day == 'thursday') {
        console.log('Record Videos');
    } else if (day === 'friday') {
        console.log('Edit Videos');
    } else if (day === 'saturday' || day == 'sunday') {
        console.log('Play Video game');
    } else {
        console.log('Not a valid day');
    }
}
day('monday');

