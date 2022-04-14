import requests

try :
    r = requests.get('http://www.udacity.com')
    print(r.status_code)
except requests.exceptions.ConnectionError:
    print("Connection error")