//Constates que almacenan el arbol de info
const infoPrimeraGuerra = document.getElementById("infoPrimeraGuerra")
const mainInicio = document.getElementById("mainInicio")
const buttonMasInfo = document.getElementById("buttonMasInfo")
const containerIndus = document.getElementById("containerIndus")
const secInfo = document.getElementById("secInfoYTer")
//Constates que almacenan el arbol de info

//Funcion para apracer recuadros con mas info
const cudraditoInfo = document.createElement("div")
infoPrimeraGuerra.addEventListener("click", function () {
    cudraditoInfo.innerHTML = `<p>La Primera Guerra Mundial, también conocida como la Gran Guerra, fue un conflicto militar global que se desarrolló principalmente en Europa entre el 28 de julio de 1914 y el 11 de noviembre de 1918<p/>`
    + `<p class="exmen" id="cerrarCuadrado">X<p/>`
    cudraditoInfo.className = `InformacionExtra`
    mainInicio.appendChild(cudraditoInfo)
const cerrarCuadrado = document.getElementById("cerrarCuadrado")
cerrarCuadrado.addEventListener("click",function() {
cudraditoInfo.remove()
})

})

//Funcion para apracer recuadros con mas info


//
const cudraditoInfo2 = document.createElement("div")
buttonMasInfo.addEventListener("click", function(){
    cudraditoInfo2.className = "info2"
    cudraditoInfo2.innerHTML = `<p>La industria moderna está evolucionando hacia la sostenibilidad y la sustentabilidad, y se caracteriza por varios aspectos clave: <br>

⚙ Automatización: La implementación de sistemas automatizados para mejorar la eficiencia y reducir errores humanos. <br>

⚙ Robotización: El uso de robots en la producción y otros procesos industriales para aumentar la precisión y la productividad. <br>

⚙ Investigación y desarrollo de nanomateriales y nanociencia: Innovaciones en estos campos están permitiendo la creación de nuevas tecnologías para la producción de energía limpia y otros usos industriales. <br>

⚙ Sectorización y terciarización en áreas logísticas y de marketing: La especialización y externalización de servicios logísticos y de marketing para optimizar recursos y enfocarse en competencias clave. <br>

⚙ Globalización e industrias sustentables: La integración de mercados globales y el enfoque en prácticas industriales que minimicen el impacto ambiental y promuevan la sostenibilidad a largo plazo. <br> <br>

Estos elementos están transformando la manera en que las industrias operan, con un enfoque creciente en la eficiencia, la innovación y la responsabilidad ambiental.<p/>` + `<button id="cerrarInfo2">Cerrar<button/>`

containerIndus.appendChild(cudraditoInfo2)

const cerrarInfo2 = document.getElementById("cerrarInfo2")

cerrarInfo2.addEventListener("click",function() {
    cudraditoInfo2.remove()
})

})
//
const generarInfoGlob = document.createElement("div")
secInfo.addEventListener("click", function () {
generarInfoGlob.className = "cusraditoInfo3"

generarInfoGlob.innerHTML = `<p>Sectorización <br>
La sectorización se refiere a la división de una empresa o industria en diferentes sectores o áreas especializadas.<p/>` + 
`<p> Terciarización <br>
La terciarización, también conocida como outsourcing, implica la contratación de servicios externos para realizar tareas que anteriormente se llevaban a cabo internamente.<p/>`+
`<button id="cerrarinfo3">Cerrar<button/>`
containerIndus.appendChild(generarInfoGlob)

const cerrarinfo3 = document.getElementById("cerrarinfo3")

cerrarinfo3.addEventListener("click",function() {
    generarInfoGlob.remove()
})



})
