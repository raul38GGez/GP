
const ipPython  = "http://192.168.1.130:5000"
const ipPython2 = "http://192.168.1.130:5000"

// ESSA PÁGINA É ONDE FICA SALVA A VARIÁVEL RESPONSÁVEL POR
// ARMAZENAR O URL DO IP DO SERVIDOR

// a
function formatarData(dataISO) {
    if (!dataISO) return ""; // Evita erro se a data estiver vazia

    let data = new Date(dataISO);
    let dia = data.getDate().toString().padStart(2, "0");
    let mes = (data.getMonth() + 1).toString().padStart(2, "0");
    let ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}
