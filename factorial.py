

input = input("enter the number: ")
input_converted = int(input)


def factorial(num):
    # execute this block code first
    try:
        if (num <= 1):
            return 1
        else:
            return num * (factorial(num - 1))
    # if error's occured this block code will execute
    except:
        return "there is an error"


output = factorial(input_converted)
# print some output
print(output)
