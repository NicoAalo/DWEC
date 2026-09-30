// Ejercicio 2.1: Creando tu primera lista de reproducción

const playlist = [
  { titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 355 },
  { titulo: "Blinding Lights", artista: "The Weeknd", duracion: 200 },
  { titulo: "Shape of You", artista: "Ed Sheeran", duracion: 234 },
  { titulo: "Smells Like Teen Spirit", artista: "Nirvana", duracion: 301 },
  { titulo: "Billie Jean", artista: "Michael Jackson", duracion: 294 },
  { titulo: "Levitating", artista: "Dua Lipa", duracion: 203 },
  { titulo: "Hey Ya!", artista: "OutKast", duracion: 235 },
  { titulo: "Someone Like You", artista: "Adele", duracion: 285 },
  { titulo: "Yesterday", artista: "The Beatles", duracion: 125 },
  { titulo: "Don't Stop Me Now", artista: "Queen", duracion: 209 },
  { titulo: "Lose Yourself", artista: "Eminem", duracion: 326 },
  { titulo: "Bad Guy", artista: "Billie Eilish", duracion: 194 }
];

console.log("=== Ejercicio 2.1: Playlist ===");
playlist.forEach((cancion) => {
  console.log(`${cancion.titulo} - ${cancion.artista}`);
});
