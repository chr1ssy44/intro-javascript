let aquarium = document.getElementById("aquarium")

let turtle = new RealTurtle.default(aquarium, {autoStart: true})
turtle.setSpeed(0.9)
turtle.setStrokeColorRGB(255 , 0, 0)


turtle.setFillStyle('skyblue')
turtle.setPosition(0, 0)
turtle.beginPath()
for (let i = 0; i < 4; i++){
    turtle.right(90)
    turtle.forward(300)
}


turtle.closePath()
turtle.fill()



turtle.setFillStyle('pink')
turtle.setPosition(150,150)


turtle.beginPath()
turtle.forward(90)
turtle.right(90)
turtle.forward(50)
turtle.forward(20)
turtle.right(90)
turtle.forward(90)
turtle.right(90)
turtle.forward(70)


turtle.closePath()
turtle.fill()

turtle.setFillStyle('brown')
turtle.setPosition(150,60)

turtle.beginPath()
turtle.right(120)
turtle.forward(70)
turtle.right(120)
turtle.forward(70)
turtle.right(120)

turtle.closePath()
turtle.fill()

turtle.setPosition(180,80)
turtle.forward(20)
turtle.left(90)
turtle.forward(20)
turtle.left(90)
turtle.forward(20)
turtle.left(90)
turtle.forward(20)
turtle.right(90)


turtle.setPosition(195,80)
turtle.forward(20)
turtle.right(90)
turtle.forward(20)
turtle.right(90)
turtle.forward(20)
turtle.right(90)
turtle.forward(20)
turtle.right(90)
turtle.right(90)

turtle.setPosition(180,115)
turtle.left(90)
turtle.forward(20)
turtle.right(90)
turtle.forward(40)
turtle.right(90)
turtle.forward(20)
turtle.right(90)
turtle.forward(40)

turtle.setFillStyle('yellow')
turtle.setPosition(20,20)
turtle.beginPath()
turtle.arc(20,360)

turtle.closePath()
turtle.fill()

turtle.setPosition(180,160)


