# from urllib import request
from requests import request
from django.http import HttpResponse
import requests

url = "http://localhost:9200/buyos/product/1";

def searchABuyo():
    r = requests.get(url)
    print(r.status_code, r.content)
    # string = request.GET['name']
    # return HttpResponse(string)

searchABuyo()