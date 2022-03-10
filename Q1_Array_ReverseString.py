# Python Solution
#  Reverse a string
#  input= "Hello"
#  output = "olleh"

def Reverse(string):
    # input validation
    if (not string or len(string)<2 or isinstance(string,str)):
        return "Wrong Input!!"
    return string[::-1]

string1 = "Stay Healthy!!"
print(string1, " | ",Reverse(string1))
