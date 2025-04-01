document. addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = Document.getElementById('aumentar-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
    
})