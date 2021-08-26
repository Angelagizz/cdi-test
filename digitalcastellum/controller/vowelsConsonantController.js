function soal0(input) {
  let checker = {
    a: false,
    i: false,
    u: false,
    e: false,
    o: false
  }

  let mati = 0
  let hidup = 0

  for (let i = 0; i < input.length; i++) {
    let huruf = input[i].toLowerCase()
    if (huruf == 'a' || huruf == 'i' || huruf == 'u' || huruf == 'e' || huruf == 'o') {
      if (!checker[huruf]) {
        checker[huruf] = true
        hidup++
      }
    } else {
      mati++
    }
  }
  return `hasil huruf mati: ${mati}, huruf hidup:${hidup}`
}