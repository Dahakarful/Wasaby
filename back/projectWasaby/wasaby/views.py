import json
import elasticsearch

#url = "http://localhost:9200/buyos/product/1";
url = 'http://localhost:9200/index/buoys'
indexName = 'index'
typeName = 'buoys'
jsonPath = 'C:/Users/Ragonda/gitHub/Wasaby/front/resources'

es = elasticsearch.Elasticsearch()

def indexBuoys():
    nodes = json.load(open(jsonPath))
    print(len(nodes))
    for k, v in nodes.items():
        id = k
        res = es.index(index=indexName, doc_type=typeName, id=id, body=v)

def searchABuyo():
    r = requests.get(url)
    print(r.status_code, r.content)
    # string = request.GET['name']
    # return HttpResponse(string)