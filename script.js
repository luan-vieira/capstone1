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
        paragrafo2: 100.00,
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


//----------VARIÁVEIS DE CONTROLE-----------------------------------------------------------------

let dataBaseCarrinho = []
let auxiDivTotal = false


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

            let key = this.getAttribute(`key`);

            const response = data.filter((valor) => { return valor.id == key })

            dataBaseCarrinho.push(response[0])

            console.log(dataBaseCarrinho)

            // preço total
            const soma = dataBaseCarrinho.reduce((previus, current) => previus + current.paragrafo2, 0)

            // quantidade itens
            const tamanho = dataBaseCarrinho.length

            console.log(tamanho)
            console.log(soma)

            createCarrinhoPost(data[key])

            divTotal()
            let esconder = document.querySelectorAll(`.esconder`)
            esconder[0].style.display = `none`
            esconder[1].style.display = `none`
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


//----------------------------------CRIANDO CARRINHO VAZIO-------------------------------------------------//

const itens = [{
    button: `Adicionar ao carrinho`,
    titulo3: `Carrinho Vazio`,
    span: `Adicione itens`


}]

function createCarrinho(arrayCarrinho) {

    // SETANDO O ASIDE PELA CLASS
    const aside = document.querySelector('.aside');
    // PERCORRENDO PARAMETRO CRIANDO MEU ITENS DA LISTA E ADD PELA CLASS

    for (let i = 0; i < itens.length; i++) {
        const div = document.createElement('div'); //Criar div
        div.classList.add('carrinho')

        const titulo3 = document.createElement('h3'); // Criar titulo 3
        titulo3.innerText = arrayCarrinho[i].titulo3
        titulo3.classList.add('esconder')

        const span = document.createElement('span'); // Criar span
        span.innerText = arrayCarrinho[i].span
        span.classList.add('esconder')




        div.appendChild(titulo3);
        div.appendChild(span);
        aside.appendChild(div);
    }



}
createCarrinho(itens)



//--------------------------FUNÇÃO CRIA ITENS CARRINHO------------------------------


function createCarrinhoPost(dataBase) {

    const containerCarrinho = document.querySelector('.carrinho');
    // PERCORRENDO PARAMETRO CRIANDO MEU ITENS DA LISTA E ADD PELA CLASS

    const div = document.createElement('div'); //Criar li
    div.classList.add('divCarrinho')

    const figure = document.createElement('figure')
    const img = document.createElement('img'); //Criar img
    img.src = dataBase.img;
    img.classList.add('imagemCarrinho')

    const detalhes = document.createElement('div')

    const titulo2 = document.createElement('h2'); // Criar titulo 2
    titulo2.innerText = dataBase.titulo2

    const paragrafo2 = document.createElement('p'); // Criar paragrafo 2
    paragrafo2.innerText = `R$ ${dataBase.paragrafo2},00`
    paragrafo2.classList.add('precoCarrinho')


    //----------BOTÃO DE REMOVER PRODUTOS DO CARRINHO--------------------------

    let remove = `Remover produto`
    const removeProduto = document.createElement('button');
    removeProduto.innerText = remove
    removeProduto.classList.add(`botaoRemove`)
    removeProduto.setAttribute(`key`, dataBase.id)


    //-------------BOTÃO DE REMOVER ITEM-----------------------------------

    removeProduto.addEventListener(`click`, function() {




        let key = this.getAttribute(`key`);


        // console.log(dataBaseCarrinho)
        let novoArray = []

        let removeItem = dataBaseCarrinho.find((valor) => {

                console.log(valor.id, key)

                if (valor.id == key) {
                    let indice = dataBaseCarrinho.indexOf(valor)
                    console.log(indice)
                    for (let i = 0; i < dataBaseCarrinho.length; i++) {
                        if (i !== indice) {

                            novoArray.push(dataBaseCarrinho[i])
                        }

                    }

                }
                console.log(novoArray)
            })
            // console.log(novoArray)
        dataBaseCarrinho = novoArray
        novoArray = []
            // console.log(removeItem)

        console.log(dataBaseCarrinho)
        divTotal()

        div.remove()
        figure.remove()


        // RETIRAR ITEM DO ARRAY



        // VOLTAR COM O "CARRINHO VAZIO"

        let quantidadeItens = document.getElementsByClassName('divCarrinho')

        if (quantidadeItens.length === 0) {
            let esconder = document.querySelectorAll(`.esconder`)
            esconder[0].style.display = `flex`
            esconder[1].style.display = `flex`
        }

        //subtrai
        const subtrai = dataBaseCarrinho.reduce((previus, current) => previus + current.paragrafo2, 0)
        console.log(subtrai)
            // quantidade itens
        const tamanho2 = dataBaseCarrinho.length
        console.log(tamanho2)



    })



    div.appendChild(img);
    div.appendChild(detalhes)
    containerCarrinho.appendChild(figure);
    detalhes.appendChild(titulo2)
    detalhes.appendChild(paragrafo2)
    detalhes.appendChild(removeProduto)
    containerCarrinho.appendChild(div)



}



//------ FUNÇÃO CRIA DIV QUANTIDADE TOTAL-------------------------



function divTotal() {


    if (dataBaseCarrinho.length > 0 && auxiDivTotal === false) {
        const containerQuantidade = document.querySelector('.aside');
        const div1 = document.createElement('div');
        div1.classList.add('classTeste')
        const div2 = document.createElement('div');
        div2.classList.add('classTeste')

        const spanTextQuant = document.createElement(`span`)
        spanTextQuant.innerText = `Quantidade:`
        spanTextQuant.classList.add('classTextoQuant')
        const spanTextTotal = document.createElement(`span`)
        spanTextTotal.innerText = `Total:`
        spanTextTotal.classList.add('classTextoQuant')

        const spanQuant = document.createElement(`span`)
        spanQuant.innerText = `Quantidade:`
        spanQuant.classList.add('classQuant')
        const spanTotal = document.createElement(`span`)
        spanTotal.innerText = `Total:`
        spanTotal.classList.add('classQuant')



        containerQuantidade.appendChild(div1)
        containerQuantidade.appendChild(div2)
        div1.appendChild(spanTextQuant)
        div2.appendChild(spanTextTotal)
        div1.appendChild(spanQuant)
        div2.appendChild(spanTotal)

        auxiDivTotal = true

    } else if (dataBaseCarrinho.length === 0) {
        let div1 = document.getElementsByClassName('classTeste')
        console.log(div1)
        auxiDivTotal = false

        div1[0].remove()
        div1[0].remove()

    }

}