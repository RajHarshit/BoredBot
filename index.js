const h1 = document.getElementById("h-1")
const p = document.getElementById("p")
const btn = document.getElementById("btn")

btn.addEventListener("click" ,function(){
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json()) 
    .then(data => {
      p.textContent = data.activity
      h1.textContent = "🦾 HappyBot🦿"
      document.querySelector("main").classList.add("fun")
      btn.style.borderColor = "lightgreen "
    })
})
