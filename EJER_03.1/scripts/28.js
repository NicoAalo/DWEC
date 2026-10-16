const categorias = Array.from(document.querySelectorAll('.categoria')) .map((p) => p.textContent.trim()); 
console.log(categorias);