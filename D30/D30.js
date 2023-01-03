let alphabet = ['s', 'w', 'g'];
let random_alfa = alphabet[Math.floor(Math.random() * alphabet.length)]

alert ("Choose one out of s,w,g as s= snake ,w=water,g=gun")

user = prompt("Enter 's' 'w' or 'g'").toLowerCase()
  if (user == 'g' && random_alfa == 's') {

    alert(`Enemy Guess ${random_alfa}\nYou Won `)}

    else if (user == 'w' && random_alfa == 'g')
    {
        alert(`Enemy Guess ${random_alfa}\nYou Won `)
    }

    else if (user == 's' && random_alfa == 'w')
    
    {
        alert(`Enemy Guess ${random_alfa}\nYou Won `)


    }

    else if (user ==  random_alfa ){
        alert(`match drew`)


    }

    else {
        alert("you loose")
    }