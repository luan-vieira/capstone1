//-----------LISTA DE TAREFAS----------------//


/*
1 - CRIAR LISTA DE TAREFAS DE FORMA DINAMICA - FUNÇÃO DE CRIAR ITEM
2 - ARMAZENAR OS ITENS DA LISTA - ARMAZENAR EM UM ARRAY
3 - COLOCAR OS ITENS NO CARRINHO - FUNÇÃO DE MANDAR ITENS PRO CARRINHO
4 - RETIRAR O ITEM DO CARRINHO -FUNÇÃO DE EXCLUIR ITEM DO CARRINHO
5 - FUNÇÃO QUANTIDADE DE ITENS NO CARRINHO 
6 - FUNÇÃO SOMA PREÇO DOS ITENS ADICIONADOS NO CARRINHO
*/


// FUNÇÃO CRIA O ITEM DA LISTA
// FUNÇÃO PARA ATUALIZAR CARRINHO
// FUNÇÃO DE MANDAR ITENS PRO CARRINHO
// FUNÇÃO DE EXCLUIR ITEM DO CARRINHO
// FUNÇÃO QUANTIDADE DE ITENS NO CARRINHO 
// FUNÇÃO SOMA PREÇO DOS ITENS ADICIONADOS NO CARRINHO


const data = [{
        id: 0,
        img: 'images/Men-Jacket-Front-Black__15466 1.png',
        span: `Camisetas`,
        titulo2: `Lightweight Jacket`,
        paragrafo1: `Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...`,
        paragrafo2: 100.00,
        button: `Adicionar ao carrinho`,
        quantidade: 0
    },
    {
        id: 1,
        img: 'images/image 1.png',
        span: `Camisetas`,
        titulo2: `Lightweight Jacket`,
        paragrafo1: `Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...`,
        paragrafo2: 100.00,
        button: `Adicionar ao carrinho`,
        quantidade: 0
    },
    {
        id: 2,
        img: 'images/Surgical-Mask-Black__89554 1.png',
        span: `Camisetas`,
        titulo2: `Lightweight Jacket`,
        paragrafo1: `Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...`,
        paragrafo2: 40.00,
        button: `Adicionar ao carrinho`,
        quantidade: 0
    },
    {
        id: 3,
        img: 'images/Men-TShirt-Black-Front__70046 1.png',
        span: `Camisetas`,
        titulo2: `Lightweight Jacket`,
        paragrafo1: `Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...`,
        paragrafo2: 100.00,
        button: `Adicionar ao carrinho`,
        quantidade: 0
    },
    {
        id: 4,
        img: 'images/mockup-a0dc2330__62146 1.png',
        span: `Camisetas`,
        titulo2: `Lightweight Jacket`,
        paragrafo1: `Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...`,
        paragrafo2: 100.00,
        button: `Adicionar ao carrinho`,
        quantidade: 0
    },
    {
        id: 5,
        img: 'images/mockup-9b9894f1__67347 1.png',
        span: `Camisetas`,
        titulo2: `Lightweight Jacket`,
        paragrafo1: `Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...`,
        paragrafo2: 100.00,
        button: `Adicionar ao carrinho`,
        quantidade: 0
    },

];


//----------BANCO DE DADOS DO CARRINHO ALIMENTADO AO ADICIONAR PRODUTO------------------------------

let dataBaseCarrinho = []


//----------FUNÇÃO CRIA O ITEM DA LISTA DE PRODUTOS------------------------------------------------


