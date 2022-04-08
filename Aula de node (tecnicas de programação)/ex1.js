

    var termo1 = 2
    var termo2 = 7
    var termo3 = 3
    i = 4
    numero_de_termos = 15
    console.log(termo1)
    console.log(termo2)
    console.log(termo3)
    multiplicador = 2
    while (i <= numero_de_termos) {

        termo1 = termo1 * multiplicador
        console.log(termo1)
        i = i++
        multiplicador = multiplicador++

        if (i <= numero_de_termos){ 

            termo2 = termo2 * 3
        console.log(termo2)
        i = i++


        if (i <= numero_de_termos) {

            termo3 = termo3 * 4
            console.log(termo3)
            i = i++

        }

    }
}


    // }