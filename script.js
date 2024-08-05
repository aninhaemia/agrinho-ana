document.getElementById('calcularTempo').addEventListener('click', function() {
    var areaMilho = parseFloat(document.getElementById('areaMilho').value);

    if (!isNaN(areaMilho)) {
        // Supondo que 1 hectare de milho demora 30 minutos para ser irrigado
        var tempoTotalMinutos = areaMilho * 30;
        var horas = Math.floor(tempoTotalMinutos / 60);
        var minutos = tempoTotalMinutos % 60;

        var resultado = document.getElementById('resultado');
        resultado.innerHTML = `<p>Para irrigar uma roça de ${areaMilho} hectares de milho, são necessários aproximadamente ${horas} horas e ${minutos} minutos.</p>`;
    } else {
        alert('Por favor, insira um número válido para a área da roça de milho.');
    }
});
