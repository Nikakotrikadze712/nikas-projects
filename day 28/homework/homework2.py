num = int (input ("Enter any number 1 to 10: ")) 

while num >= 10:
    print("error")
    num = int (input ("enter any number 1 to 10: "))

while (num % 2) != 0:
    print ("The number is not even")
    num = int (input ("Enter any number 1 to 10: "))
    
else:
    print ("The provided number is even")