import requests

url = "http://127.0.0.1:8000/api/items/"  
response = requests.get(url)

print("Status:", response.status_code)
print("Data:", response.json())

