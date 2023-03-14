
function encounterLoop() {
    let x = 0;

    while( 0 != Math.floor( Math.random() * 8192) ) {
        x++;
    }

    document.getElementById('output').innerHTML = "Encountered a shiny with base odds 1/8192 in " + x + " encounters!";
}

function shinyCharmLoop() {
    let x = 0;

    while( 2 < Math.floor( Math.random() * 8192 ) ) {
        x++;
    }

    document.getElementById('output').innerHTML = "Encountered a shiny with base odds 3/8192 (Wow! 3x the base odds!) in " + x + " encounters!";
}