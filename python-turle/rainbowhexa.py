import turtle

rainbow = ["red", "orange", "yellow", "green", "blue", "purple"]

# Write whatever code you want here!
terry = turtle.Turtle()
terry.width(5)
terry.penup()
terry.back(50)
terry.pendown()
for pretty_color in rainbow:
    terry.color(pretty_color)
    terry.forward(100)
    terry.right(60)
terry.hideturtle()