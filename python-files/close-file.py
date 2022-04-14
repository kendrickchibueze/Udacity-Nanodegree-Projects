my_file = open("read_me.txt")
print(my_file.read())
my_file.close()

# or
with open("read_me.txt") as my_file:
    print(my_file.read())