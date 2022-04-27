def replace_substring(string, substring, replacement):
    output = []
    index = 0
    while index < len(string):
        if string[index:index+len(substring)] == substring:
            output.append(replacement)
            #we skip all the substring we found
            index += len(substring)
        else:
            output.append(string[index])
            index += 1
    return "".join(output)