import turtle

# Let's draw a hundred-sided polygon!
# But this way is silly ...


t = turtle.Turtle()
t.color("magenta")
t.width(5)
sides = range(100)

for side in sides:
    t.forward(5)
    t.right(360 / 100)

# Rewrite the above code to use range().
# (When you're done you should be able
# to delete the giant list!)
