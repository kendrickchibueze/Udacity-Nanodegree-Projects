import time

n = 10
while n > 0:
    print(n, flush=True)
    time.sleep(1)
    n -= 1
print("Blastoff!", flush=True)


# This works because
# s = "abracadabra"
# index = len(s)
# while index > 0:
#     print(s[:index])
#     index -= 1