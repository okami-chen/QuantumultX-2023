if ($response.statusCode != 200) {
  $done(null);
}

const emojis = ["🆘", "🈲", "⚠️", "🔞", "📵", "🚦", "🏖", "🖥", "📺", "🐧", "🐬", "🦉", "🍄", "⛳️", "🚴", "🤑", "👽", "🤖", "🎃", "👺", "👁", "🐶", "🐼", "🐌", "👥"];
var city0 = "高谭市";
var isp0 = "Cross-GFW.org";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function City_ValidCheck(para) {
  if (para) {
    return para;
  } else {
    return city0;
//emojis[getRandomInt(emojis.length)]
  }
}

function ISP_ValidCheck(para) {
  if (para) {
    return para;
  } else {
    return isp0;
//emojis[getRandomInt(emojis.length)]
  }
}

function Area_check(para) {
  if (para == "中华民国") {
    return "台湾";
  } else {
    return para;
  }
}

function ReplaceRegion(name) {
  name = name.replace("South West" , "西南地区");
  name = name.replace("South East" , "东南地区");
  name = name.replace("North West" , "西北地区");
  name = name.replace("North East" , "东北地区");
  name = name.replace("Central Singapore" , "中部地区");
  name = name.replace("Caloocan City" , "加洛坎");
  name = name.replace("Phường Mười Lăm" , "第十五区");
  name = name.replace("Tsuen Wan District" , "荃湾");
  name = name.replace("Tsuen Wan" , "荃湾");
  name = name.replace("Semiband" , "Semi");
  name = name.replace("特别市" , "市");
  name = name.replace("Googlewifi" , "G-wifi");
  name = name.replace("Panama City" , "巴拿马");
  name = name.replace("Fuentes del Valle" , "墨西哥");
  name = name.replace("General Escobedo" , "旧金山");
  name = name.replace("Port Edwards" , "新泽西州");
  name = name.replace("North Kansas City" , "北堪萨斯城");
  name = name.replace("Liberty Lake" , "斯波坎");
  name = name.replace("Cedar Park" , "奥斯汀");
  name = name.replace("Frankfurt am Main" , "法兰克福");
  name = name.replace("Digitalocean" , "DO");
  name = name.replace("Guatemala City" , "危地马拉城");
  name = name.replace("Parham Town" , "帕勒姆镇");
  name = name.replace("Vatican City" , "梵蒂冈");
  name = name.replace("Vienna" , "维也纳");
  name = name.replace("Vallentuna" , "瓦伦图纳");
  name = name.replace("Southwark" , "南华克");
  name = name.replace("Saint-Fons" , "圣冯");
  name = name.replace("Bahcelievler" , "巴赫切利夫勒");
  name = name.replace("Rosh Ha‘Ayin" , "罗什艾因");
  name = name.replace("Makati City" , "马卡蒂");
  name = name.replace("Quezon City" , "奎松");
  name = name.replace("Kampung Sitiawan" , "情景村");
  name = name.replace("Anyang-si" , "安阳市");
  name = name.replace("Andorra la Vella" , "安道尔");
  name = name.replace("Shakujiimachi" , "沙库吉町");
  name = name.replace("Rishon LeTsiyyon" , "里雄莱锡安");
  name = name.replace("Schiphol" , "史基浦");
  name = name.replace("Slough" , "斯劳");
  name = name.replace("Bac Ninh" , "北宁");
  name = name.replace("Aioicho" , "佐世保");
  name = name.replace("Gangnam-gu" , "江南区");
  name = name.replace("Comayaguela" , "特古西加尔巴");
  name = name.replace("Sanliurfa" , "尚勒乌尔法");
  name = name.replace("Morristown" , "莫里斯敦");
  name = name.replace("Verdun" , "蒙特利尔");
  name = name.replace("Viterbo" , "维泰博");
  name = name.replace("Contern" , "孔特恩");
  name = name.replace("Milano" , "米兰");
  name = name.replace("Milan" , "米兰");
  name = name.replace("Viana" , "维亚纳堡");
  name = name.replace("Monaco" , "摩纳哥");
  name = name.replace("City of Westminster" , "威斯敏斯特");
  name = name.replace("Din Daeng" , "曼谷");
  name = name.replace("Spacex" , "星链");
  name = name.replace("伊斯兰P" , "ISP");
  name = name.replace("Carrierdomain" , "Carrier");
  name = name.replace("Linkdotnet" , "Linkdo");
  name = name.replace("Male" , "马累");
  name = name.replace("Saidu Sharif" , "赛杜沙里夫");
  name = name.replace("Northolt" , "诺霍特");
  name = name.replace("Henley Beach" , "司徒德");
  name = name.replace("Naaldwijk" , "纳尔德韦克");
  name = name.replace("Kyiv" , "基辅");
  name = name.replace("Shimura" , "东京");
  name = name.replace("Klang" , "巴生");
  name = name.replace("Cheney" , "切尼");
  name = name.replace("Cheung Sha Wan" , "长沙湾");
  name = name.replace("Kowloon" , "九龙");
  name = name.replace("Whampoa" , "黄埔");
  name = name.replace("Ottoville" , "奥托维尔");
  name = name.replace("Poplar" , "波普勒");
  name = name.replace("Acton" , "阿克顿");
  name = name.replace("Yüan-lin" , "园林");
  name = name.replace("臺灣省 or 台灣省" , "臺灣");
  name = name.replace("Sham Shui Po" , "深水埗");
  name = name.replace("Tokyo" , "东京");
  name = name.replace("Kuala Lumpur" , "吉隆坡");
  name = name.replace("Hesse" , "黑森");
  name = name.replace("Khyber Pakhtunkhwa" , "开伯尔");
  name = name.replace("Madrid" , "马德里");
  name = name.replace("Fujairah" , "富查伊拉");
  name = name.replace("Lagos" , "拉各斯");
  name = name.replace("Kharkivska Oblast" , "哈尔科夫州");
  name = name.replace("Metro Manila" , "马尼拉");
  name = name.replace("North Holland" , "北荷兰");
  name = name.replace("Stockholm County" , "斯德哥尔摩");
  name = name.replace("National Capital Territory of Delhi" , "新德里");
  name = name.replace("Ōsaka" , "大阪");
  name = name.replace("Cairo Governorate" , "开罗");
  name = name.replace("Tai Po District" , "大埔區");
  name = name.replace("Chișinău Municipality" , "基希讷乌");
  name = name.replace("Vinnytsia" , "文尼察");
  name = name.replace("Thừa Thiên Huế Province" , "顺化");
  name = name.replace("Tatarstan Republic" , "鞑靼斯坦");
  name = name.replace("Penang" , "槟城");
  name = name.replace("Lombardy" , "伦巴第");
  name = name.replace("Jakarta" , "雅加达");
  name = name.replace("Dubai" , "迪拜");
  name = name.replace("Kharkiv" , "哈尔科夫");
  name = name.replace("Gangwon-do" , "春川");
  name = name.replace("Changhua" , "昌化");
  name = name.replace("Budapest" , "布达佩斯");
  name = name.replace("Cordoba" , "科尔多瓦");
  name = name.replace("Sao Paulo" , "圣保罗");
  name = name.replace("Haiphong" , "海防");
  name = name.replace("Central District" , "中环");
  name = name.replace("Islamabad" , "伊斯兰堡");
  name = name.replace("开伯尔-普什图省" , "开伯尔");
  name = name.replace("Wong Tai Sin" , "黄大仙区");
  name = name.replace("DigitalOcean" , "DO");
  name = name.replace("Sheung Yuen Leng" , "九龙");
  name = name.replace("Hakusan" , "白山");
  name = name.replace("Tanjung Tokong" , "槟城州");
  name = name.replace("Shiomi" , "东京");
  name = name.replace("Olsztyn" , "奥尔什丁");
  name = name.replace("Shibuya" , "东京");
  name = name.replace("Quan Chin" , "胡志明市");
  name = name.replace("Quận Thanh Khê" , "清溪郡");
  name = name.replace("Tseung Kwan O', '新界");
  name = name.replace("Tsing Yi', '新界");
  name = name.replace("Kowloon", "九龙");
  name = name.replace("Tsuen Wan", "荃湾");
  name = name.replace("Cheung Sha Wan", "长沙湾");
  name = name.replace("San Jose" , "圣荷西");
  name = name.replace("Sakuragawa" , "樱川市");
  name = name.replace("Port Melbourne" , "墨尔本");
  name = name.replace("Honchō" , "本庄市");
  name = name.replace( "Ashburn" , "阿什本");
  name = name.replace("Chiyoda" , "千代田区");
  name = name.replace("Frankfurt" , "法兰克福");
  name = name.replace("Yerevan" , "耶烈万");
  name = name.replace("Bağcılar" , "巴哲拉尔");
  name = name.replace("Kartal" , "卡尔塔尔");
  name = name.replace("Kitamachi" , "新宿区");
  name = name.replace("Maebashi" , "前桥市");
  name = name.replace("Seocho-gu" , "首尔市");
  name = name.replace("Pasig" , "帕西格市");
  name = name.replace("Goyang-si" , "高阳市");
  name = name.replace("Kefar Masaryk" , "西加利利");
  name = name.replace("Erbil" , "埃尔比勒");
  name = name.replace("奧克蘭都會區" , "奥克兰");
  name = name.replace("Viana do Castelo" , "维亚纳堡");
  name = name.replace("Princes Town" , "王子镇");
  name = name.replace("Saliña" , "萨利纳");
  name = name.replace("Salina" , "萨利纳");
  name = name.replace("Coxen Hole" , "罗阿坦");
  name = name.replace("Bamako" , "巴马科");
  name = name.replace("Belas" , "贝拉斯");
  name = name.replace("Vinhedo" , "维涅杜");
  name = name.replace("St. Julian's" , "圣朱利安斯");
  name = name.replace("Mariehamn" , "玛丽港");
  name = name.replace("Kashar" , "卡沙尔");
  name = name.replace("Le Port" , "勒波尔");
  name = name.replace("Andheri" , "孟买");
  name = name.replace("Rosh Haayin" , "罗什艾因");
  name = name.replace("Kanamechō" , "都丰岛区");
  name = name.replace("西雅圖" , "西雅图");
  name = name.replace("班加羅爾" , "班加罗尔");
  name = name.replace("Miyakami" , "神奈川县");
  name = name.replace("倫敦金融城" , "金融城");
  name = name.replace("Shek Kip Mei" , "九龙");
  name = name.replace("桃園區" , "桃园");
  name = name.replace("Cyberjaya" , "赛城");
  name = name.replace("Cầu Giấy District" , "纸桥郡");
  name = name.replace("Koishikawa" , "小石川");
  name = name.replace("Vinkeveen" , "芬克芬");
  name = name.replace("Quan Binh Thanh" , "平盛郡");
  name = name.replace("Yenişehir" , "耶尼谢希尔");
  name = name.replace("Falkenstein" , "法尔肯施泰因");
  name = name.replace("Yongin-si" , "龙仁市");
  name = name.replace("West Byfleet", "西拜弗利特");
  name = name.replace("Keng Hau", "径口");
  name = name.replace("St Petersburg", "圣彼得堡");
  name = name.replace("Sofia", "索非亚");
  name = name.replace("Taipei", "台北");
  name = name.replace("Wien", "维也纳");
  return name;
}

