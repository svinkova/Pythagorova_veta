let vysledek = document.getElementById("vysledek")
let vymazat = document.getElementById("vymazat")


vysledek.addEventListener("click", calculate)
function calculate() {
    let inputA = parseFloat(document.getElementById("inputA").value);
    let inputB = parseFloat(document.getElementById("inputB").value);
    let inputC = parseFloat(document.getElementById("inputC").value);
    
    if (!isNaN(inputA) && !isNaN(inputB) && !isNaN(inputC)) {
      // Výpočet pokud jsou zadány všechny tři strany
      document.getElementById("chyba").innerHTML = "Zadejte správné kombinace hodnot!"
    } else if (((!isNaN(inputA) && !isNaN(inputC))||(!isNaN(inputB) && !isNaN(inputC))) && ((inputC <= inputA)||(inputC <= inputB))) {
      // Strana c musí být větší než a a b
      document.getElementById("chyba").innerHTML = `Chyba! Zadané hodnoty nesplňují pravidla pro trojúhelník!`
    } else if (!isNaN(inputA) && !isNaN(inputB)) {
      // Výpočet c, pokud jsou zadány a i b
      let resultC = Math.sqrt(inputA * inputA + inputB * inputB)
      document.getElementById("inputC").value = resultC
      let ZaokrouhlResultC = Math.round(resultC*100)/100
      document.getElementById("chyba").innerHTML = `<i>c</i> = ${ZaokrouhlResultC}`
    } else if (!isNaN(inputA) && !isNaN(inputC)) {
      // Výpočet b, pokud jsou zadány a i c
      let resultB = Math.sqrt(inputC * inputC - inputA * inputA)
      document.getElementById("inputB").value = resultB
      let ZaokrouhlResultB = Math.round(resultB*100)/100
      document.getElementById("chyba").innerHTML = `<i>b</i> = ${ZaokrouhlResultB}`
    } else if (!isNaN(inputB) && !isNaN(inputC)) {
      // Výpočet a, pokud jsou zadány b i c
      let resultA = Math.sqrt(inputC * inputC - inputB * inputB)
      document.getElementById("inputA").value = resultA
      let ZaokrouhlResultA = Math.round(resultA*100)/100
      document.getElementById("chyba").innerHTML = `<i>a</i> = ${ZaokrouhlResultA}`
    } else {
      alert("Zadejte správné kombinace hodnot!")
    }    
}

vymazat.addEventListener("click", clearInputs)
function clearInputs() {
  document.getElementById("inputA").value = "";
  document.getElementById("inputB").value = "";
  document.getElementById("inputC").value = "";
}
