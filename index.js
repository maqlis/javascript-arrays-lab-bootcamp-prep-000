const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  kittens = [name, ...kittens]
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(name){
  var newKittens = [...kittens, name]
  return newKittens
}
