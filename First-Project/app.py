def main():
    height = get_height()
    for i in range(height):
        for j in range(height):
            if i + j >= height - 1:
                print("#", end="")
            else:
                print(" ", end="")
        print()
    for i in range(height):
        for j in range(i):
            print("#", end="")
        for k in range(1):
            print("#", end="")
        print()


def get_height():
    while True:
        try:
            h = int(input("Height: "))
            if 0 < h < 9:
                break
        except ValueError:
            print("That's not an integer!")
    return h


main()


class House:
    """
    Protecting the house itself
    """
    def __init__(self, street, number):
        """
        :param street:
        :param number:
        """

        self.street = street
        self.number = number
        self.age = 0

    def build(self):
        """
        building the house
        :return:
        """
        print("House " + self.street + " on the street " + str(self.street) + " built")
        """
        some copies 
        """
    def age_of_the_house(self, year):
        """
        house age
        :return:
        """
        self.age += year


class Avenue(House):
    """
    avenue houses
    """
    def __init__(self, avenue, number):
        super().__init__(self, number)
        self.avenue = avenue


New = Avenue("St. Martin", 5)


import math
print("before function_a")


def function_a():
    print("Function A")


print("before function_b")


def function_b():
    print("Function B {}".format(math.sqrt(100)))


print("before __name__ guard")


if __name__ == '__main__':
    function_a()
    function_b()


print("after __name__ guard")
command = ""
started = False
stopped = False
while True:
    command = input('>').lower()
    if command == 'start':
        if started:
            print('Car has already started...')
        else:
            started = True
            print('Car started...')
    elif command == 'stop':
        if stopped:
            print('Car has already stopped.')
        else:
            stopped = True
            print('Car stopped.')
    elif command == 'help':
        print("""
start - to start the car
stop - to stop the car
quit - to exit   
        """)
    elif command == 'quit':
        break
    else:
        print("Sorry I don't understand that...")

weight = int(input('Weight: '))
definition = (input("(L)bs or (K)g: "))
if definition == 'L' or definition == 'l':
    kilos = weight * 0.45
    print(f"You are {kilos} kilos")
elif definition == 'K' or definition == 'k':
    pounds = weight / 0.45
    print(f"You are {pounds} pounds")
else:
    print("Mistake")

nums = [x for x in range(100)]

pizzas = {"bacon": 9, "pepperoni": 10, "chicken": 12}
for pie, price in pizzas.items():
    print(price)


def square(x):
    return x ** 2


class Student:

    def __init__(self, name, id):
        self.name = name
        self.id = id

    def change_id(self, id):
        self.id = id

    def print(self):
        print(f"{self.name} - {self.id}")