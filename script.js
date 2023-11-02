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
    creatBar({nome: nameLabel, agua: aguaLabel, luz: luzLabel, tel: telefoneLabel})
    

   

 })


 function creatBar (data){
    myChart =  new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.nome  ,
            datasets: [
            {
              label: '# Agua',
              data: data.agua,
              borderWidth: 1
            },
            {
                label: '# Luz',
                data: data.luz,
                borderWidth: 1
              },
              {
                label: '# Telefone',
                data: data.tel,
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