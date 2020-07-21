import {request} from './request';

export function getDetail(iid){
	return request({
		url: '/detail',
		params: {
			iid
		}
	})
}

export function recommendInfo(){
  return request({
    url: '/recommend',
  })
}

export class goodsInfo {
	constructor(itemInfo,columns,shopInfo) {
		this.title = itemInfo.title;
		this.price = itemInfo.price;
		this.lowNowPrice = itemInfo.lowNowPrice;
		this.oldPrice = itemInfo.oldPrice;
		this.discountDesc = itemInfo.discountDesc;
		this.columns0 = columns[0];
		this.columns1 = columns[1];
		this.services = shopInfo.services[shopInfo.services.length-1].name;
		this.desc = itemInfo.desc
	}
}

export class Shop {
	constructor(shopInfo) {
		this.logo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.score = shopInfo.score;
		this.cSells = shopInfo.cSells;
		this.cGoods = shopInfo.cGoods;
	}
}

//参数信息
export class Param {
  constructor(info, rule) {
    this.info = info.set;
    this.rule = rule.tables;
  }
}