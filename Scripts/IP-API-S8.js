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
  name = name.replace("Kowloon", "九龙");
  name = name.replace("Tsuen Wan", "荃湾");
  name = name.replace("Cheung Sha Wan", "长沙湾");
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
