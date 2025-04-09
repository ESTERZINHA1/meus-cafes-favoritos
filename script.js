function adicionarCafe() {
    const input = document.getElementById("inputCafe");
    const nomeCafe = input.value.trim();
  
    if (nomeCafe !== "") {
      const lista = document.getElementById("listaCafes");
      const item = document.createElement("li");
      item.textContent = nomeCafe;
      lista.appendChild(item);
      input.value = "";
    }
  }
  