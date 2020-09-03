import scrapy
import re,os,uuid
from Util.util import get_current_week
from urllib import request
import urllib.parse
from urllib.parse import urlparse
from menuSpider.settings import root_path
class CnkiSpider(scrapy.Spider):
    name = 'menuSpider'
    start_urls = [ "https://www.baidu.com"]
    # allowed_domains=['']
    path=""
    def parse(self, response):
        t = get_current_week()
        url = "https://weixin.sogou.com/weixin?type=2&s_from=input&query={keyword}&ie=utf8&_sug_=n&_sug_type_=&w=01019900&sut=2055&sst0=1598877104445&lkt=0%2C0%2C0"
        urls = [
            url.format(keyword="张江食堂菜单 " + t),
            # url.format(keyword="上银食堂菜单 " + t)
        ]
        for link in urls:
            yield scrapy.Request(link, callback=self.parseLink)


    def parseLink(self, response):
        url=response.url
        _url=urlparse(url)
        hostname =_url.scheme+"://"+ _url.hostname

        query = dict(urllib.parse.parse_qsl(urllib.parse.urlsplit(url).query))
        if "query" in query:
            key = query.get('query')
        else:
            # 获取page的数值，加1后重新urlencode 这样 下一页的 url就构造完成了
            key1= query.get('from')
            key2=dict(urllib.parse.parse_qsl(urllib.parse.urlsplit(key1).query))
            key=key2.get('query')
        links = response.xpath('//div[@class="txt-box"]/h3/a')
        for link in links:
            text=link.xpath('./em/text()').extract()
            text=" ".join(text)
            if text==key:
                url=self.getValue(link.xpath("./@href"), None)

                yield scrapy.Request(hostname+url, callback=self.parseUrl)
    def parseUrl(self,response):
        text=str(response.body, encoding='utf8')
        text=text.replace('setTimeout',"'__xx__'")

        pattern = re.compile(r"'.+'")
        result = pattern.findall(text)
        result=[r.strip("'") for r in result]
        url=''.join(result).split("__xx__")[1]
        yield scrapy.Request(url, callback=self.parseImg)
    def parseImg(self, response):
        title=response.xpath('//h2[@id="activity-name"]/text()')
        title = self.getValue(title, None).strip()
        links = response.xpath('//img[@class="rich_pages js_insertlocalimg"]/@data-src')
        path=root_path+"/"+title
        if not os.path.exists(path):
            os.mkdir(path)
        self.path=path
        for link in links:
            fileName = path + '/' + str(uuid.uuid1()) + '.png'
            url=link.extract()
            request.urlretrieve(url,fileName)
    @staticmethod
    def close(spider, reason):

        closed = getattr(spider, 'closed', None)
        if callable(closed):
            return closed(reason)

    def replaceWhite(self, info):
        p1 = re.compile('\s+')
        # p2=re.compile('[a - zA - Z0 - 9]+')
        # info = re.sub(p2, " ",info)
        new_string = re.sub(p1, ' ', info)
        return new_string

    def getValue(self, node, value):
        if len(node):
            return node.extract()[0]
        else:
            return value