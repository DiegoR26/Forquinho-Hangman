const palavras = [
{
    'nome':'ADORAVEL',
    'dica':'Adjetivo'
    
},

{
    'nome':'TRITURADOR',
    'dica':'Ferramenta'
    
},

{
    'nome':'BELA',
    'dica':'Mulher'
    
},

{
    'nome':'FINADOS',
    'dica':'Feriado'
    
},

{
    'nome':'CATARRO',
    'dica':'Tosse'
    
},

{
    'nome':'VALSA',
    'dica':'Dança'
    
},

{
    'nome':'BARBATANA',
    'dica':'Peixe'
    
},

{
    'nome':'APICULTOR',
    'dica':'Fazendeiro'
    
},

{
    'nome':'ALPACA',
    'dica':'Chile'
    
},

{
    'nome':'MARRECO',
    'dica':'Ave'
    
},

{
    'nome':'ESTRIBO',
    'dica':'Cavalo'
    
},

{
    'nome':'NOVELO',
    'dica':'Enrrolado'
    
},

{
    'nome':'DESFIBRILADOR',
    'dica':'1.. 2.. 3..'
    
},

{
    'nome':'JALECO',
    'dica':'Doutor'
    
},

{
    'nome':'BERGAMOTA',
    'dica':'Dedos fedidos'
    
},

{
    'nome':'ALMONDEGA',
    'dica':'Bola'
    
},

{
    'nome':'GELATINA',
    'dica':'Cartilagem'
    
},

{
    'nome':'COMBOIO',
    'dica':'Grupo'
    
},

{
    'nome':'CACHECOL',
    'dica':'Quente'
    
},

{
    'nome':'QUATORZE',
    'dica':'1.. 2.. 3..'
    
},

{
    'nome':'BANHEIRO',
    'dica':'Casa'
    
},

{
    'nome':'TRAMELA',
    'dica':'Galpão'
    
},

{
    'nome':'ALFAFA',
    'dica':'Cavalo'
    
},

{
    'nome':'UROLOGISTA',
    'dica':'Doutor'
    
},

{
    'nome':'DESPENSA',
    'dica':'Casa'
    
},

{
    'nome':'CARANGUEIJO',
    'dica':'!Peixe'
    
},

{
    'nome':'BALEIRO',
    'dica':'Vendedor'
    
},

{
    'nome':'FEIRANTE',
    'dica':'Vendedor'
    
},

{
    'nome':'MANTEIGA',
    'dica':'Leite'
    
},

{
    'nome':'PESCADOR',
    'dica':'Peixe'
    
},

{
    'nome':'COMBATENTE',
    'dica':'Soldado'
    
},

{
    'nome':'VETERANO',
    'dica':'Sodado'
    
},

{
    'nome':'ALICATE',
    'dica':'Ferramenta'
    
},

{
    'nome':'CABRESTO',
    'dica':'Cavalo'
    
},

{
    'nome':'CORPUSCHRISTI',
    'dica':'Feriado'
    
},

{
    'nome':'BICARBONATO',
    'dica':'Cozinha'
    
}

]

const imagemForca = document.querySelector('#imgforca')
const palavraForca = document.querySelector('#palavraforca')
const dicaForca = document.querySelector('#dicaforca')

const tela = document.querySelector('#tela')
const resultado = document.querySelector('#resultado')
const ganhou = document.querySelector('#ganhou')
const perdeu = document.querySelector('#perdeu')
const btreplay = document.querySelector('#btreplay')
const btrefresh = document.querySelector('#refresh')

var numErro = 0

function randomPalavra() {
    var palavraLock = palavras[Math.floor(Math.random()*palavras.length)]
    
    return palavraLock
}

const palavraBruta = randomPalavra()

const teclaLetra = document.querySelectorAll('.tecla').forEach(teclaLetra => {
    teclaLetra.addEventListener('click', () => {

        teclaLetra.setAttribute('style', 'display:none;')
        
        let letra = teclaLetra.innerText

            for (i=0; i<palavraDiv.length; i++) {
                if (palavraDiv.charAt(i) == letra) {
                    palavraArray[i] = letra
                    palavraForca.innerHTML = palavraArray.join('')
                } 
            }

    /* ================= Função ganha/perde =============== */
        if (palavraArray.includes('_') === false) {
            setTimeout(() => {
                resultado.setAttribute('style', 'display:block;')
                ganhou.setAttribute('style', 'display:block;')
                tela.setAttribute('style', 'filter: blur(2px);')
            }, 500)
        }
        
        if (palavraDiv.includes(letra) === false) {
            numErro++

            if (numErro >= 6) {
                setTimeout(() => {
                    resultado.setAttribute('style', 'display:block;')
                    perdeu.setAttribute('style', 'display:block;')
                    tela.setAttribute('style', 'filter: blur(2px);')
                }, 500)
            }
            
            switch (numErro) {
                case 0:
                    imagemForca.setAttribute('style', 'background-image: url("images/papel0.png");')
                    break;
                case 1:
                    imagemForca.setAttribute('style', 'background-image: url("images/papel1.png");')
                    break;
                case 2:
                    imagemForca.setAttribute('style', 'background-image: url("images/papel2.png");')
                    break;
                case 3:
                    imagemForca.setAttribute('style', 'background-image: url("images/papel3.png");')
                    break;
                case 4:
                    imagemForca.setAttribute('style', 'background-image: url("images/papel4.png");')
                    break;
                case 5:
                    imagemForca.setAttribute('style', 'background-image: url("images/papel5.png");')
                    break;
                case 6:
                    imagemForca.setAttribute('style', 'background-image: url("images/papel6.png");')
                    break;
            }
        }    
    })
})



const palavraDiv = palavraBruta.nome
const palavraDica = palavraBruta.dica

dicaForca.innerHTML = palavraBruta.dica

const palavraArray = []

addEventListener('load', cargar)

function cargar () {
    for(i=0;i<palavraDiv.length;i++) {
        palavraArray.push('_')
    }
    palavraForca.innerHTML = palavraArray.join('')
}

btreplay.addEventListener('click', outraPartida)
btrefresh.addEventListener('click', outraPartida)

function outraPartida() {
    window.location.reload(true)
}