function ReplaceOrganization(name) {
  name = name.replace("net","");
  name = name.replace("-"," ");
  name = name.replace(","," ");
  name = name.replace("Ram","eons");
  name = name.replace("Proxy","eons");
  name = name.replace("PCCW","hkt");
  name = name.replace("ShangHai","jinx");
  name = name.replace("Hong Kong Broadband", "HKBN");
  name = name.replace("Companhia", "CTM");
  name = name.replace("Hong","HKBN");
  name = name.replace("China","CMHK");
  name = name.replace("OneAsiaHost","OneAsia");
  name = name.replace("Chunghwa" , "中华电信");
  name = name.replace("China" , "CMHK");
  name = name.replace("OneAsiaHost" , "OneAsia");
  name = name.replace("Cloudflare" , "CF");
  name = name.replace("Fiberstate" , "SLC");
  name = name.replace("Sharktech" , "Shark");
  const tmp = name.split(" ");
  const t = tmp[0].split("-");
  const replacements = {
    "POLONETWORK": "Tanaka",
    "SERVERS": "",
    "SERVER": "",
    "NETWORKS": "",
    "CLOUDFLARENET": "CLOUDFLARE",
    ",": " "
  };
  for (const key in replacements) {
    if (replacements.hasOwnProperty(key)) {
      const regex = new RegExp(key, "g");
      tmp[0] = tmp[0].replace(regex, replacements[key]);
    }
  }
  const trimmedResult = tmp[0].charAt(0).toUpperCase() + tmp[0].slice(1).toLowerCase();
  const ret = trimmedResult.trim();
  if (ret.length === 2 || ret.length === 3 || ret == "Hkbn") {
    return ret.toUpperCase();
  }
  return ret;
}

