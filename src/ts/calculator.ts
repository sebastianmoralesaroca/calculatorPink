btnCalc.forEach(boton => {
    boton.addEventListener("click", () => {
        const btnTight = boton.textContent ;

        if (boton.id === 'buttonReset') {
            contNumber.textContent = '0' ;
            return ;
        }

        if (boton.id === 'buttonDelete') {
            if (contNumber.textContent.length ===1 || contNumber.textContent === "Syntax Error!" ) {
                contNumber.textContent = '0' ;
            } else {
                contNumber.textContent = contNumber.textContent?.slice(0, -1) ;
            }
            return ;
        }

        if (boton.id === "buttonTotal") {
            try {
                contNumber.textContent = eval(contNumber?.textContent) ;
            } catch (error) {
                contNumber.textContent = "Syntax Error!" ;
            }
            return ;
        }

        if ( contNumber.textContent === '0' || contNumber.textContent === "Syntax Error!" ) {
            contNumber.textContent = btnTight ;
        } else {
            contNumber.textContent += btnTight ;
        }

    })
})