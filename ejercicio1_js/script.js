document.getElementById("form-estudiante").addEventListener("submit", function(event) {
    event.preventDefault();

    const codigo = document.getElementById("codigo").value;
    const nombre = document.getElementById("nombre").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    if (
        isNaN(nota1) || nota1 < 0 || nota1 > 5 ||
        isNaN(nota2) || nota2 < 0 || nota2 > 5 ||
        isNaN(nota3) || nota3 < 0 || nota3 > 5 ||
        isNaN(nota4) || nota4 < 0 || nota4 > 5
    ) {
        alert("Las notas deben estar entre 0.0 y 5.0");
        return;
    }
    const definitiva = (nota1 * 0.2) + (nota2 * 0.2) + (nota3 * 0.2) + (nota4 * 0.4);

    const table = document.getElementById("tabla-estudiantes").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = codigo;
    newRow.insertCell(1).textContent = nombre;
    newRow.insertCell(2).textContent = nota1.toFixed(1);
    newRow.insertCell(3).textContent = nota2.toFixed(1);
    newRow.insertCell(4).textContent = nota3.toFixed(1);
    newRow.insertCell(5).textContent = nota4.toFixed(1);
    newRow.insertCell(6).textContent = definitiva.toFixed(1);


    document.getElementById("form-estudiante").reset();
});


    

