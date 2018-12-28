print("Christmas tree generator(window height to max)")
print("Choose Sign that you want to draw a christmas tree")
sign = input("sign: ")

widths = [2, 5, 8]

counter = 1
for i in range(3):

    for _ in range(widths[i]):
        print('{:^77}'.format(sign*counter))
        print()
        counter += 6
    counter = (i+1)*6
for i in range(4):
    print('{:^77}'.format(sign*7))
