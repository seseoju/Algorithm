def solution(numbers):
#     dict = {
#         'zero': '0',
#         'one': '1',
#         'two': '2',
#         'three': '3',
#         'four': '4',
#         'five': '5',
#         'six': '6',
#         'seven': '7',
#         'eight': '8',
#         'nine': '9'
#     }
    
#     for key in dict:
#         numbers = numbers.replace(key, dict[key])
#     return int(numbers)
    for i, eng in enumerate(['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']):
        numbers = numbers.replace(eng, str(i))
    return int(numbers)
        