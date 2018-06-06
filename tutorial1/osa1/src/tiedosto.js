//Run with node tiedosto.js

const x = 1
let y = 5

console.log(x, y)  // tulostuu 1, 5
y += 10
console.log(x, y)  // tulostuu 1, 15
y = 'teksti'
console.log(x, y)  // tulostuu 1, teksti
//x = 4 Error


const t = [1, -1, 3]

t.push(5)

console.log(t.length)  // tulostuu 4
console.log(t[1])      // tuostuu -1

t.forEach((luku) => {
  console.log(luku)    // tulostuu 1, -1, 3 ja 5 omille riveilleen
})

t[6] = 99

console.log(t)         // tulostuu [ 1, -1, 3, 5, <2 empty items>, 99 ]



const p = [1, 2, 3, 4]

const m1 = p.map((luku) => luku * 2)
console.log(m1) // tulostuu [2, 4, 6, 8]

const m2 = p.map((luku) => '<li>' + luku + '</li>')


const e = [1, 2, 3, 4, 5]

const [eka, toka, ...loput] = e

console.log(eka, toka)      // tulostuu 1, 2
console.log(loput)          // tulostuu [3, 4 ,5]



const olio1 = {
    nimi: 'Arto Hellas',
    ika: 35,
    koulutus: 'Filosofian tohtori'
  }
  
  const olio2 = {
    nimi: 'Full Stack -websovelluskehitys',
    taso: 'aineopinto',
    laajuus: 5
  }
  
  const olio3 = {
    nimi: {
      etunimi: 'Jami',
      sukunimi: 'Kousa'
    },
    arvosanat: [2, 3, 5, 3],
    laitos: 'TKTL'
  }

console.log(olio3.nimi)          // tulostuu Arto Hellas
const kentanNimi = 'arvosanat'
console.log(olio3[kentanNimi])   // tulostuu 35


olio1.osoite = 'Tapiola'
olio1['salainen numero'] = 12341


const summa = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
  }

  const vastaus = summa(1,5)
  console.log(vastaus)


  const nelio = p => {
    console.log(p)
    return p * p
  }
  //const nelio = p => p * p

  const vastaus2 = nelio(3)
  console.log(vastaus2)



  const arto = {
    nimi: 'Arto Hellas',
    ika: 35,
    koulutus: 'Filosofian tohtori',
    tervehdi: function () {
      console.log('hello, my name is', this.nimi)
    },
    laskeSumma: function (a, b) {
        console.log(a + b)
      }
  }
  
  arto.vanhene = function() {
    this.ika += 1
  }
  
  console.log(arto.ika)  // tulostuu 35
  arto.vanhene()
  console.log(arto.ika)  // tulostuu 36


  arto.laskeSumma(1, 4)   // tulostuu 5

const viiteSummaan = arto.laskeSumma
viiteSummaan(10, 15)   // tulostuu 25




setTimeout(arto.tervehdi, 1000)
//Use bind to reference right context
setTimeout(arto.tervehdi.bind(arto), 1000)




class Henkilo {
    constructor(nimi, ika) {
      this.nimi = nimi
      this.ika = ika
    }
    tervehdi() {
      console.log('hello, my name is', this.nimi)
    }
  }

  const jami = new Henkilo('Jami Kousa', 21)
jami.tervehdi()
  