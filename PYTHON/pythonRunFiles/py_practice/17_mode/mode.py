def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    frequency={}

    for num in nums:
        if num in frequency:
            frequency[num]+= 1
        else:
            frequency[num] = 1
    return max(frequency, key=frequency.get)# Find the key with the maximum value in the frequency dictionary
    # This is the element with the highest count in the list
