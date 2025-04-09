function adicionarCafe() {
    const input = document.getElementById("inputCafe");
    const lista = document.getElementById("listaCafes");
  
    const nomeCafe = input.value.trim();
  
    if (nomeCafe !== "") {
      const itemLista = document.createElement("li");
      itemLista.textContent = nomeCafe;
  
      // Botão de remover
      const botaoRemover = document.createElement("button");
      botaoRemover.textContent = "Remover";
      botaoRemover.onclick = function () {
        lista.removeChild(itemLista);
      };
  
      itemLista.appendChild(botaoRemover);
      lista.appendChild(itemLista);
  
      input.value = "";
    }
  }
  