var flags = new Map([
  ["HK", "🇭🇰"], ["MO", "🇲🇴"], ["TW", "🇨🇳"], ["SG", "🇸🇬"], ["MY", "🇲🇾"],
  ["MV", "🇲🇻"], ["KH", "🇰🇭"], ["TH", "🇹🇭"], ["LA", "🇱🇦"], ["VN", "🇻🇳"],
  ["JP", "🇯🇵"], ["KR", "🇰🇷"], ["BT", "🇧🇹"], ["KP", "🇰🇵"], ["GU", "🇬🇺"],
  ["FJ", "🇫🇯"], ["PH", "🇵🇭"], ["ID", "🇮🇩"], ["IN", "🇮🇳"], ["MN", "🇲🇳"],
  ["JO", "🇯🇴"], ["YE", "🇾🇪"], ["IR", "🇮🇷"], ["BH", "🇧🇭"], ["OM", "🇴🇲"],
  ["IL", "🇮🇱"], ["PS", "🇵🇸"], ["TR", "🇹🇷"], ["NP", "🇳🇵"], ["TL", "🇹🇱"],
  ["BD", "🇧🇩"], ["LB", "🇱🇧"], ["IQ", "🇮🇶"], ["SY", "🇸🇾"], ["AF", "🇦🇫"],
  ["QA", "🇶🇦"], ["AE", "🇦🇪"], ["AZ", "🇦🇿"], ["AM", "🇦🇲"], ["GE", "🇬🇪"],
  ["PK", "🇵🇰"], ["LK", "🇱🇰"], ["SA", "🇸🇦"], ["KZ", "🇰🇿"], ["TM", "🇹🇲"],
  ["KG", "🇰🇬"], ["UZ", "🇺🇿"], ["AU", "🇦🇺"], ["NZ", "🇳🇿"], ["SB", "🇸🇧"],
  ["FR", "🇫🇷"], ["GB", "🇬🇧"], ["IM", "🇮🇲"], ["DE", "🇩🇪"], ["DK", "🇩🇰"],
  ["NO", "🇳🇴"], ["SE", "🇸🇪"], ["FI", "🇫🇮"], ["IS", "🇮🇸"], ["CH", "🇨🇭"],
  ["CZ", "🇨🇿"], ["GR", "🇬🇷"], ["NL", "🇳🇱"], ["PL", "🇵🇱"], ["ME", "🇲🇪"],
  ["RU", "🇷🇺"], ["UA", "🇺🇦"], ["HU", "🇭🇺"], ["LU", "🇱🇺"], ["AT", "🇦🇹"],
  ["IT", "🇮🇹"], ["VA", "🇻🇦"], ["BE", "🇧🇪"], ["IE", "🇮🇪"], ["LT", "🇱🇹"],
  ["ES", "🇪🇸"], ["PT", "🇵🇹"], ["AD", "🇦🇩"], ["MT", "🇲🇹"], ["MC", "🇲🇨"],
  ["BG", "🇧🇬"], ["HR", "🇭🇷"], ["MK", "🇲🇰"], ["RS", "🇷🇸"], ["CY", "🇨🇾"],
  ["LV", "🇱🇻"], ["MD", "🇲🇩"], ["SK", "🇸🇰"], ["EE", "🇪🇪"], ["BY", "🇧🇾"],
  ["RO", "🇷🇴"], ["GI", "🇬🇮"], ["SM", "🇸🇲"], ["FO", "🇫🇴"], ["AX", "🇦🇽"],
  ["SI", "🇸🇮"], ["AL", "🇦🇱"], ["BA", "🇧🇦"], ["LI", "🇱🇮"], ["RE", "🇷🇪"],
  ["US", "🇺🇸"], ["CA", "🇨🇦"], ["MX", "🇲🇽"], ["PA", "🇵🇦"], ["BM", "🇧🇲"],
  ["GL", "🇬🇱"], ["CR", "🇨🇷"], ["VG", "🇻🇬"], ["BR", "🇧🇷"], ["CL", "🇨🇱"],
  ["PE", "🇵🇪"], ["CU", "🇨🇺"], ["AR", "🇦🇷"], ["UY", "🇺🇾"], ["PY", "🇵🇾"],
  ["JM", "🇯🇲"], ["SR", "🇸🇷"], ["BS", "🇧🇸"], ["CW", "🇨🇼"], ["GF", "🇬🇫"],
  ["TT", "🇹🇹"], ["CO", "🇨🇴"], ["EC", "🇪🇨"], ["VE", "🇻🇪"], ["BO", "🇧🇴"],
  ["GT", "🇬🇹"], ["PR", "🇵🇷"], ["KY", "🇰🇾"], ["HN", "🇭🇳"], ["NI", "🇳🇮"],
  ["EG", "🇪🇬"], ["GH", "🇬🇭"], ["TG", "🇹🇬"], ["ZA", "🇿🇦"], ["BJ", "🇧🇯"],
  ["MA", "🇲🇦"], ["TN", "🇹🇳"], ["LY", "🇱🇾"], ["KE", "🇰🇪"], ["RW", "🇷🇼"],
  ["CV", "🇨🇻"], ["MW", "🇦🇴"], ["CM", "🇨🇲"], ["NG", "🇳🇬"], ["MZ", "🇲🇿"],
  ["MU", "🇲🇺"], ["CI", "🇨🇮"], ["AQ", "🇦🇶"], ["AC", "🇦🇨"], ["AI", "🇦🇮"],
  ["AS", "🇦🇸"], ["AW", "🇦🇼"], ["BB", "🇧🇧"], ["BF", "🇧🇫"], ["BI", "🇧🇮"],
  ["BN", "🇧🇳"], ["BV", "🇧🇻"], ["BW", "🇧🇼"], ["BZ", "🇧🇿"], ["CF", "🇨🇫"],
  ["CK", "🇨🇰"], ["CN", "🇨🇳"], ["CP", "🇨🇵"], ["CX", "🇨🇽"], ["DG", "🇩🇬"],
  ["DJ", "🇩🇯"], ["DM", "🇩🇲"], ["DO", "🇩🇴"], ["DZ", "🇩🇿"], ["EA", "🇪🇦"],
  ["EH", "🇪🇭"], ["ER", "🇪🇷"], ["ET", "🇪🇹"], ["EU", "🇪🇺"], ["FK", "🇫🇰"],
  ["FM", "🇫🇲"], ["GA", "🇬🇦"], ["SC", "🇸🇨"], ["SD", "🇸🇩"], ["TO", "🇹🇴"],
  ["TV", "🇹🇻"], ["UK", "🇬🇧"], ["UM", "🇺🇲"], ["VI", "🇻🇮"], ["AO", "🇦🇴"]
]);

