
function carregar() {



    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    var dia = data.getDate()
    var mes = data.getMonth() // ele vai reproduzir 0 janeiro 1 fevreiro
    var ano = data.getFullYear()

    var diasem = data.getDay()
    

    var meses = Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
    var semanas = Array("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábadou");

    

    msg.innerHTML = `Hoje é ${semanas[diasem]} seu arrombado,  especificamente  ${dia} de ${meses[mes]} de ${ano} . São exatamente  ${hora} horas e ${minuto} minutos !`
    
    if ( hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'pexels-photo-10854224.jpeg'
        document.body.style.background = '#87CEFA'

    }

    if ( hora >= 12 && hora < 18 ) {
        //boa tarde
        img.src = 'pexels-photo-7042487.jpeg'
        document.body.style.background = '#4169E1'
    }

    if ( hora >= 18 && hora < 24 ) {
        //Boa noite
        img.src = 'pexels-photo-3125171.jpeg'
        document.body.style.background = '#1C1C1C'
    }


}
