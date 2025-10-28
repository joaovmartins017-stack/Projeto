function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  // troca imagem conforme o modo
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/logo-marca.jpeg")
    // salva o modo claro no localStorage
    localStorage.setItem("theme", "light")
  } else {
    img.setAttribute("src", "./assets/ju-logo-dark.png")
    // salva o modo escuro no localStorage
    localStorage.setItem("theme", "dark")
  }
}

// 🔥 ao carregar a página, verifica qual tema foi salvo
window.onload = () => {
  const savedTheme = localStorage.getItem("theme")
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (savedTheme === "light") {
    html.classList.add("light")
    img.setAttribute("src", "./assets/logo-marca.jpeg")
  } else {
    html.classList.remove("light")
    img.setAttribute("src", "./assets/ju-logo-dark.png")
  }
}
