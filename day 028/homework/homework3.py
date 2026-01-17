age = int (input ("enter your age: "))

if age < 5:
    print("error")
    age = int (input ("enter your age: "))

elif age >= 5 <= 12:
    print ("you are child")
    age = int (input ("enter your age: "))

elif age > 12 < 18:
    print("you are teenager")
    age = int (input ("enter your age: "))
    
elif age > 18:
    print("you are adult")
    age = int (input ("enter your age: "))