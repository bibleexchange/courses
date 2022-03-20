import requests
import re
from os.path import exists
import json

class BibleMentions:
	def __init__(self, url, headers):
		self.set_bible_books()
		self.set_text(url, headers)
		self.set_list()

	def set_text(self,url,headers):
		id = self.make_id(url)

		if exists(id):
			self._text = open(id,'r').read()
		else:
			self._text = self.set_text_api(url, headers, id)

	def set_text_api(self, url, headers, id):
		response = requests.get(str(url), headers=headers)
		with open(id,'w') as f:
			f.write(response.text)
		return response.text

	def set_list(self):
		self._list = re.findall(r'[0-9]? ?[a-zA-z]* [0-9]*:[0-9]*[,-]?[0-9]?[0-9]?[0-9]?',self._text)

	def summary(self):
		return self._list

	def remove(self,index):
		del self._list[index]

	def add(self,val):
		self._list.append(val)

	def set_bible_books(self):
		headers = {'Authorization': 'Token M5MAR782W0zvIfExa3ZqMZlsHFj9DkIC:dU8y8snHOegqE0M9cPGoh589icKqXoYF'}
		url = 'https://bible.exchange/api/pages/642'
		id = self.make_id(url)

		if exists(id):
			self._bible_books = open(id,'r').read()
		else:
			self._bible_books = requests.get(str(url), headers=headers).text.replace("\\r\\n","").replace("\\r","").replace("\\n","").replace("  "," ").strip()
			with open(id,'w') as f:
				f.write(self._bible_books)

	def bible_books(self):
		return json.loads(self._bible_books)

	def make_id(self,url):
		return "web_data/"+(url.replace("://","-").replace("/","-").replace(".","-"))

url = 'https://bible.exchange/api/pages/600'
headers = {'Authorization': 'Token M5MAR782W0zvIfExa3ZqMZlsHFj9DkIC:dU8y8snHOegqE0M9cPGoh589icKqXoYF' }

test = BibleMentions(url, headers)
print(test.bible_books())