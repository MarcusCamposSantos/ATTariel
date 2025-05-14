function buscarImagem() {
    const codigo = document.getElementById('Numero').value.trim();
    const resultado = document.getElementById('resultado');
  
    if (!codigo.match(/^\d+$/)) {
      resultado.innerHTML = "<p>Digite um código HTTP válido.</p>";
      return;
    }
  
    const url = `https://http.dog/${codigo}.jpg`;
  
    const img = new Image();
    img.onload = () => {
      resultado.innerHTML = `<img src="${url}" alt="HTTP Dog ${codigo}" style="width: 100%; border-radius: 10px;">`;
    };
    img.onerror = () => {
      resultado.innerHTML = "<p>Imagem não encontrada.</p>";
    };
    img.src = url;
  }