const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

 async function inform() 
 {
    const res = await fetch(url);
    const dados = await res.json();
    const paragrafo = document.createElement('p')
    const pessoasconec = (dados.total_pessoas_conectadas/ 1e9)
    const pessoasmund = (dados.total_pessoas_mundo/ 1e9)
    const horas = parseInt(dados.tempo_medio)
     const minutos = Math.round((dados.tempo_medio - horas) * 100)
    paragrafo.classList.add('caixa')
    paragrafo.innerHTML = `Você sabia que existem cerca de <span> ${pessoasmund} bilhões </span> pessoas no mundo e aproximadamente <span>${pessoasconec} bilhões </span> usam redes sociais como tempo médio de <span>${horas} horas e ${ minutos}minutos</span>`
    console.log(paragrafo)
    const conteiner = document.getElementById('graficos-')
    conteiner.appendChild(paragrafo) 
 }
 inform()