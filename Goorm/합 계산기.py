# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
n = int(input())

sum = 0
for _ in range(0,n):
	[operand1, operator, operand2] = input().split()
	num1, num2 = int(operand1), int(operand2)
	
	if operator == '+':
	 sum += num1 + num2
	elif operator == '-':
		sum += num1 - num2
	elif operator == '/':
		sum += num1 // num2
	elif operator == '*':
		sum += num1 * num2
	else :
		print('올바르지 않은 계산식입니다.')
	
print(sum)
