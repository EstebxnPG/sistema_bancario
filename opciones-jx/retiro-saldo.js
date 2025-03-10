let saldoActual = 100000;

function actualizarSaldo() {
    alert("Función de actualización de saldo en desarrollo.");
}

function retirarSaldo() {
    let monto = parseInt(document.getElementById("monto").value);
    if (isNaN(monto) || monto <= 0) {
        alert("Ingrese un monto válido.");
        return;
    }
    if (monto > saldoActual) {
        alert("Saldo insuficiente.");
        return;
    }
    saldoActual -= monto;
    document.getElementById("saldo").textContent = "$" + saldoActual.toLocaleString();
    alert("Retiro exitoso: $" + monto.toLocaleString());
}
