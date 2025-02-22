const valor_d  = document.getElementById('valor_divisa');
const valor_f = document.getElementById('valor_total');
const valor_p =document.getElementById('valor_en_pesos')
var select = document.getElementById("select");
var options=document.getElementsByTagName("option");
const btn = document.getElementById('btn_buscar');
const sect1 = document.getElementById('section');
const hola1 = document.getElementById('hola');
const body = document.querySelector('body') 




const cargatiposmonedas = async () => {  /* cargando tipos de moneda */
    const valores = await fetch(`https://mindicador.cl/api`)
    const datos   = await valores.json();
    etiquetas = [""]; 
    Object.entries(datos).forEach(([key]) => {
    etiquetas.push(`${key}`)
      })
      for (var i = 3; i < 11; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        if (etiquetas[i] != 'fecha') {
          select.innerHTML = select.innerHTML +
            '<option>' + etiquetas[i]+ '</option>';
        }
            }
  }






cargatiposmonedas();


const Capturadatosapimonedas = async (monto, moneda) => {
    try {
      const valores = await fetch(`https://mindicador.cl/api`)
      const resultados = await valores.json();
      console.log(resultados);
      html = ''
      let valor = parseInt(resultados[moneda].valor);
      let monto1 = parseInt(monto);
      let transfo = monto1/valor;
      valor_d.innerHTML = resultados[moneda].valor;
      valor_f.innerHTML =  Number(transfo.toFixed(2));
      return resultados;
    } catch (error) {
      console.log(error);
    }
  }
 
  
  btn.onclick = function(){
    Capturadatosapimonedas(valor_p.value, select.value);
    renderGrafica();

  };


  async function getMonedas() {
  arrayp  = [""];
  arrayv  = [""];
  let endpoint = `https://mindicador.cl/api/${select.value}`;
  console.log(endpoint);
  const res = await fetch(endpoint);
  const monedas = await res.json();
  etiquetas = [""]; 
  let valores = Object.values(monedas.serie); 
  for(let i=0; i< valores.length; i++){
       arrayp.push(valores[i].fecha);
      arrayv.push(valores[i].valor);
  }
  return(arrayp);
  return(arrayv);
  return monedas;
  }

 function prepararConfiguracionParaLaGrafica(monedas,arrayp, arrayv) {
      // Creamos las variables necesarias para el objeto de configuración
      const tipoDeGrafica = "line";
      console.log("para grafico");
      console.log(arrayp);
      console.log(arrayv);
      const nombresDeLasMonedas = arrayp;
      const titulo = "Variaciones de la moneda";
      const colorDeLinea = "red";
      const valores = arrayv;
      // Creamos el objeto de configuración usando las variables anteriores
      const config = {
      type: tipoDeGrafica,
      data: {
      labels: nombresDeLasMonedas,
      datasets: [
        {
          label: titulo,
          backgroundColor: colorDeLinea,
          data: valores
          }
          ]}};
          return config;
  }

          
  async function renderGrafica() {
            let contador= 0;
            let ruta= `https://mindicador.cl/api/dolar}`;
            const monedas   = await getMonedas();
            const config    = prepararConfiguracionParaLaGrafica(monedas,arrayp,arrayv);
            const chartDOM  = document.getElementById("myChart");
            let chartStatus = Chart.getChart("myChart");
            if (chartStatus != undefined) {
                chartStatus.destroy();
            }
            new Chart(chartDOM, config)
  }

  function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}
  
  
      

