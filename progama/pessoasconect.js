async function usuarioco(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res =  await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const redes = Object.keys(dados)
    const pessoas = Object.values(dados)

    const data = [
        {
            x : redes,
        
            y: pessoas,

            type: 'bar',
            marker: {
                color: 'darkblue'

            }
        }
    ]

  const layout = {
    plot_bgcolor: 'gray',
    paper_bgcolor: 'gray',
    title:{
        text: 'Redes sociais mais utilizadas no mundo',
        font: {
            color: 'aliceblue',
            family: 'Hand,Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
            size: 30
            
        },
        xaxis:{
            title:{
               text: 'nome das redes mais utilizadas',
               font:{
                color: 'aliceblue'
               }
            }
        }

    },
    xaxis:{
        tickfont:{
            color: 'white',
            size: 16
        },
        title:{
           text: 'Nome das redes mais utilizadas',
           font:{
            color: 'aliceblue'
           }
        }
    
  },
   yaxis:{
    tickfont:{
        color: 'white',
        size: 16
    },
    title:{
        text: 'Pessoas por bilhão',
        font:{
         color: 'aliceblue'
        }
     }
   }
}




    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}
usuarioco()