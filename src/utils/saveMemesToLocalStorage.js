export default function saveMemesToLocalStorage(memes) {
  localStorage.setItem("savedMemes", JSON.stringify(memes));
}
