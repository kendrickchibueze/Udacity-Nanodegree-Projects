class Dog:

    scientific_name = "Canis lupus familiaris"

    def __init__(self, name):
        self.name = name

    def speak(self):
        print("Woof!")

    def eat(self, food):
        if food == "biscuit":
            print("Yummy!")
        else:
            print("That's not food!")

    def hear(self, words):
        if self.name in words:
            self.speak()


class Husky(Dog):
    origin = "Husky can do valiantly"

    def speak(self):
        print("Barking")


class Chihuahua(Dog):
    origin = "Chihuahua can eat alot"

    def speak(self):
        print("eateeeeee!")

class Labrador(Dog):
    origin = "Labrador can eat run"

    def speak(self):
        print("Ruooouuuu!")