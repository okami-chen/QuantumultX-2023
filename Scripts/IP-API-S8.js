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

function replaceRegion(name) {
  const replacements = {
      'South West' => '西南',
      'South East' => '东南',
      'North West' => '西北',
      'North East' => '东北',
      'Central Singapore' => '中部',
      'Caloocan City' => '加洛坎',
      'Phường Mười Lăm' => '第十五区',
      'Tsuen Wan District' => '荃湾',
      'Tsuen Wan' => '荃湾',
      'Semiband' => 'Semi',
      '特别市' => '',
      '市' => '',
      'Googlewifi' => 'G-wifi',
      'Panama City' => '巴拿马',
      'Fuentes del Valle' => '墨西哥',
      'General Escobedo' => '旧金山',
      'Port Edwards' => '新泽西州',
      'North Kansas City' => '北堪萨斯城',
      'Liberty Lake' => '斯波坎',
      'Cedar Park' => '奥斯汀',
      'Frankfurt am Main' => '法兰克福',
      'Digitalocean' => 'DO',
      'Guatemala City' => '危地马拉城',
      'Parham Town' => '帕勒姆镇',
      'Vatican City' => '梵蒂冈',
      'Vienna' => '维也纳',
      'Vallentuna' => '瓦伦图纳',
      'Southwark' => '南华克',
      'Saint-Fons' => '圣冯',
      'Bahcelievler' => '巴赫切利夫勒',
      'Rosh Ha‘Ayin' => '罗什艾因',
      'Makati City' => '马卡蒂',
      'Quezon City' => '奎松',
      'Kampung Sitiawan' => '情景村',
      'Anyang-si' => '安阳市',
      'Andorra la Vella' => '安道尔',
      'Shakujiimachi' => '沙库吉町',
      'Rishon LeTsiyyon' => '里雄莱锡安',
      'Schiphol' => '史基浦',
      'Slough' => '斯劳',
      'Bac Ninh' => '北宁',
      'Aioicho' => '佐世保',
      'Gangnam-gu' => '江南区',
      'Comayaguela' => '特古西加尔巴',
      'Sanliurfa' => '尚勒乌尔法',
      'Morristown' => '莫里斯敦',
      'Verdun' => '蒙特利尔',
      'Viterbo' => '维泰博',
      'Contern' => '孔特恩',
      'Milano' => '米兰',
      'Milan' => '米兰',
      'Viana' => '维亚纳堡',
      'Monaco' => '摩纳哥',
      'City of Westminster' => '威斯敏斯特',
      'Din Daeng' => '曼谷',
      'Spacex' => '星链',
      '伊斯兰P' => 'ISP',
      'Carrierdomain' => 'Carrier',
      'Linkdotnet' => 'Linkdo',
      'Male' => '马累',
      'Saidu Sharif' => '赛杜沙里夫',
      'Northolt' => '诺霍特',
      'Henley Beach' => '司徒德',
      'Naaldwijk' => '纳尔德韦克',
      'Kyiv' => '基辅',
      'Shimura' => '东京',
      'Klang' => '巴生',
      'Cheney' => '切尼',
      'Cheung Sha Wan' => '长沙湾',
      'Kowloon' => '九龙',
      'Whampoa' => '黄埔',
      'Ottoville' => '奥托维尔',
      'Poplar' => '波普勒',
      'Acton' => '阿克顿',
      'Yüan-lin' => '园林',
      '臺灣省 or 台灣省' => '臺灣',
      'Sham Shui Po' => '深水埗',
      'Tokyo' => '东京',
      'Kuala Lumpur' => '吉隆坡',
      'Hesse' => '黑森',
      'Khyber Pakhtunkhwa' => '开伯尔',
      'Madrid' => '马德里',
      'Fujairah' => '富查伊拉',
      'Lagos' => '拉各斯',
      'Kharkivska Oblast' => '哈尔科夫州',
      'Metro Manila' => '马尼拉',
      'North Holland' => '北荷兰',
      'Stockholm County' => '斯德哥尔摩',
      'National Capital Territory of Delhi' => '新德里',
      'Ōsaka' => '大阪',
      'Cairo Governorate' => '开罗',
      'Tai Po District' => '大埔區',
      'Chișinău Municipality' => '基希讷乌',
      'Vinnytsia' => '文尼察',
      'Thừa Thiên Huế Province' => '顺化',
      'Tatarstan Republic' => '鞑靼斯坦',
      'Penang' => '槟城',
      'Lombardy' => '伦巴第',
      'Jakarta' => '雅加达',
      'Dubai' => '迪拜',
      'Kharkiv' => '哈尔科夫',
      'Gangwon-do' => '春川',
      'Changhua' => '昌化',
      'Budapest' => '布达佩斯',
      'Cordoba' => '科尔多瓦',
      'Sao Paulo' => '圣保罗',
      'Haiphong' => '海防',
      'Central District' => '中环',
      'Islamabad' => '伊斯兰堡',
      '开伯尔-普什图省' => '开伯尔',
      'Wong Tai Sin' => '黄大仙区',
      'DigitalOcean' => 'DO',
      'Sheung Yuen Leng' => '九龙',
      'Hakusan' => '白山',
      'Tanjung Tokong' => '槟城州',
      'Shiomi' => '东京都',
      'Olsztyn' => '奥尔什丁',
      'Shibuya' => '涩谷区',
      'Quan Chin' => '胡志明市',
      'Quận Thanh Khê' => '清溪郡',
  };
  for (const key in replacements) {
    if (replacements.hasOwnProperty(key)) {
      const regex = new RegExp(key, "g");
      name = name.replace(regex, replacements[key]);
    }
  }
  return name;
}