function createPost(arrayPosts) {

    const list = document.querySelector('.post-list');



    for (let i = 0; i < arrayPosts.length; i++) {

        const li = document.createElement('li'); //Criar li
        li.classList.add('post-item')

        const figure = document.createElement('figure')
        const img = document.createElement('img'); //Criar img
        img.src = arrayPosts[i].img;


        const span = document.createElement('span'); // Criar span
        span.innerText = arrayPosts[i].span
        span.classList.add('span')

        const titulo2 = document.createElement('h2'); // Criar titulo 2
        titulo2.innerText = arrayPosts[i].titulo2

        const paragrafo1 = document.createElement('p'); // Criar paragrafo 1
        paragrafo1.innerText = arrayPosts[i].paragrafo1
        paragrafo1.classList.add(`descricao`)

        const paragrafo2 = document.createElement('p'); // Criar paragrafo 2
        paragrafo2.innerText = `R$ ${arrayPosts[i].paragrafo2},00`
        paragrafo2.classList.add('preco')

        const button = document.createElement('button'); // Criar buttom
        button.innerHTML = arrayPosts[i].button
        button.classList.add(`classButton`)
        button.setAttribute(`key`, arrayPosts[i].id)
        button.addEventListener(`click`, function() {

            // pegando o valor da key do elemento clicado
            let key = this.getAttribute(`key`);
            console.log(key)

            // filtrar o array do elemento clicado elemento clicado 
            const response = data.filter((valor) => { return valor.id == key })


            // puxando o elemento clicado pra dentro de um array(global) que representa o carrinho            
            dataBaseCarrinho.push(response[0])
            console.log(dataBaseCarrinho)

            // preço total
            const soma = dataBaseCarrinho.reduce((previus, current) => previus + current.paragrafo2, 0)
            console.log(soma)

            // quantidade itens
            const tamanho = dataBaseCarrinho.length
            console.log(tamanho)


            // chamando a função que cria os itens do carrinho
            createCarrinhoPost(data[key])

            // escondendo informações de "carrinho vazio" e "adicione itens" quando tem produtos no carrinho
            let esconder = document.querySelectorAll(`.esconder`)
            esconder[0].style.display = `none`
            esconder[1].style.display = `none`

            // chamando função que cria caixa(preta) do total e da quantidade de produtos
            criaBoxPreta()
        })


        figure.appendChild(img);
        li.appendChild(figure);
        li.appendChild(span);
        li.appendChild(titulo2);
        li.appendChild(paragrafo1);
        li.appendChild(paragrafo2);
        li.appendChild(button);
        list.appendChild(li);
    }
}

createPost(data)


//----------FUNÇÃO CRIA ITENS CARRINHO-------------------------------------------------------------


function createCarrinhoPost(parametroItensCarrinho) {

    let remove = `Remover produto`



    const containerCarrinho = document.querySelector('.carrinho');

    // criar div do carrinho
    const div = document.createElement('div');
    div.classList.add('divCarrinho')

    // criar "caixa" da imagem
    const figure = document.createElement('figure')
    const img = document.createElement('img'); //Criar img
    img.src = parametroItensCarrinho.img;
    img.classList.add('imagemCarrinho')

    // Criar "caixa" do titulo preço e bottão do item do carrinho
    const detalhes = document.createElement('div')
    detalhes.classList.add(`classDivItensCarrinho`)

    // Criar titulo 2 (do produto no carrinho)
    const titulo2 = document.createElement('h2');
    titulo2.innerText = parametroItensCarrinho.titulo2

    // Criar paragrafo 2 (preço do produto no carinho)
    const paragrafo2 = document.createElement('p');
    paragrafo2.innerText = `R$ ${parametroItensCarrinho.paragrafo2},00`
    paragrafo2.classList.add('precoCarrinho')


    //botão de remover produtos do carrinho
    const removeProduto = document.createElement('button');
    removeProduto.innerText = remove // variavel declarada 
    removeProduto.classList.add(`botaoRemove`)
    removeProduto.setAttribute(`key`, parametroItensCarrinho.id)

    // evento de clique do botão de REMOVER 
    removeProduto.addEventListener(`click`, function() {

        // remover div dos produtos adicionados no carrinho
        div.remove()

        // retornando com as informações de "carrinho vazio" e "adicione itens" quando não tem produtos no carrinho
        let quantidadeItens = document.getElementsByClassName('divCarrinho')

        if (quantidadeItens.length === 0) {
            let esconder = document.querySelectorAll(`.esconder`)
            console.log(esconder)
            esconder[0].style.display = `flex`
            esconder[1].style.display = `flex`
        }
        //------------------------------------------------------------------------

        // pegando o valor da key e colocando em uma variavel para comparação com id
        let key = this.getAttribute(`key`);


        // filtrar o array do elemento clicado 
        const responseRetira = data.filter((valor) => { return valor.id == key })
        console.log(responseRetira)

        //achando posição do elemento retirado no array "dataBaseCarrinho"
        let posicaoElementoRetirado = dataBaseCarrinho.indexOf(responseRetira[0])
        console.log(posicaoElementoRetirado)


        // excluindo o elemento clicado de dentro do array(global) que representa o carrinho            
        dataBaseCarrinho.splice(posicaoElementoRetirado, 1, )
        console.log(dataBaseCarrinho)

        // preço total atualizado
        const somaAtualizada = dataBaseCarrinho.reduce((previus, current) => previus + current.paragrafo2, 0)
        console.log(somaAtualizada)

        // quantidade itens atualizado
        const tamanhoAtualizado = dataBaseCarrinho.length
        console.log(tamanhoAtualizado)

        // chamando função que cria caixa(preta) do total e da quantidade de produtos
        criaBoxPreta()


        // removendo a caixa das informações de quantidade/preço quando algum item é retirado
        let pegaCaixaPeloId = document.getElementById(`${dataBaseCarrinho.length + 1}`)
        if (pegaCaixaPeloId) {
            pegaCaixaPeloId.remove()
        }

        // removendo a caixa das informações de quantidade/preço quando carrinho estiver vazio
        const caixaPretaVazia = document.querySelector('.classCaixaPreta');
        let meuId = caixaPretaVazia.id

        if (meuId == 0) {
            caixaPretaVazia.remove()
        }


    })


    div.appendChild(img);
    div.appendChild(detalhes)
    containerCarrinho.appendChild(figure);
    detalhes.appendChild(titulo2)
    detalhes.appendChild(paragrafo2)
    detalhes.appendChild(removeProduto)
    containerCarrinho.appendChild(div)

}




