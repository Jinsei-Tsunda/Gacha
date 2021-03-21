const GachaText = document.getElementById('GachaText')

function Gacha(){
  let a = Math.random()

  if (a <= 0.02) {
    GachaText.innerHTML = '<p class="text">UR!!!</p>'
  } else if (0.02 < a <= 0.2) {
    GachaText.innerHTML = '<p class="text">SR!!</p>'
  } else {
    GachaText.innerHTML = '<p class="text">R!</p>'
  }

  console.log(a)
}