function replaceOrganization(name) {
  name = name.replace("Hong Kong Broadband", "HKBN");
  name = name.replace("Hong Kong", "HKT");
  name = name.replace("Kowloon", "九龙");
  name = name.replace("Tsuen Wan", "荃湾");
  name = name.replace("Cheung Sha Wan", "长沙湾");
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


var flags_bak = new Map([
  ["AC", "🇦🇨"], ["AE", "🇦🇪"], ["AF", "🇦🇫"], ["AI", "🇦🇮"], ["AL", "🇦🇱"],
  ["AQ", "🇦🇶"], ["AR", "🇦🇷"], ["AS", "🇦🇸"], ["AT", "🇦🇹"], ["AU", "🇦🇺"],
  ["AW", "🇦🇼"], ["AX", "🇦🇽"], ["AZ", "🇦🇿"], ["BA", "🇧🇦"], ["BB", "🇧🇧"],
  ["BD", "🇧🇩"], ["BE", "🇧🇪"], ["BF", "🇧🇫"], ["BG", "🇧🇬"], ["BH", "🇧🇭"],
  ["BI", "🇧🇮"], ["BJ", "🇧🇯"], ["BM", "🇧🇲"], ["BN", "🇧🇳"], ["BO", "🇧🇴"],
  ["BR", "🇧🇷"], ["BS", "🇧🇸"], ["BT", "🇧🇹"], ["BV", "🇧🇻"], ["BW", "🇧🇼"],
  ["BY", "🇧🇾"], ["BZ", "🇧🇿"], ["CA", "🇨🇦"], ["CF", "🇨🇫"], ["CH", "🇨🇭"],
  ["CK", "🇨🇰"], ["CL", "🇨🇱"], ["CM", "🇨🇲"], ["CN", "🇨🇳"], ["CO", "🇨🇴"],
  ["CP", "🇨🇵"], ["CR", "🇨🇷"], ["CU", "🇨🇺"], ["CV", "🇨🇻"], ["CW", "🇨🇼"],
  ["CX", "🇨🇽"], ["CY", "🇨🇾"], ["CZ", "🇨🇿"], ["DE", "🇩🇪"], ["DG", "🇩🇬"],
  ["DJ", "🇩🇯"], ["DK", "🇩🇰"], ["DM", "🇩🇲"], ["DO", "🇩🇴"], ["DZ", "🇩🇿"],
  ["EA", "🇪🇦"], ["EC", "🇪🇨"], ["EE", "🇪🇪"], ["EG", "🇪🇬"], ["EH", "🇪🇭"],
  ["ER", "🇪🇷"], ["ES", "🇪🇸"], ["ET", "🇪🇹"], ["EU", "🇪🇺"], ["FI", "🇫🇮"],
  ["FJ", "🇫🇯"], ["FK", "🇫🇰"], ["FM", "🇫🇲"], ["FO", "🇫🇴"], ["FR", "🇫🇷"],
  ["GA", "🇬🇦"], ["GB", "🇬🇧"], ["HK", "🇭🇰"], ["HU", "🇭🇺"], ["ID", "🇮🇩"],
  ["IE", "🇮🇪"], ["IL", "🇮🇱"], ["IM", "🇮🇲"], ["IN", "🇮🇳"], ["IS", "🇮🇸"],
  ["IT", "🇮🇹"], ["JP", "🇯🇵"], ["KR", "🇰🇷"], ["LU", "🇱🇺"], ["MO", "🇲🇴"],
  ["MX", "🇲🇽"], ["MY", "🇲🇾"], ["NL", "🇳🇱"], ["PH", "🇵🇭"], ["RO", "🇷🇴"],
  ["RS", "🇷🇸"], ["RU", "🇷🇺"], ["RW", "🇷🇼"], ["SA", "🇸🇦"], ["SB", "🇸🇧"],
  ["SC", "🇸🇨"], ["SD", "🇸🇩"], ["SE", "🇸🇪"], ["SG", "🇸🇬"], ["TH", "🇹🇭"],
  ["TN", "🇹🇳"], ["TO", "🇹🇴"], ["TR", "🇹🇷"], ["TV", "🇹🇻"], ["TW", "🇨🇳"],
  ["UK", "🇬🇧"], ["UM", "🇺🇲"], ["US", "🇺🇸"], ["UY", "🇺🇾"], ["UZ", "🇺🇿"],
  ["VA", "🇻🇦"], ["VE", "🇻🇪"], ["VG", "🇻🇬"], ["VI", "🇻🇮"], ["VN", "🇻🇳"],
  ["ZA", "🇿🇦"], ["UA", "🇺🇦"], ["MD", "🇲🇩"], ["AD", "🇦🇩"], ["AM", "🇦🇲"],
  ["AO", "🇦🇴"], ["KP", "🇰🇵"], ["KY", "🇰🇾"], ["KZ", "🇰🇿"], ["🇱🇦", "LA"],
  ["NZ", "🇳🇿"], ["PK", "🇵🇰"], ["NO", "🇳🇴"], ["PT", "🇵🇹"], ["PL", "🇵🇱"],
  ["GR", "🇬🇷"], ["NG", "🇳🇬"], ["MV", "🇲🇻"], ["KH", "🇰🇭"], ["LA", "🇱🇦"],
  ["GU", "🇬🇺"], ["MN", "🇲🇳"], ["JO", "🇯🇴"], ["IR", "🇮🇷"], ["OM", "🇴🇲"],
  ["PS", "🇵🇸"], ["NP", "🇳🇵"], ["LB", "🇱🇧"], ["IQ", "🇮🇶"], ["SY", "🇸🇾"],
  ["QA", "🇶🇦"], ["GE", "🇬🇪"], ["LK", "🇱🇰"], ["KG", "🇰🇬"], ["ME", "🇲🇪"],
  ["LT", "🇱🇹"], ["MT", "🇲🇹"], ["MC", "🇲🇨"], ["HR", "🇭🇷"], ["MK", "🇲🇰"],
  ["LV", "🇱🇻"], ["SK", "🇸🇰"], ["GI", "🇬🇮"], ["SM", "🇸🇲"], ["LI", "🇱🇮"],
  ["RE", "🇷🇪"], ["PA", "🇵🇦"], ["GL", "🇬🇱"], ["PE", "🇵🇪"], ["PY", "🇵🇾"],
  ["JM", "🇯🇲"], ["SR", "🇸🇷"], ["GT", "🇬🇹"], ["PR", "🇵🇷"], ["HN", "🇭🇳"],
  ["NI", "🇳🇮"], ["GH", "🇬🇭"], ["MA", "🇲🇦"], ["LY", "🇱🇾"], ["KE", "🇰🇪"],
  ["MU", "🇲🇺"], ["TL", "🇹🇱"], ["SI", "🇸🇮"], ["GF", "🇬🇫"], ["TG", "🇹🇬"]
]);
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
  ["TV", "🇹🇻"], ["UK", "🇬🇧"], ["UM", "🇺🇲"], ["VI", "🇻🇮"], ["AO", "🇦🇴"],
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
  var title = flags.get(obj["countryCode"]) + " " + replaceRegion(obj["country"]) + " " + replaceRegion(obj["regionName"]);
  var subtitle = obj["city"] + " " + replaceOrganization(obj["isp"]) + " " + obj["query"];
} else {
  var title = flags.get(obj["countryCode"]) + " " + obj["country"] + " " + replaceRegion(obj["city"]);
  var subtitle = replaceRegion(obj["regionName"]) + " " + replaceOrganization(obj["isp"]) + " " + obj["query"];
}

var description = "\n";
description = description + "IP: " + obj["query"] + "\n\n";
description = description + "服务商: " + obj["isp"] + "\n\n";
description = description + "组织: " + obj["org"] + "\n\n";
description = description + "国家: " + obj["country"] + "\n\n";
description = description + "地区: " + replaceRegion(obj["regionName"]) + "\n\n";
description = description + "城市: " + replaceRegion(obj["city"]) + "\n\n";
description = description + "邮编: " + obj["zip"] + "\n\n";
description = description + "时区: " + obj["timezone"] + "\n\n";
description = description + "经度: " + obj["lon"] + "\n\n";
description = description + "纬度: " + obj["lat"] + "\n\n";
$done({ title, subtitle, ip, description });
