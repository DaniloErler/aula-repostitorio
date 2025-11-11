console.log("Testando Conexao")

let nome = document.getElementById("nome")
let assunto = document.getElementById("assunto")
let descricao = document.getElementById("descricao")
let botao = document.getElementById("botao")

console.log(nome, assunto, descricao, botao)

botao.addEventListener("click", (e)=>{
    e.preventDefault()
    // console.log("Clicou no botao")
    let mensagem = "Olá, meu nome é " + nome.value + ", gostaria de falar sobre " + assunto.value + ".\n\n" + descricao.value
    
    mensagem = encodeURIComponent(mensagem)

    let telefone = "5527999414808"
    
    let whatsapp = "https://api.whatsapp.com/send?phone=" + telefone + "&text=" + mensagem
    
    console.log(whatsapp)
    window.open(whatsapp, "_blank")
})  