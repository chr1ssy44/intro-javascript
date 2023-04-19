let aquarium = document.getElementById("aquarium")

let turtle = new RealTurtle.default(aquarium, {autoStart: true})

turtle.setStrokeColorRGB(255 , 0, 0)
turtle.setFillStyle('red')

turtle.beginPath()




turtle.closePath()
turtle.fill()

turtle.setPosition(150,150)



turtle.forward(90)
turtle.right(90)
turtle.forward(50)
turtle.forward(20)
turtle.right(90)
turtle.forward(90)
turtle.right(90)
turtle.forward(70)


turtle.beginPath()
turtle.setPosition(150,90)
turtle.right(90)
turtle.forward(40)
turtle.right(90)
turtle.forward(20)



turtle.closePath()

for(let i = 0; i < 4; i++){
    turtle.forward()
    turtle.right()
}

