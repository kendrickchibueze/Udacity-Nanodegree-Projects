with open("new_file.txt", "w") as new_file: # Create and open new file
    new_file.write("New content!") # Write to the file

with open("new_file.txt", "r") as new_file :# Open the file again, this time in read mode
    contents = new_file.read()

print(contents)


# with open("old_file.txt") as old_file:
#     with open("new_file.txt", "w") as new_file:
#         new_file.write(old_file.read())

# with open("new_file.txt") as new_file:
#     print(new_file.read())