var body = $response.body;
var obj = JSON.parse(body);
var ip = obj["query"];

//荷兰
if (obj["query"].includes("45.132.114.")) {
  obj["country"] = "荷兰";
  obj["city"] = "阿姆斯特丹";
  obj["regionName"] = "北荷兰";
  obj["isp"] = "Chociz";
}

if (obj["country"] == obj["city"]) {
  var title = flags.get(obj["countryCode"]) + " " + ReplaceRegion(obj["country"]) + " " + ReplaceRegion(obj["regionName"]);
  var subtitle = ReplaceOrganization(obj["isp"]) + " " + obj["query"];
} else {
  var title = flags.get(obj["countryCode"]) + " " + obj["country"] + " " + ReplaceRegion(obj["city"]);
  var subtitle = ReplaceRegion(obj["regionName"]) + " " + ReplaceOrganization(obj["isp"]) + " " + obj["query"];
}

var description = "\n";
description = description + "IP: " + obj["query"] + "\n\n";
description = description + "服务商: " + obj["isp"] + "\n\n";
description = description + "组织: " + obj["org"] + "\n\n";
description = description + "国家: " + obj["country"] + "\n\n";
description = description + "地区: " + ReplaceRegion(obj["regionName"]) + "\n\n";
description = description + "城市: " + ReplaceRegion(obj["city"]) + "\n\n";
description = description + "邮编: " + obj["zip"] + "\n\n";
description = description + "时区: " + obj["timezone"] + "\n\n";
description = description + "经度: " + obj["lon"] + "\n\n";
description = description + "纬度: " + obj["lat"] + "\n\n";
$done({ title, subtitle, ip, description });
