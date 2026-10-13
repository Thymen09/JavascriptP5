const container = document.getElementById('container')

//dit is een object, met de curly brackets
const rekening = {
    //dit zijn properties aka eigenschappen
    eigenaar: "Thymen Veldhoven",
    saldo: 20,
    rekeningnummer: "NL10INGB123456789",
    geblokkeerd: false,
    pincode: "3200",
    dagLimiet: 500,
    transacties: [],
    toonSaldo(){
        return this.saldo
    },

    changeSaldo(amount){
        this.saldo += amount
        this.transacties.push(amount)
        return `Het bedrag ${amount} is toegevoegd aan uw rekening`
    }
}

console.log(rekening.transacties)

console.log(rekening.changeSaldo(1000))

console.log(rekening.toonSaldo())

container.innerHTML = `
<h2>${rekening.eigenaar}</h2>
<h3>${rekening.saldo}</h3>
<p>${rekening.rekeningnummer}</p>
`