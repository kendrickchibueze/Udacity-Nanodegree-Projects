import time


def print_pause(message_to_print):
    print(message_to_print)
    time.sleep(2)


def intro():
    print_pause("You find yourself standing in an open field, filled with grass and yellow wild flowers ")
    print_pause("Rumor has it that a pirate is somewhere around here, and has been terrifying the nearby village")
    print_pause("In front of you is a house.")
    print_pause("To your right is a dark cave.")
    print_pause("In your hand, you hold a trusty (but not an effective one) dagger.")

def house():
    print_pause("You approach the door of the house.")
    print_pause("You are about to knock when the door opens and out steps a dragon ")
    print_pause("Eep!, this is the dragon house!")
    print_pause("The dragon attacks you!")
    print_pause("You feel a litle under-prepared for this, "
                "what with only having a tiny dagger ")
    fight()


def cave():
    print_pause("You peer cautiously into the cave.")
    print_pause("It turns out to be only a small cave.")
    print_pause("Your eye catches a glint of metal behind a rock")
    print_pause("You have found the magical sword of Ogoroth!")
    print_pause("You discard your silly old dagger and take the sword with you.")
    print_pause("You walk back out to the field.")
    # adventure()
    return_cave()

def return_cave():
    activity2 = input("\nEnter 1 to knock at the door of the house.\n"
                  "Enter 2 to peer into the cave.\n"
                  "what would you want to do?\n"
                  "(please enter 1 or 2)\n"
                   )
    if '1' in activity2:
          print_pause("You approach the door of the house.")
          print_pause("You are about to knock when the door opens and out a wicked fairie. ")
          print_pause("Eep!, this is a wicked fairie's house!")
          print_pause("The wicked fairie attacks you!")
          fight_again()

    elif '2' in activity2:
          print_pause("You peer cautiously into the cave.")
          print_pause("You have been here before, and gotten all the good stuff. Its just an empty cave now")
          print_pause("You walk back into the field")
          return_cave()


def fight_again():
    action2  = input("\nWould you like to (1) fight or (2) run away?")
    if '1' in action2:
       print_pause("As the wicked fairie moves to attack, you unsheath you new sword.")
       print_pause("The Sword of Ogoroth shines brightly in your hand as you brace yourself for the attack")
       print_pause("But the wicked fairie takes one look at your shiny new toy and runs away")
       print_pause("You have rid the town of the wicked fairie. You are victorious!")
       play_again()
       return_cave()
    elif '2' in action2:
         print_pause("You run back into the field. Luckily, you don't seem to have been followed ")
        #  adventure()
         fight_finally()

def fight_pirate():
    action3  = input("\nWould you like to (1) fight or (2) run away?")
    if '1' in action3:
       print_pause("As the pirate moves to attack, you unsheath you new sword.")
       print_pause("The Sword of Ogoroth shines brightly in your hand as you brace yourself for the attack")
       print_pause("But the pirate takes one look at your shiny new toy and runs away")
       print_pause("You have rid the town of the pirate. You are victorious!")
       play_again()
       return_cave()
    elif '2' in action3:
         print_pause("You run back into the field. Luckily, you don't seem to have been followed ")
        #  adventure()
         fight_finally()


def fight_finally():
    activity3  = input("\nEnter 1 to knock at the door of the house.\n"
                  "Enter 2 to peer into the cave.\n"
                  "what would you want to do?\n"
                  "(please enter 1 or 2)\n"
                   )
    if '1' in activity3:
       print_pause("You approach the door of the house.")
       print_pause("You are about to knock when the door opens and they steps out a pirate")
       print_pause("Eep!, this is the pirate's house!")
       print_pause("The pirate attacks you!")
       fight_pirate()
       return_cave()
    elif '2' in activity3:
         print_pause("You run back into the field. Luckily, you don't seem to have been followed ")
         adventure()
         fight_finally()


def fight():
    action  = input("\nWould you like to (1) fight or (2) run away?")
    if '1' in action:
       print_pause("You do your best...")
       print_pause("but your dagger is no match for the gorgon.")
       print_pause("You have been defeated!")
       play_again()
    elif '2' in action:
        print_pause("You run back into the field. Luckily, you don't seem to have been followed ")
        adventure()


def play_again():
    action_next  = input("\nWould you like to play again? (y/n) ").lower()
    if 'y' in action_next:
        print_pause("Excellent!, Restarting the game...")
        intro()
        adventure()
    elif 'n' in action_next:
        print_pause("Thanks for playing, see you next time")




def adventure():

    activity = input("\nEnter 1 to knock at the door of the house.\n"
                  "Enter 2 to peer into the cave.\n"
                  "what would you want to do?\n"
                  "(please enter 1 or 2)\n"
                   )

    if '1' in activity:
        house()
    elif '2' in activity:
        cave()





def play_game():
    intro()
    adventure()


play_game()