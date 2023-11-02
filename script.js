//Estudo sobre implementação a de graficos utilizando a biblioteca chart.js

//Este é o primeiro parametro (canvas)
 const ctx = document.getElementById('myChart');
 const btn = document.getElementById('newGraph')
 const inputNo = document.getElementById('inputNome')
 const inputAgua = document.getElementById('inputAgua')
 const inputLuz = document.getElementById('inputLuz')
 const inputTel = document.getElementById('inputTelefone')


 let nameLabel = []
 let aguaLabel = []
 let luzLabel = []
 let telefoneLabel =  []


 var myChart

 creatBar(nameLabel ,aguaLabel, luzLabel, telefoneLabel )


 btn.addEventListener('click',()=>{
    console.log("CLiquei")
     myChart.destroy()
     
     nameLabel.push(inputNo.value)
     aguaLabel.push(inputAgua.value)
     luzLabel.push(inputLuz.value)
     telefoneLabel.push(inputTel.value)
    creatBar( nameLabel, aguaLabel, luzLabel, telefoneLabel)
    

   

 })


 function creatBar (nameLabel, aguaLabel, luzLabel, telefoneLabel ){
    myChart =  new Chart(ctx, {
          type: 'bar',
          data: {
            labels: nameLabel  ,
            datasets: [
            {
              label: '# Agua',
              data: aguaLabel,
              borderWidth: 1
            },
            {
                label: '# Luz',
                data: luzLabel,
                borderWidth: 1
              },
              {
                label: '# Telefone',
                data: telefoneLabel,
                borderWidth: 1
              }
        
        ]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }