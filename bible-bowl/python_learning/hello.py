import re

f = open("test.html","r")
text = f.read()

mentions = re.findall(r'[0-9]? ?[a-zA-z]* [0-9]*:[0-9]*[,-]?[0-9]?[0-9]?[0-9]?',text)

for ment in mentions:
	print(ment)