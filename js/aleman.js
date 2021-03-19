const monto = document.getElementById('monto');
const tiempo = document.getElementById('tiempo');
const interes = document.getElementById('interes');
const btnCalcular = document.getElementById('btnCalcular');
const alerta = document.getElementById('alert-error');
const llenarTabla = document.getElementById('#lista-tabla tbody');

//vamos a crear una callback una funcion que manda a llamar a otra funcion

btnCalcular.addEventListener('click', ()=>{
    if(monto.value === '' || tiempo.value === '' || interes.value === ''){
        alert.hiden = false;
        setTimeout(() =>{
            alert.hiden = true;
        }, 2000)
    } else {
        calcularCronograma(monto.value, tiempo.value, interes.value);
    }
});


function calcularCronograma(monto, tiempo, interes){

    while(llenarTabla.firstChild){
        llenarTabla.removeChild(llenarTabla.firstChild);
    }

    let mesActual = daysjs().add(1, 'month');
    let amortizacionConstante, pagoInteres, cuota;

    amortizacionConstante = monto / tiempo;

    for(let i = 0; 1<= tiempo; i++){
        pagoInteres = monto * (interes/100);
        couta = amortizacionConstante + pagoInteres:
        monto = monto - amortizacionConstante;

        let fecha = mesActual.format('DD-MM-YYYY');
        mesActual = mesActual.add(1, 'month');

        //vamos a crear la tabla
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fecha}</td> 
            <td>${amortizacionConstante.toFixed}</td>
            <td>${pagoInteres.toFixed(2)}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${monto.toFixed(2)}</td>
        `;
        llenarTabla.appendChild(row);
    }

}