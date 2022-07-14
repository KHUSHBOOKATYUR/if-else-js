let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    case 3:
        a = 'three';
        break;
    case 2:
        a = 'four';
        break;
    case 2:
        a = 'five';
        break;
    case 2:
        a = 'six';
        break;
    case 2:
        a = 'seven';
        break;
    default:
        a = 'not found';
        break;
}
console.log('The value is ',{a});