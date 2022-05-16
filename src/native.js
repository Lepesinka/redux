import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
//const asyncBtn = document.getElementById('async')
//const themeBtn = document.getElementById('theme')
let state = 0
function render(){
  counter.textContent = state.toString()
}
render()


addBtn.addEventListener('click', ()=>{  
  state++
  render() 
})
subBtn.addEventListener('click', ()=>{  
  state--
  render()  
})