//----------FUNÇÃO CRIA TEXTO DO CARRINHO ENQUANTO VAZIO-------------------------------------------------


const dataCarrinhoVazio = [{

    titulo3: `Carrinho Vazio`,
    span: `Adicione itens`

}]

function createCarrinho(arrayCarrinho) {

    // setando aside pela class
    const aside = document.querySelector('.aside');



    for (let i = 0; i < dataCarrinhoVazio.length; i++) {

        const div = document.createElement('div'); //Criar div (caixa carrinho vazio)
        div.classList.add('carrinho')

        const titulo3 = document.createElement('h3'); // Criar titulo 3 (texto "carrinho vazio")
        titulo3.innerText = arrayCarrinho[i].titulo3
        titulo3.classList.add('esconder')

        const span = document.createElement('span'); // Criar span (texto "adicione itens")
        span.innerText = arrayCarrinho[i].span
        span.classList.add('esconder')

        div.appendChild(titulo3);
        div.appendChild(span);
        aside.appendChild(div);
    }
}

createCarrinho(dataCarrinhoVazio)






//------ FUNÇÃO CRIA CAIXA COM INFORMAÇÕES DE QUANTIDADE/VALOR TOTAL-------------------------



function criaBoxPreta() {


    const containerQuantidade = document.querySelector('.aside');

    //  criando caixa preta com informações quantidade/total
    const divPai = document.createElement('div');
    divPai.classList.add('classCaixaPreta')
    divPai.id = `${dataBaseCarrinho.length}`

    const divQuantidade = document.createElement(`div`)
    divPai.appendChild(divQuantidade)
    divQuantidade.classList.add('caixaQuantidade')


    const divTotal = document.createElement(`div`)
    divPai.appendChild(divTotal)
    divTotal.classList.add('caixaTotal')


    // criando spans da quantitade 
    const spanTextQuant = document.createElement(`span`) // texto
    spanTextQuant.innerText = `Quantidade:`
    spanTextQuant.classList.add('classTexto')

    const spanValorQuant = document.createElement(`span`) // valor quantidade
    spanValorQuant.innerText = `${dataBaseCarrinho.length}`
    spanValorQuant.classList.add('classValor')

    // criando spans do total
    const spanTextTotal = document.createElement(`span`) //texto
    spanTextTotal.innerText = `Total:`
    spanTextTotal.classList.add('classTexto')

    const spanValorTotal = document.createElement(`span`) // valor preço
    const soma = dataBaseCarrinho.reduce((previus, current) => previus + current.paragrafo2, 0)
    spanValorTotal.innerText = `R$ ${soma},00`
    spanValorTotal.classList.add('classValor')



    containerQuantidade.appendChild(divPai)
    divPai.appendChild(divQuantidade)
    divPai.appendChild(divTotal)
    divQuantidade.appendChild(spanTextQuant)
    divQuantidade.appendChild(spanValorQuant)
    divTotal.appendChild(spanTextTotal)
    divTotal.appendChild(spanValorTotal)


    var pegaCaixaPeloId = document.getElementById(`${dataBaseCarrinho.length - 1}`)
    if (pegaCaixaPeloId) {
        pegaCaixaPeloId.remove()
    }






}