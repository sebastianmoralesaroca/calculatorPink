function funMan () {
    contNumber.style = 'background-color:#2e2e2e' ;
    contKeys.style = 'background-color:#2e2e2e' ;
    body.style = 'background-color:#deed00' ;
}

function funWoman () {
    contNumber.style = 'background-color:#b800a2' ;
    contKeys.style = 'background-color:#b800a2' ;
    body.style = 'background-color:#c1ce03' ;
}

btnMan?.addEventListener ("click", () => {
    funMan() ;
    console.log('Mode Man') ;
})

btnWoman?.addEventListener ("click", () => {
    funWoman() ;
    console.log('Mode Woman') ;
});
