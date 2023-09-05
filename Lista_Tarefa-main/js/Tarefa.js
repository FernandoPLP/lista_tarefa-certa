const botao = document.querySelector("#btnAddTarefa");
const table = document.querySelector("table");
const botaoOrdenar = document.querySelector("#btnOrdenar")

botao.addEventListener("click", (evt) => {
    evt.preventDefault();

    // capturando os input
    const inputTarefa = document.getElementById("id-tarefa");
    const inputDesc = document.getElementById("id-desc");
    const inputAutor = document.getElementById("id-autor");
    const inputDep = document.getElementById("id-dep");
    const inputImportPouco = document.getElementById("id-import1");
    const inputImportMedio = document.getElementById("id-import2");
    const inputImportAlto = document.getElementById("id-import3");

    // criando a base da tabela
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");

    // adicionando os valores do input na tabela
    td1.textContent = inputTarefa.value;
    td2.textContent = inputDesc.value;
    td3.textContent = inputAutor.value;
    td4.textContent = inputDep.value


    if (inputImportAlto.checked) {
        td5.textContent = "Alta";
    } else if (inputImportMedio.checked) {
        td5.textContent = "Média";
    } else if (inputImportPouco.checked) {
        td5.textContent = "Pouca";
    } else {
        td5.textContent = "N/A";
    }

    // botão excluir
    let botaoDeExcluir = document.createElement("button")
    botaoDeExcluir.textContent = " x "
    botaoDeExcluir.classList.add("btnEx")
    
    td6.appendChild(botaoDeExcluir)

    // adicionando na tabela
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6)

    // add na table
    table.appendChild(tr);


    // função do botao excluir
    botaoDeExcluir.addEventListener("click", (evt)=>{
        evt.preventDefault();

        tr.remove()
    })
    
    // função do boato ordenar
    botaoOrdenar.addEventListener("click", (evt) => {
        evt.preventDefault();
    
        const listaemArray = Array.from(table.querySelectorAll("tr:not(:first-child)"));
    
        listaemArray.sort((a, b) => {
            console.log(a,b)
            const importancia1 = a.cells[4].textContent;
            const importancia2 = b.cells[4].textContent;
    
            const importanciaOrdem = {
                "Pouca": 1,
                "Média": 2,
                "Alta": 3,
                "N/A": 0
            };
    
            return importanciaOrdem[importancia2] - importanciaOrdem[importancia1];
        });
        
        listaemArray.forEach(item => table.removeChild(item));
        
        listaemArray.forEach(item => table.appendChild(item));
    });

    inputTarefa.value = "";
    inputDesc.value = "";
    inputAutor.value = "";
    inputDep.value = "";
    inputImportPouco.checked = false;
    inputImportMedio.checked = false;
    inputImportAlto.checked = false;

});