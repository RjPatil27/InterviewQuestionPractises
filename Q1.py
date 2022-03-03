# Interview Question:
# Given two array find an if they contain any common element
# array1 = ['a','b','c','x']
# array2 = ['z','x','y']
# find if any element of array1 exist in array2 ?


# Naive Approach
# Apply 2 for loops , so array1[i] will match with every element of array2.
# if the element from array1 exist in array2 then it will return true else false
# Code ->

def NaiveApproach(arr1,arr2):
    for i in range(len(arr1)):
        for j in range(len(arr2)):
            if arr1[i] == arr2[j]:
                return True
            pass
    return False
    pass

# After we write Naive Approach code, check if our solution is feasible and calculate time complexity
# For our solution, we have two nested for loop, so it has quadratic time complexity i.e. O(n^2)
# TimeComplexity  = O(m*n) where m=length(array1), n=length(array2)
# Think about more feasible solution.

# Approach 2
# we can use hashmap for this approach.
# for array1, we will create one hashmap which will have key as elements of array one and values as true.
# {
#     'a' : true,
#     'b' : true,
#     'c' : true,
#     'x' : true
# }
# then we have to write one more for loop which will check if value in array2 exist in hash object that we created.
def FeasibleApproach(arr1,arr2):
    map = dict()
    for i in range(len(arr1)):
        if arr1[i] not in map:
            item = arr1[i]
            map[item] = True
    print(map)

    for j in range(len(arr2)):
        if arr2[j] in map:
            return True
        pass
    return False

# TimeComplexity  = O(m + n) where m=length(array1), n=length(array2)

if __name__ == '__main__':
    
    array1 = ['a','b','c','x']
    array2 = ['z','x','y']

    print(NaiveApproach(array1,array2))
    print(FeasibleApproach(array1,array2))


