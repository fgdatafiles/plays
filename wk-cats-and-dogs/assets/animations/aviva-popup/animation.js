(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [
			{name:"animation_atlas_1", frames: [[397,426,57,43],[268,204,208,162],[0,0,266,327],[268,0,210,202],[0,329,128,158],[271,426,124,38],[271,368,139,56],[130,435,139,62],[130,329,57,37],[130,368,139,65],[189,329,56,35],[388,471,56,26],[456,368,30,30],[412,368,27,28],[271,466,58,32],[446,471,40,30],[331,466,55,27],[247,329,18,20]]}
	];
	
	
	(lib.AnMovieClip = function(){
		this.actionFrames = [];
		this.ignorePause = false;
		this.gotoAndPlay = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
		}
		this.play = function(){
			cjs.MovieClip.prototype.play.call(this);
		}
		this.gotoAndStop = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		}
		this.stop = function(){
			cjs.MovieClip.prototype.stop.call(this);
		}
	}).prototype = p = new cjs.MovieClip();
	// symbols:
	
	
	
	(lib.Ah = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.AvivaAlternateBody = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.AvivaBod = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.AvivaHead = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.AvivaTail = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.Blink0 = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.Blink1 = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.Blink2 = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.E = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.EyeWhite = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.L = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.M = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.PupilL = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.PupilR = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.S = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.Uh = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.V = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.W = function() {
		this.initialize(ss["animation_atlas_1"]);
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.AvivaPupilR = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.PupilR();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,27,28);
	
	
	(lib.AvivaPupilL = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.PupilL();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,30,30);
	
	
	(lib.AvivaPonyTail = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.AvivaTail();
		this.instance.setTransform(-107.6,-24);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-107.6,-24,128,158);
	
	
	(lib.AvivaMouth = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.M();
	
		this.instance_1 = new lib.L();
	
		this.instance_2 = new lib.E();
	
		this.instance_3 = new lib.S();
	
		this.instance_4 = new lib.Uh();
		this.instance_4.setTransform(10,6.5);
	
		this.instance_5 = new lib.V();
	
		this.instance_6 = new lib.W();
		this.instance_6.setTransform(25,10.5);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,58,37);
	
	
	(lib.AvivaEyewhite = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.EyeWhite();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,139,65);
	
	
	(lib.AvivaEyelids = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.Blink0();
	
		this.instance_1 = new lib.Blink1();
		this.instance_1.setTransform(-6,-4);
	
		this.instance_2 = new lib.Blink2();
		this.instance_2.setTransform(-6,-4);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance}]},2).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-6,-4,139,62);
	
	
	(lib.AvivaBody = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.AvivaAlternateBody();
		this.instance.setTransform(18,-5.5);
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,-5.5,226,162);
	
	
	(lib.AvivaHeadMap = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {"default":0,idle:4,"platformer-1":65,"platformer-2":176,"behavior-38":297,"behavior-39":480,"behavior-40":687,"behavior-41":911,"behavior-42":1081,"behavior-43":1381,"behavior-44":1520,"behavior-45":1797,"behavior-46":2005,"behavior-47":2315,"behavior-48":2477,"behavior-49":2727,"behavior-50":2944,"behavior-51":3233,"behavior-52":3429,"behavior-53":3639,"behavior-54":3925,"behavior-55":4164,"behavior-56":4362,"behavior-57":4529,"behavior-58":4780,"behavior-59":4983,Neutral:65,Ah:73,L:77,S:80,Ee:83,"S":85,"Ee":87,"S":90,"Ee":92,D:94,"Ee":95,"S":97,"D":99,Uh:102,"D":107,"Uh":109,Oh:114,"S":116,"Ee":119,"D":122,"Neutral":125,"Oh":128,M:130,"Ee":131,"L":134,"D":135,"Ah":137,"S":141,"Ee":143,"D":145,"Ee":147,"D":149,Woo:151,"S":154,"D":157,"Uh":158,"Neutral":163,"S":167,"Neutral":170,"Neutral":175,"Neutral":176,"Ah":183,"D":187,"Ah":189,"S":193,"Ee":194,"S":197,"Ee":199,"D":201,"Uh":204,"S":206,"M":207,"Ah":209,"M":214,"Ah":217,"D":221,"M":223,"Ah":224,R:227,"S":229,"Ee":233,"D":236,"Neutral":237,"Uh":244,F:246,"Ee":248,"L":251,"S":252,"Ah":254,"S":258,"M":260,"Ah":264,"S":266,"Ee":268,"S":271,"D":274,"Ah":276,"Neutral":281,"S":285,"Neutral":287,"Neutral":296,"Neutral":297,"Ah":303,"D":305,"Neutral":307,"L":311,"Ah":313,"D":314,"Ah":316,"L":318,"Ah":320,"L":325,"M":327,"Ah":329,"D":334,"Uh":336,"F":338,"Ah":340,"Ah":342,"L":348,"Oh":350,"L":352,"Ah":354,"Neutral":356,"Ah":359,"M":361,"Uh":362,"D":364,"Ah":366,"D":371,"S":373,"Neutral":375,"M":382,"Ah":384,"L":389,"Ee":391,"Neutral":393,"S":396,"Woo":398,"Woo":407,"M":410,"Neutral":411,"Uh":415,"F":417,"Ah":419,"D":424,"Uh":426,"M":428,"Uh":429,"M":430,"Ah":432,"M":435,"R":437,"Uh":439,"M":441,"Uh":443,"S":445,"M":447,"Ah":449,"D":451,"M":453,"Ah":454,"L":457,"Uh":459,"M":460,"Ee":462,"Uh":466,"D":468,"Uh":470,"R":472,"Neutral":474,"Neutral":479,"Neutral":480,"Ee":488,"Ah":490,"S":492,"Ah":496,"D":499,"Uh":501,"L":504,"Ah":506,"M":509,"S":510,"Neutral":512,"Oh":515,"S":521,"Neutral":524,"Oh":532,"Ah":535,"R":539,"D":542,"Ah":544,"M":547,"Uh":551,"S":553,"Woo":555,"Ah":558,"M":561,"Ah":562,"M":564,"S":566,"Ah":569,"L":573,"Neutral":575,"Ah":585,"D":587,"S":589,"Uh":591,"S":594,"Uh":597,"L":599,"Ah":602,"L":605,"Ah":607,"D":609,"Neutral":611,"Uh":617,"L":619,"Uh":621,"D":622,"Ee":625,"Ah":627,"L":630,"Neutral":633,"Oh":636,"S":642,"Neutral":645,"Ah":651,"D":653,"Neutral":655,"Ee":658,"R":661,"S":663,"Neutral":665,"R":668,"D":670,"Uh":673,"Neutral":677,"Neutral":686,"Neutral":687,"M":692,"Ee":695,"Ah":696,"S":699,"M":702,"Ee":704,"S":706,"Ah":708,"D":711,"M":712,"Uh":714,"S":717,"Ee":720,"D":721,"M":723,"Ah":724,"D":731,"Ee":733,"R":735,"Neutral":737,"Uh":744,"M":746,"Ah":749,"R":750,"D":752,"Ee":754,"R":758,"S":760,"L":762,"Ah":764,"M":767,"Ah":771,"M":774,"Neutral":778,"Oh":785,"L":787,"Ah":789,"R":793,"M":796,"Ah":799,"M":802,"Uh":807,"L":809,"Neutral":810,"Oh":813,"M":815,"Uh":817,"M":819,"Uh":820,"D":822,"S":824,"Ah":825,"L":831,"Oh":833,"M":835,"Ee":837,"S":838,"M":841,"Oh":843,"Ah":845,"Ee":847,"D":850,"S":852,"Neutral":853,"Ee":856,"D":859,"Neutral":862,"Ah":868,"S":871,"Oh":873,"M":874,"Oh":876,"Ah":879,"Ee":882,"D":884,"Ee":888,"M":889,"Ee":891,"D":894,"Oh":896,"Ah":899,"L":903,"Neutral":906,"Neutral":910,"Neutral":911,"Ee":917,"L":919,"Ah":921,"L":923,"Ah":925,"L":929,"M":931,"Uh":933,"S":938,"Ee":940,"D":944,"Uh":949,"S":951,"Ee":953,"D":955,"S":956,"Ah":959,"D":965,"Ah":968,"M":974,"Ah":978,"Uh":979,"D":984,"Neutral":986,"S":989,"Neutral":991,"M":994,"Ee":995,"D":997,"Uh":999,"L":1001,"Ah":1004,"S":1005,"Ee":1007,"M":1009,"Ee":1010,"Uh":1014,"R":1018,"M":1019,"Uh":1021,"D":1023,"Uh":1025,"S":1027,"Uh":1030,"Oh":1036,"L":1038,"Ah":1040,"M":1043,"Ah":1044,"M":1053,"D":1057,"Uh":1058,"F":1061,"Ah":1063,"S":1065,"Neutral":1069,"Neutral":1080,"Neutral":1081,"Ee":1091,"S":1094,"Oh":1099,"Ah":1102,"D":1105,"Uh":1107,"D":1109,"Ee":1111,"M":1114,"Uh":1115,"L":1117,"Ah":1121,"Ee":1127,"Neutral":1129,"Ah":1132,"D":1134,"Neutral":1136,"Ah":1139,"M":1142,"S":1143,"Ee":1145,"D":1147,"S":1149,"Neutral":1153,"M":1158,"Ah":1161,"L":1164,"Uh":1167,"S":1170,"Neutral":1172,"Ah":1177,"D":1183,"S":1184,"Neutral":1186,"Oh":1192,"M":1194,"Uh":1196,"Uh":1198,"Ah":1199,"R":1201,"Oh":1203,"M":1204,"Uh":1206,"M":1209,"S":1212,"D":1214,"Uh":1216,"L":1221,"Oh":1224,"M":1226,"Ee":1228,"D":1231,"Uh":1237,"L":1239,"Ah":1240,"D":1243,"L":1245,"Ah":1247,"Neutral":1251,"S":1254,"Neutral":1256,"Uh":1262,"M":1264,"Ah":1267,"Ee":1272,"M":1274,"Ah":1276,"S":1280,"D":1282,"Uh":1283,"M":1286,"Woo":1288,"Ah":1290,"Oh":1293,"M":1295,"Ee":1297,"M":1298,"Oh":1302,"Uh":1304,"D":1310,"Neutral":1312,"Uh":1319,"D":1321,"Oh":1322,"D":1326,"Oh":1328,"S":1330,"Neutral":1332,"Woo":1335,"L":1338,"Ah":1340,"L":1342,"Ee":1346,"L":1348,"Ah":1350,"L":1352,"Ah":1354,"F":1356,"Neutral":1358,"Ah":1361,"Neutral":1363,"Neutral":1380,"Neutral":1381,"Ah":1389,"S":1392,"Ah":1398,"L":1407,"S":1408,"D":1410,"M":1412,"Ah":1414,"Oh":1416,"S":1419,"Neutral":1423,"Uh":1433,"L":1435,"Ah":1436,"L":1440,"R":1442,"Ee":1444,"Uh":1449,"S":1451,"Uh":1453,"S":1456,"Uh":1459,"S":1461,"Uh":1464,"L":1465,"Uh":1469,"L":1473,"Ah":1475,"L":1479,"Ah":1480,"L":1484,"S":1486,"Ah":1489,"L":1492,"Ee":1493,"D":1495,"Ah":1497,"L":1501,"Oh":1503,"Ee":1506,"Neutral":1509,"Neutral":1519,"Neutral":1520,"M":1532,"Ah":1535,"S":1538,"L":1541,"Ah":1543,"S":1554,"Oh":1558,"Ah":1562,"D":1565,"Uh":1567,"M":1569,"Woo":1571,"Ah":1574,"S":1577,"Ee":1580,"D":1582,"Ee":1584,"D":1591,"Ee":1593,"R":1595,"Neutral":1597,"S":1601,"Neutral":1602,"Ee":1607,"S":1610,"Woo":1612,"Ah":1615,"S":1619,"Ah":1623,"M":1627,"Uh":1630,"S":1633,"M":1635,"Oh":1636,"M":1639,"Ah":1644,"Ee":1648,"Neutral":1649,"Uh":1660,"S":1665,"L":1669,"Ah":1670,"Neutral":1674,"Ah":1677,"D":1679,"Ee":1682,"Uh":1684,"S":1686,"Uh":1688,"S":1692,"Uh":1695,"D":1701,"Uh":1704,"D":1706,"Ee":1707,"Uh":1710,"M":1713,"Ah":1715,"M":1720,"Neutral":1722,"Ah":1736,"M":1738,"Oh":1739,"Neutral":1741,"Ah":1744,"S":1746,"Oh":1750,"D":1753,"S":1754,"Ah":1756,"R":1762,"D":1764,"Neutral":1767,"Ah":1770,"D":1772,"S":1775,"Ee":1777,"D":1781,"S":1783,"Neutral":1789,"Neutral":1796,"L":1797,"Neutral":1798,"Uh":1805,"S":1807,"Ah":1810,"S":1818,"Uh":1821,"L":1823,"Ah":1825,"D":1827,"M":1829,"Uh":1830,"S":1833,"L":1835,"Ah":1837,"S":1848,"Ee":1849,"S":1851,"Ah":1856,"Neutral":1863,"Ah":1873,"D":1875,"Uh":1877,"M":1880,"Neutral":1882,"R":1886,"M":1892,"Uh":1896,"D":1897,"Ee":1899,"D":1902,"Ee":1904,"L":1907,"Oh":1909,"D":1912,"Neutral":1914,"Oh":1917,"Ee":1920,"D":1923,"Oh":1925,"R":1926,"D":1928,"Oh":1931,"R":1933,"D":1935,"L":1937,"Ee":1938,"D":1940,"S":1942,"Uh":1945,"D":1950,"M":1953,"Ah":1954,"D":1956,"Woo":1959,"D":1961,"Uh":1963,"D":1967,"M":1970,"Oh":1972,"S":1975,"Uh":1979,"Oh":1980,"L":1981,"Oh":1982,"D":1983,"Uh":1985,"F":1987,"Ah":1989,"L":1991,"S":1993,"Uh":1996,"D":1998,"Neutral":2000,"Neutral":2004,"Neutral":2005,"Ah":2012,"M":2014,"S":2015,"Ah":2017,"M":2021,"Oh":2023,"M":2025,"Oh":2026,"L":2028,"Ee":2030,"M":2033,"Ah":2035,"L":2037,"Ah":2040,"L":2046,"D":2048,"Ee":2051,"Neutral":2053,"M":2056,"Ee":2058,"M":2062,"Ah":2065,"F":2066,"Ah":2069,"M":2073,"Uh":2075,"S":2077,"Ah":2079,"Oh":2082,"S":2084,"Uh":2086,"S":2090,"Neutral":2092,"Uh":2098,"D":2100,"Ah":2104,"S":2108,"M":2112,"Uh":2114,"S":2116,"M":2119,"Ee":2120,"Uh":2123,"Oh":2125,"D":2128,"Ee":2129,"R":2131,"Neutral":2133,"Uh":2145,"M":2146,"Ah":2147,"L":2153,"Ah":2155,"M":2156,"Uh":2157,"S":2159,"Ee":2161,"D":2163,"Woo":2165,"Ah":2167,"S":2171,"Ah":2173,"Neutral":2178,"Uh":2184,"M":2186,"Ah":2187,"L":2192,"Ah":2194,"M":2196,"Uh":2200,"L":2202,"Ah":2204,"F":2209,"Uh":2211,"R":2212,"Uh":2215,"Ee":2217,"Ah":2219,"S":2221,"L":2228,"Ah":2230,"M":2231,"Ah":2235,"R":2238,"Ee":2240,"D":2242,"Ee":2247,"D":2252,"Neutral":2254,"Uh":2264,"S":2273,"L":2275,"Ah":2277,"D":2282,"F":2284,"Uh":2285,"M":2287,"Uh":2289,"D":2291,"R":2293,"Ah":2295,"Neutral":2297,"Neutral":2314,"L":2315,"Neutral":2316,"Ah":2321,"S":2324,"Uh":2330,"D":2332,"Ah":2335,"F":2339,"Ah":2342,"Neutral":2344,"Uh":2347,"L":2349,"Ah":2351,"S":2354,"M":2357,"Uh":2360,"Oh":2363,"S":2366,"Neutral":2369,"Ah":2376,"M":2378,"Ah":2379,"M":2382,"Ah":2383,"Ee":2384,"L":2385,"Ee":2387,"D":2389,"Ah":2392,"R":2395,"Oh":2396,"M":2400,"Uh":2402,"L":2404,"Ah":2406,"L":2410,"S":2411,"Neutral":2414,"D":2421,"Ee":2423,"R":2428,"S":2429,"M":2431,"Ah":2433,"D":2437,"Ee":2439,"M":2441,"Ah":2442,"Neutral":2445,"Uh":2449,"L":2450,"Oh":2455,"Ah":2457,"L":2459,"Ah":2461,"D":2464,"Neutral":2466,"Neutral":2476,"L":2477,"Neutral":2478,"Ah":2486,"D":2489,"Woo":2491,"Ah":2493,"S":2497,"Neutral":2499,"Ah":2502,"S":2507,"Neutral":2514,"S":2518,"Ee":2520,"Uh":2523,"R":2525,"S":2527,"Ah":2532,"S":2536,"Uh":2539,"M":2541,"Ah":2545,"R":2548,"M":2550,"Uh":2551,"D":2554,"Ee":2558,"D":2560,"Neutral":2562,"Ee":2565,"S":2567,"Oh":2570,"D":2574,"Ah":2576,"S":2579,"Uh":2582,"D":2584,"Neutral":2586,"M":2592,"Ah":2594,"D":2597,"Uh":2598,"S":2603,"Oh":2605,"M":2608,"Ah":2612,"L":2615,"Neutral":2618,"Ee":2625,"S":2629,"M":2632,"Uh":2633,"D":2636,"L":2639,"Uh":2640,"S":2647,"Neutral":2649,"Ah":2656,"S":2662,"Ah":2666,"S":2672,"Neutral":2674,"Ah":2683,"D":2685,"S":2688,"Ah":2690,"R":2694,"D":2696,"Uh":2698,"M":2701,"Neutral":2703,"Ah":2706,"Neutral":2710,"S":2714,"Neutral":2718,"Neutral":2726,"Neutral":2727,"Uh":2736,"S":2739,"M":2741,"Ah":2743,"M":2748,"Ee":2751,"R":2752,"Ah":2754,"S":2758,"Ah":2764,"L":2768,"Uh":2772,"F":2774,"Ah":2775,"D":2777,"S":2779,"Ee":2782,"Oh":2785,"L":2788,"Ah":2790,"D":2794,"S":2796,"Ah":2799,"D":2805,"Neutral":2807,"Ee":2819,"Ah":2820,"Oh":2823,"L":2826,"Ee":2828,"Ah":2831,"L":2838,"Neutral":2841,"R":2850,"Ah":2858,"S":2859,"Neutral":2861,"Uh":2865,"M":2868,"Ah":2870,"M":2873,"Ah":2874,"D":2876,"Uh":2878,"D":2880,"S":2882,"Neutral":2883,"Ah":2887,"D":2891,"S":2893,"Neutral":2897,"Uh":2904,"S":2907,"Ah":2910,"D":2913,"Ee":2915,"Ah":2918,"L":2921,"Uh":2923,"Neutral":2926,"Ah":2930,"M":2934,"Neutral":2937,"Neutral":2943,"Neutral":2944,"Uh":2956,"S":2958,"Ah":2962,"S":2965,"R":2966,"Ah":2968,"S":2970,"Oh":2974,"Ah":2977,"D":2979,"Uh":2982,"M":2983,"Ah":2987,"S":2991,"Neutral":2994,"S":2997,"Ee":2999,"Ah":3003,"Neutral":3007,"Ee":3010,"S":3012,"Neutral":3014,"Ah":3019,"D":3022,"S":3024,"Uh":3027,"S":3029,"Neutral":3031,"Ah":3034,"M":3036,"Neutral":3039,"Ah":3044,"D":3048,"Neutral":3052,"M":3059,"Uh":3061,"Ah":3064,"S":3067,"Ah":3069,"L":3073,"Ah":3075,"S":3079,"Neutral":3083,"M":3086,"Ee":3087,"M":3089,"Ah":3090,"F":3094,"Ee":3096,"Uh":3099,"S":3100,"Neutral":3103,"Ah":3106,"D":3109,"S":3112,"Ah":3114,"S":3117,"Ee":3120,"D":3122,"Uh":3124,"M":3126,"Uh":3128,"R":3130,"Neutral":3131,"Ee":3134,"R":3139,"S":3141,"M":3142,"Oh":3144,"L":3145,"Ah":3148,"M":3152,"Uh":3155,"D":3158,"Uh":3160,"R":3163,"Uh":3165,"M":3169,"L":3173,"Neutral":3176,"Uh":3184,"R":3186,"Ee":3187,"Ah":3190,"R":3194,"M":3196,"Ah":3198,"L":3204,"S":3206,"Oh":3208,"M":3210,"Uh":3213,"S":3215,"Oh":3218,"Ah":3220,"Neutral":3225,"Neutral":3232,"Neutral":3233,"D":3245,"Ah":3247,"L":3251,"Oh":3253,"L":3256,"Ah":3259,"M":3262,"Woo":3263,"Ah":3266,"L":3270,"S":3272,"M":3274,"Woo":3276,"Oh":3278,"M":3281,"Oh":3284,"M":3287,"Oh":3288,"Ah":3290,"S":3292,"Ah":3294,"S":3298,"Uh":3300,"D":3302,"S":3304,"Neutral":3306,"R":3313,"D":3315,"Ee":3319,"Uh":3321,"Neutral":3323,"S":3326,"D":3328,"Oh":3329,"M":3331,"Ah":3334,"R":3337,"S":3338,"D":3342,"Ah":3344,"M":3346,"Ah":3348,"L":3353,"Oh":3354,"S":3357,"Neutral":3359,"Uh":3365,"D":3366,"Ah":3369,"L":3372,"Ee":3374,"D":3378,"Uh":3381,"S":3383,"Ah":3385,"Neutral":3392,"Ah":3395,"D":3398,"Neutral":3400,"Ah":3404,"L":3408,"Uh":3411,"R":3417,"Neutral":3421,"Neutral":3428,"Neutral":3429,"Ah":3438,"R":3442,"Uh":3444,"M":3447,"Uh":3449,"S":3451,"Uh":3456,"M":3459,"Ah":3461,"M":3464,"S":3466,"Neutral":3468,"Uh":3471,"S":3475,"D":3477,"Uh":3479,"Neutral":3481,"S":3485,"Neutral":3487,"Ee":3490,"R":3493,"S":3495,"M":3497,"R":3499,"D":3501,"Ah":3504,"M":3507,"Uh":3509,"D":3510,"Ah":3514,"Oh":3518,"M":3519,"Ah":3522,"M":3528,"Neutral":3531,"Uh":3538,"D":3540,"Ah":3542,"S":3546,"Oh":3548,"M":3550,"Ee":3551,"M":3554,"Ah":3556,"D":3561,"Uh":3564,"D":3565,"L":3567,"Ah":3569,"L":3573,"Uh":3575,"M":3577,"Ah":3578,"D":3584,"Ee":3587,"Uh":3590,"D":3592,"Ee":3594,"D":3596,"Ah":3598,"S":3602,"Uh":3604,"M":3609,"Uh":3612,"S":3613,"M":3616,"Ah":3617,"M":3621,"Ah":3623,"M":3626,"Neutral":3627,"Neutral":3638,"Neutral":3639,"M":3646,"Uh":3649,"M":3651,"Ah":3652,"M":3658,"Ee":3661,"Uh":3663,"M":3664,"Uh":3666,"S":3669,"M":3672,"Ah":3673,"S":3681,"Uh":3684,"L":3687,"Ah":3689,"L":3690,"D":3692,"Ee":3694,"S":3696,"Uh":3698,"D":3699,"L":3701,"Ah":3703,"S":3706,"Ee":3708,"D":3710,"Neutral":3712,"S":3715,"Neutral":3717,"Ee":3720,"S":3723,"M":3725,"Ah":3727,"Ee":3732,"L":3733,"Ah":3735,"D":3739,"Uh":3741,"D":3744,"S":3746,"Neutral":3747,"Uh":3753,"R":3755,"S":3758,"Neutral":3760,"M":3763,"Ah":3764,"M":3768,"Neutral":3772,"Ee":3775,"R":3779,"S":3782,"Neutral":3784,"Ah":3787,"L":3791,"M":3792,"Woo":3794,"S":3796,"Neutral":3798,"S":3803,"Uh":3806,"Oh":3809,"S":3811,"Ee":3813,"S":3819,"Woo":3820,"M":3823,"Ah":3824,"S":3828,"Ah":3830,"Neutral":3834,"Ee":3837,"D":3841,"Neutral":3843,"Ah":3846,"D":3849,"Ee":3851,"S":3855,"Ah":3857,"S":3860,"Ah":3866,"L":3870,"Ah":3872,"L":3874,"Neutral":3877,"Ah":3884,"D":3888,"Ee":3890,"D":3892,"Uh":3894,"M":3896,"Uh":3897,"D":3898,"Ah":3900,"S":3902,"M":3905,"Ah":3908,"D":3911,"S":3913,"Neutral":3919,"Neutral":3924,"Neutral":3925,"M":3931,"Ee":3934,"F":3937,"D":3938,"Ah":3941,"S":3945,"R":3947,"Ah":3950,"S":3955,"Uh":3960,"L":3961,"Ee":3967,"D":3968,"S":3970,"Ah":3973,"D":3976,"Ah":3979,"Neutral":3982,"Ee":3995,"R":3997,"S":3999,"L":4000,"Ah":4002,"D":4004,"Uh":4006,"M":4008,"Ah":4009,"L":4012,"Ee":4014,"L":4019,"Neutral":4021,"D":4025,"Ah":4027,"S":4038,"Ah":4041,"D":4045,"Oh":4048,"M":4051,"Neutral":4054,"Woo":4060,"Ah":4063,"D":4066,"Ee":4068,"Woo":4070,"D":4073,"Uh":4077,"M":4080,"Ah":4082,"L":4084,"Uh":4086,"F":4087,"Uh":4089,"L":4093,"Ah":4096,"D":4097,"Uh":4099,"Neutral":4105,"M":4108,"Ah":4111,"S":4113,"Uh":4116,"D":4117,"Ah":4120,"S":4123,"Oh":4126,"S":4129,"Oh":4130,"Ah":4132,"M":4136,"S":4138,"Ah":4143,"R":4147,"Ee":4150,"D":4152,"Neutral":4154,"Neutral":4163,"Neutral":4164,"M":4169,"Ee":4171,"S":4174,"D":4176,"Ah":4179,"S":4183,"Oh":4185,"R":4188,"D":4191,"Uh":4193,"F":4194,"R":4198,"Ah":4200,"D":4203,"Neutral":4207,"Ah":4217,"F":4221,"Ee":4222,"Ah":4225,"S":4229,"Neutral":4230,"M":4233,"Ah":4234,"F":4236,"L":4238,"Ah":4240,"F":4243,"M":4245,"Woo":4246,"D":4249,"Ee":4251,"R":4255,"S":4259,"Neutral":4263,"L":4267,"Oh":4269,"Ah":4273,"Ee":4276,"Ah":4278,"D":4283,"Uh":4287,"M":4289,"S":4290,"Ah":4293,"Neutral":4295,"Ah":4298,"D":4302,"M":4305,"Oh":4306,"M":4309,"Ah":4311,"D":4316,"Uh":4318,"R":4320,"D":4322,"Uh":4324,"R":4328,"Oh":4329,"S":4332,"M":4334,"Ah":4335,"D":4341,"S":4343,"Uh":4345,"D":4347,"S":4349,"Neutral":4353,"Neutral":4361,"Neutral":4362,"Ee":4371,"Uh":4373,"F":4374,"Ah":4377,"D":4378,"Ee":4380,"Woo":4382,"Ah":4384,"F":4390,"Ah":4393,"M":4397,"Ee":4399,"S":4401,"Oh":4404,"Ee":4407,"Uh":4409,"M":4411,"Ah":4413,"L":4415,"Ah":4416,"S":4420,"M":4424,"Ee":4426,"D":4432,"Ee":4434,"R":4436,"Neutral":4438,"Oh":4442,"S":4444,"Ah":4446,"D":4449,"Ee":4451,"Uh":4452,"S":4455,"Ah":4457,"D":4460,"Ah":4463,"L":4468,"Neutral":4470,"Ah":4485,"R":4489,"Ah":4491,"L":4498,"Ah":4500,"M":4502,"D":4504,"Ee":4507,"Uh":4509,"S":4511,"Uh":4513,"Neutral":4516,"Neutral":4528,"Neutral":4529,"Uh":4543,"S":4545,"Uh":4549,"M":4553,"Ee":4555,"S":4557,"Oh":4561,"Ee":4565,"M":4566,"Uh":4567,"D":4571,"L":4573,"Ah":4575,"S":4577,"Ee":4580,"D":4581,"Ee":4585,"F":4591,"Ee":4593,"R":4595,"Neutral":4597,"L":4606,"Ah":4607,"D":4609,"Woo":4611,"Ah":4613,"S":4617,"Neutral":4619,"Ah":4622,"S":4628,"Neutral":4631,"M":4635,"Ee":4637,"S":4640,"M":4644,"Ee":4646,"S":4649,"Ee":4652,"D":4655,"Oh":4658,"M":4661,"Ee":4663,"Ah":4666,"S":4668,"Neutral":4670,"Woo":4673,"Uh":4676,"L":4677,"Ah":4680,"D":4685,"Ah":4688,"S":4694,"Ee":4696,"S":4698,"Ee":4701,"L":4703,"Neutral":4707,"M":4710,"Ah":4715,"Ee":4718,"M":4721,"Uh":4723,"D":4725,"Ee":4728,"S":4732,"Ee":4733,"M":4736,"S":4738,"Oh":4742,"Uh":4744,"S":4749,"Neutral":4751,"D":4754,"Uh":4756,"F":4758,"Ah":4760,"D":4764,"S":4767,"Neutral":4772,"Neutral":4779,"Neutral":4780,"Ah":4788,"S":4793,"Ah":4796,"Oh":4803,"D":4805,"S":4807,"Neutral":4811,"Ee":4814,"Uh":4816,"Neutral":4817,"D":4822,"Ee":4824,"M":4825,"Ah":4828,"L":4834,"D":4836,"Ah":4838,"M":4841,"S":4843,"D":4845,"Ee":4846,"Neutral":4849,"Uh":4852,"R":4856,"S":4859,"Ah":4861,"D":4864,"M":4865,"Ee":4867,"M":4870,"S":4872,"Ee":4876,"R":4878,"D":4879,"Uh":4882,"Neutral":4885,"Ah":4888,"M":4891,"Neutral":4894,"R":4904,"Ah":4907,"D":4913,"Ee":4915,"D":4917,"Neutral":4919,"M":4922,"Ee":4923,"Ah":4926,"L":4931,"Ah":4933,"D":4937,"Uh":4939,"D":4940,"Ah":4943,"M":4946,"Ee":4947,"D":4952,"Uh":4954,"D":4956,"S":4958,"M":4960,"Ah":4962,"D":4964,"F":4967,"S":4969,"Neutral":4971,"Neutral":4982,"Neutral":4983,"Uh":4992,"S":4994,"Ah":4998,"R":5001,"S":5004,"Uh":5007,"D":5012,"Ah":5015,"S":5018,"Ee":5020,"S":5022,"Uh":5024,"Neutral":5026,"L":5030,"Ah":5032,"F":5036,"S":5037,"Ah":5040,"D":5042,"F":5043,"Ee":5047,"R":5049,"S":5053,"M":5056,"Ah":5058,"D":5062,"S":5064,"Neutral":5067,"Ah":5074,"D":5076,"Oh":5078,"M":5079,"Ah":5080,"R":5084,"Neutral":5086,"Ah":5089,"Neutral":5093,"Ee":5096,"D":5098,"S":5100,"D":5102,"Ee":5105,"M":5108,"Ee":5109,"D":5113,"Uh":5116,"R":5118,"S":5120,"Neutral":5121,"S":5123,"Neutral":5124,"Uh":5127,"M":5129,"Oh":5131,"Neutral":5134,"Ah":5137,"S":5141,"Uh":5143,"D":5145,"Ee":5147,"M":5149,"Ah":5150,"S":5154,"Uh":5156,"D":5157,"Ee":5161,"Ah":5163,"Oh":5166,"D":5169,"Ee":5170,"S":5172,"Ee":5175,"Woo":5178,"M":5181,"Ee":5184,"D":5186,"Uh":5188,"R":5190,"Neutral":5192,"Ah":5195,"D":5197,"Uh":5200,"D":5205,"S":5207,"Neutral":5213,"Neutral":5223};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Aviva_Mouth
		this.instance = new lib.AvivaMouth("single",4);
		this.instance.setTransform(115,175,1,1,0,0,0,33,24.5);
	
	var modt_0 = cjs.Tween.get(this.instance);
	modt_0.wait(65).to({startPosition:0},0).wait(8).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(5).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:7},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(5).to({startPosition:0},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:5},0).wait(2).to({startPosition:6},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:0},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(6).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:6},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:7},0).wait(9).to({startPosition:7},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:5},0).wait(2).to({startPosition:6},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(6).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(8).to({startPosition:5},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(4).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:7},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(10).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(6).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(6).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(6).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(4).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(7).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(7).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0);
	modt_0.wait(3).to({startPosition:0},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(7).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(5).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(6).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(6).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(5).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(6).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(6).to({startPosition:0},0).wait(4).to({startPosition:2},0).wait(1).to({startPosition:5},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:5},0).wait(4).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(6).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(9).to({startPosition:0},0).wait(4).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(3).to({startPosition:6},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(10).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(5).to({startPosition:5},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(6).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:2},0).wait(6).to({startPosition:4},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(6).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(5).to({startPosition:1},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(6).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(6).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:7},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:5},0).wait(2).to({startPosition:5},0).wait(6).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(7).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:7},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:6},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(6).to({startPosition:2},0).wait(9).to({startPosition:1},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(10).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(4).to({startPosition:5},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:1},0);
	modt_0.wait(1).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(11).to({startPosition:4},0).wait(4).to({startPosition:5},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:7},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(7).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(5).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:7},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(5).to({startPosition:2},0).wait(4).to({startPosition:2},0).wait(1).to({startPosition:0},0).wait(11).to({startPosition:5},0).wait(5).to({startPosition:4},0).wait(4).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(6).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(14).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(6).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(6).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(8).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(11).to({startPosition:4},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(5).to({startPosition:2},0).wait(7).to({startPosition:0},0).wait(10).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:4},0).wait(6).to({startPosition:0},0).wait(4).to({startPosition:5},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(5).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:7},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(4).to({startPosition:5},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:6},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:6},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(6).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(12).to({startPosition:5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:7},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:0},0).wait(6).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:6},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:4},0);
	modt_0.wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(5).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(10).to({startPosition:5},0).wait(9).to({startPosition:4},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:6},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(5).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(6).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:6},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(7).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(7).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(4).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(5).to({startPosition:5},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(8).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:7},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(7).to({startPosition:0},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(5).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(7).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:1},0).wait(1).to({startPosition:5},0).wait(7).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(7).to({startPosition:2},0).wait(6).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(6).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(9).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(9).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(6).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(4).to({startPosition:5},0).wait(2).to({startPosition:6},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(6).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(12).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:4},0).wait(8).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(7).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(12).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:5},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(5).to({startPosition:2},0);
	modt_0.wait(4).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:6},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:5},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(8).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(12).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:7},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:7},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(7).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(1).to({startPosition:4},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(1).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(6).to({startPosition:5},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(7).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:5},0).wait(6).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(9).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(5).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(4).to({startPosition:5},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(6).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(7).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(6).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(6).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(8).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(6).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:4},0);
	modt_0.wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:7},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(6).to({startPosition:4},0).wait(1).to({startPosition:7},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(6).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(7).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(6).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:6},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(5).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(6).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(13).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(11).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(6).to({startPosition:7},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:7},0).wait(3).to({startPosition:4},0).wait(4).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(2).to({startPosition:5},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(6).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:4},0).wait(5).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(10).to({startPosition:2},0).wait(4).to({startPosition:6},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:6},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:6},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:7},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(4).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:5},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(4).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(4).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(6).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(9).to({startPosition:2},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:7},0).wait(2).to({startPosition:2},0).wait(6).to({startPosition:6},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(6).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(15).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:4},0);
	modt_0.wait(3).to({startPosition:2},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(14).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:5},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:5},0).wait(4).to({startPosition:2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(6).to({startPosition:6},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(9).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:7},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(6).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:7},0).wait(3).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(6).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(5).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:5},0).wait(2).to({startPosition:5},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:6},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:4},0).wait(5).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(7).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:0},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(10).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(6).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:6},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(9).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(5).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:6},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:6},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:0},0).wait(7).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:5},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:5},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(4).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:4},0).wait(4).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:7},0).wait(3).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:0},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(5).to({startPosition:4},0).wait(2).to({startPosition:4},0).wait(6).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(1);
	this.timeline.addTween(modt_0);
	
		// Aviva_Eyelids
		this.instance_1 = new lib.AvivaEyelids("single",0);
		this.instance_1.setTransform(134,121,1,1,0,0,0,79,35);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({mode:"synched",loop:false},0).wait(74).to({startPosition:0},0).wait(65).to({startPosition:0},0).wait(79).to({startPosition:0},0).wait(130).to({startPosition:0},0).wait(82).to({startPosition:0},0).wait(120).to({startPosition:0},0).wait(89).to({startPosition:0},0).wait(124).to({startPosition:0},0).wait(186).to({startPosition:0},0).wait(108).to({startPosition:0},0).wait(103).to({startPosition:0},0).wait(111).to({startPosition:0},0).wait(56).to({startPosition:0},0).wait(174).to({startPosition:0},0).wait(125).to({startPosition:0},0).wait(142).to({startPosition:0},0).wait(129).to({startPosition:0},0).wait(95).to({startPosition:0},0).wait(48).to({startPosition:0},0).wait(121).to({startPosition:0},0).wait(114).to({startPosition:0},0).wait(217).to({startPosition:0},0).wait(89).to({startPosition:0},0).wait(222).to({startPosition:0},0).wait(155).to({startPosition:0},0).wait(124).to({startPosition:0},0).wait(355).to({startPosition:0},0).wait(267).to({startPosition:0},0).wait(117).to({startPosition:0},0).wait(67).to({startPosition:0},0).wait(72).to({startPosition:0},0).wait(97).to({startPosition:0},0).wait(56).to({startPosition:0},0).wait(146).to({startPosition:0},0).wait(119).to({startPosition:0},0).wait(62).to({startPosition:0},0).wait(64).to({startPosition:0},0).wait(174).to({startPosition:0},0).wait(122).to({startPosition:0},0).wait(173).to({startPosition:0},0).wait(143).to({startPosition:0},0).wait(14));
	
		// Aviva_Pupil_L
		this.instance_2 = new lib.AvivaPupilL("single",0);
		this.instance_2.setTransform(86,116,1,1,0,0,0,17,17);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5224));
	
		// Aviva_Pupil_R
		this.instance_3 = new lib.AvivaPupilR("single",0);
		this.instance_3.setTransform(152,119,1,1,0,0,0,15.5,16);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5224));
	
		// Aviva_Eyewhite
		this.instance_4 = new lib.AvivaEyewhite("single",0);
		this.instance_4.setTransform(118.5,113.5,1,1,0,0,0,69.5,32.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5224));
	
		// Aviva_Head_png
		this.instance_5 = new lib.AvivaHead();
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5224));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,210,202);
	
	
	// stage content:
	(lib.avivapopup = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {"default":0,"idle":4,"platformer-1":65,"platformer-2":176,"behavior-38":297,"behavior-39":480,"behavior-40":687,"behavior-41":911,"behavior-42":1081,"behavior-43":1381,"behavior-44":1520,"behavior-45":1797,"behavior-46":2005,"behavior-47":2315,"behavior-48":2477,"behavior-49":2727,"behavior-50":2944,"behavior-51":3233,"behavior-52":3429,"behavior-53":3639,"behavior-54":3925,"behavior-55":4164,"behavior-56":4362,"behavior-57":4529,"behavior-58":4780,"behavior-59":4983};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		this.actionFrames = [64,175,296,479,686,910,1080,1380,1519,1796,2004,2314,2476,2726,2943,3232,3428,3638,3924,4163,4361,4528,4779,4982,5223];
		// timeline functions:
		this.frame_64 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_175 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_296 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_479 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_686 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_910 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_1080 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_1380 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_1519 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_1796 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_2004 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_2314 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_2476 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_2726 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_2943 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_3232 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_3428 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_3638 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_3924 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_4163 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_4361 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_4528 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_4779 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_4982 = function() {
			this.gotoAndPlay("idle");
		}
		this.frame_5223 = function() {
			this.gotoAndPlay("idle");
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(111).call(this.frame_175).wait(121).call(this.frame_296).wait(183).call(this.frame_479).wait(207).call(this.frame_686).wait(224).call(this.frame_910).wait(170).call(this.frame_1080).wait(300).call(this.frame_1380).wait(139).call(this.frame_1519).wait(277).call(this.frame_1796).wait(208).call(this.frame_2004).wait(310).call(this.frame_2314).wait(162).call(this.frame_2476).wait(250).call(this.frame_2726).wait(217).call(this.frame_2943).wait(289).call(this.frame_3232).wait(196).call(this.frame_3428).wait(210).call(this.frame_3638).wait(286).call(this.frame_3924).wait(239).call(this.frame_4163).wait(198).call(this.frame_4361).wait(167).call(this.frame_4528).wait(251).call(this.frame_4779).wait(203).call(this.frame_4982).wait(241).call(this.frame_5223).wait(1));
	
		// Aviva_Head_Map
		this.instance = new lib.AvivaHeadMap("synched",0);
		this.instance.setTransform(146.95,197.15,1,1,0,0,0,78.6,159.4);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({startPosition:4},0).to({regX:78.7,regY:159.3,rotation:2.3988,x:148.25,y:198.2,startPosition:34},30,cjs.Ease.quadInOut).wait(1).to({regX:105,regY:101,rotation:2.3663,x:176.85,y:141,startPosition:35},0).wait(1).to({rotation:2.3307,x:176.8,y:140.95,startPosition:36},0).wait(1).to({rotation:2.2919,x:176.7,y:140.9,startPosition:37},0).wait(1).to({rotation:2.25,x:176.65,y:140.85,startPosition:38},0).wait(1).to({rotation:2.2049,x:176.55,y:140.9,startPosition:39},0).wait(1).to({rotation:2.1566,y:140.8,startPosition:40},0).wait(1).to({rotation:2.1052,x:176.5,y:140.75,startPosition:41},0).wait(1).to({rotation:2.0505,x:176.4,y:140.7,startPosition:42},0).wait(1).to({rotation:1.9926,x:176.3,y:140.65,startPosition:43},0).wait(1).to({rotation:1.9314,x:176.2,y:140.6,startPosition:44},0).wait(1).to({rotation:1.867,x:176.1,y:140.5,startPosition:45},0).wait(1).to({rotation:1.7993,x:176,y:140.45,startPosition:46},0).wait(1).to({rotation:1.7284,x:175.85,y:140.35,startPosition:47},0).wait(1).to({rotation:1.654,x:175.8,startPosition:48},0).wait(1).to({rotation:1.5764,x:175.6,y:140.25,startPosition:49},0).wait(1).to({rotation:1.4954,x:175.5,y:140.15,startPosition:50},0).wait(1).to({rotation:1.4111,x:175.35,y:140.1,startPosition:51},0).wait(1).to({rotation:1.3233,x:175.2,y:139.95,startPosition:52},0).wait(1).to({rotation:1.2322,x:175.15,startPosition:53},0).wait(1).to({rotation:1.1376,x:175,y:139.85,startPosition:54},0).wait(1).to({rotation:1.0396,x:174.85,y:139.75,startPosition:55},0).wait(1).to({rotation:0.9382,x:174.7,y:139.65,startPosition:56},0).wait(1).to({rotation:0.8333,x:174.55,y:139.6,startPosition:57},0).wait(1).to({rotation:0.7248,x:174.35,y:139.45,startPosition:58},0).wait(1).to({rotation:0.6129,x:174.15,y:139.3,startPosition:59},0).wait(1).to({rotation:0.4975,x:173.95,y:139.25,startPosition:60},0).wait(1).to({rotation:0.3785,x:173.85,y:139.15,startPosition:61},0).wait(1).to({rotation:0.2559,x:173.6,y:139,startPosition:62},0).wait(1).to({rotation:0.1297,x:173.4,y:138.9,startPosition:63},0).wait(1).to({regX:78.6,regY:159.4,rotation:0,x:146.95,y:197.15,startPosition:64},0).wait(1).to({startPosition:65},0).wait(8).to({startPosition:73},0).to({regY:159.5,rotation:-12.9584,x:147,y:197.3,startPosition:83},10,cjs.Ease.quadInOut).wait(83).to({startPosition:166},0).to({regY:159.4,rotation:0,x:146.95,y:197.15,startPosition:175},9).wait(1).to({startPosition:176},0).wait(7).to({startPosition:183},0).to({regX:78.7,regY:159.3,rotation:-14.993,x:150.95,y:198.45,startPosition:191},8,cjs.Ease.quadInOut).wait(85).to({startPosition:276},0).to({regX:78.6,regY:159.4,rotation:0,x:146.95,y:197.15,startPosition:285},9,cjs.Ease.quadInOut).wait(11).to({startPosition:296},0).wait(1).to({startPosition:297},0).wait(8).to({startPosition:305},0).to({regX:78.7,regY:159.3,rotation:-14.993,x:150.95,y:198.45,startPosition:313},8,cjs.Ease.quadInOut).wait(58).to({startPosition:371},0).to({regX:78.6,regY:159.4,rotation:0,x:146.95,y:197.15,startPosition:380},9,cjs.Ease.quadInOut).wait(15).to({startPosition:395},0).to({y:207.15,startPosition:401},6,cjs.Ease.quadInOut).wait(10).to({startPosition:411},0).to({y:197.15,startPosition:417},6,cjs.Ease.quadInOut).wait(62).to({startPosition:479},0).wait(1).to({startPosition:480},0).wait(6).to({startPosition:486},0).to({y:187.15,startPosition:490},4,cjs.Ease.quadInOut).to({y:197.15,startPosition:494},4,cjs.Ease.quadInOut).wait(4).to({startPosition:498},0).to({rotation:-8.4409,x:149.15,y:198.05,startPosition:508},10,cjs.Ease.quadInOut).wait(47).to({startPosition:555},0).to({regY:159.5,scaleX:1.0043,scaleY:0.9961,rotation:0,skewX:4.974,skewY:3.3342,x:158.9,y:198.25,startPosition:565},10,cjs.Ease.quadInOut).wait(70).to({startPosition:635},0).to({skewX:-9.4838,skewY:-11.1247,x:162.95,y:199.1,startPosition:642},7,cjs.Ease.quadInOut).wait(35).to({startPosition:677},0).to({regY:159.4,scaleX:1,scaleY:1,skewX:0,skewY:0,x:146.95,y:197.15,startPosition:686},9,cjs.Ease.quadInOut).wait(1).to({startPosition:687},0).wait(7).to({startPosition:694},0).to({regX:78.7,rotation:-11.4396,x:150.05,y:198.35,startPosition:704},10,cjs.Ease.quadInOut).wait(81).to({startPosition:785},0).to({regY:159.5,rotation:8.9613,x:149.6,y:197.35,startPosition:793},8,cjs.Ease.quadInOut).wait(108).to({startPosition:901},0).to({regX:78.6,regY:159.4,rotation:0,x:146.95,y:197.15,startPosition:910},9,cjs.Ease.quadInOut).wait(1).to({startPosition:911},0).wait(34).to({startPosition:945},0).to({y:187.15,startPosition:951},6,cjs.Ease.quadInOut).to({y:197.15,startPosition:957},6,cjs.Ease.quadInOut).wait(19).to({startPosition:976},0).to({regX:78.7,rotation:-15.1866,x:151.05,y:198.55,startPosition:983},7,cjs.Ease.quadInOut).wait(84).to({startPosition:1067},0).to({regX:78.6,rotation:0,x:146.95,y:197.15,startPosition:1077},10,cjs.Ease.quadInOut).wait(4).to({startPosition:1081},0).wait(34).to({startPosition:1115},0).to({regY:159.5,rotation:-12.7291,y:197.25,startPosition:1124},9,cjs.Ease.quadInOut).wait(67).to({startPosition:1191},0).to({regX:78.7,regY:159.6,rotation:-0.0192,x:147.05,y:197.3,startPosition:1200},9,cjs.Ease.quadInOut).wait(128).to({rotation:-0.0192,startPosition:1328},0).to({regX:78.6,rotation:-17.9677,startPosition:1339},11,cjs.Ease.quadInOut).wait(29).to({startPosition:1368},0).to({regY:159.4,rotation:0,x:146.95,y:197.15,startPosition:1380},12,cjs.Ease.quadInOut).wait(1).to({startPosition:1381},0).wait(6).to({startPosition:1387},0).to({regX:78.5,rotation:-18.9442,startPosition:1399},12,cjs.Ease.quadInOut).wait(92).to({startPosition:1491},0).to({regX:78.6,rotation:0,startPosition:1501},10,cjs.Ease.quadInOut).wait(18).to({startPosition:1519},0).wait(1).to({startPosition:1520},0).wait(46).to({startPosition:1566},0).to({regX:78.5,regY:159.5,rotation:-14.1906,x:146.9,y:197.3,startPosition:1576},10,cjs.Ease.quadInOut).wait(63).to({startPosition:1639},0).to({regY:159.4,rotation:1.3037,x:146.95,y:197.25,startPosition:1647},8,cjs.Ease.quadInOut).wait(34).to({rotation:1.3037,startPosition:1681},0).to({regX:78.6,rotation:-15.1907,startPosition:1689},8).wait(45).to({startPosition:1734},0).to({regY:159.3,rotation:7.5371,x:147,y:197.2,startPosition:1744},10,cjs.Ease.quadInOut).wait(40).to({rotation:7.5371,startPosition:1784},0).to({regY:159.4,rotation:0,x:146.95,y:197.15,startPosition:1793},9,cjs.Ease.quadInOut).wait(4).to({startPosition:1797},0).wait(7).to({startPosition:1804},0).to({regY:159.5,rotation:-13.1864,x:147,y:197.25,startPosition:1814},10,cjs.Ease.quadInOut).wait(39).to({startPosition:1853},0).to({y:187.25,startPosition:1860},7,cjs.Ease.quadInOut).to({y:197.25,startPosition:1866},6,cjs.Ease.quadInOut).wait(19).to({startPosition:1885},0).to({regX:78.7,rotation:-0.7003,x:147.05,startPosition:1894},9,cjs.Ease.quadInOut).wait(37).to({rotation:-0.7003,startPosition:1931},0).to({regX:78.8,rotation:-12.1525,x:147.1,y:197.15,startPosition:1940},9,cjs.Ease.quadInOut).wait(51).to({startPosition:1991},0).to({regX:78.6,regY:159.4,rotation:0,x:146.95,startPosition:2001},10,cjs.Ease.quadInOut).wait(4).to({startPosition:2005},0).wait(31).to({startPosition:2036},0).to({regY:159.5,rotation:-14.2122,x:147,y:197.25,startPosition:2046},10,cjs.Ease.quadInOut).wait(51).to({startPosition:2097},0).to({rotation:-0.5141,y:197.3,startPosition:2105},8,cjs.Ease.quadInOut).wait(79).to({rotation:-0.5141,startPosition:2184},0).to({rotation:-22.2083,startPosition:2192},8,cjs.Ease.quadInOut).wait(71).to({startPosition:2263},0).to({regY:159.4,rotation:0,x:146.95,y:197.15,startPosition:2270},7,cjs.Ease.quadInOut).wait(44).to({startPosition:2314},0).wait(1).to({startPosition:2315},0).wait(16).to({startPosition:2331},0).to({regX:78.7,regY:159.5,rotation:-8.9672,x:147.05,y:197.25,startPosition:2339},8,cjs.Ease.quadInOut).wait(111).to({startPosition:2450},0).to({regX:78.6,regY:159.4,rotation:0,x:146.95,y:197.15,startPosition:2459},9).wait(17).to({startPosition:2476},0).wait(1).to({startPosition:2477},0).wait(66).to({startPosition:2543},0).to({regY:159.5,rotation:-11.7439,y:197.25,startPosition:2552},9,cjs.Ease.quadInOut).wait(149).to({startPosition:2701},0).to({regY:159.4,rotation:0,y:197.15,startPosition:2709},8,cjs.Ease.quadInOut).wait(17).to({startPosition:2726},0).wait(1).to({startPosition:2727},0).wait(35).to({startPosition:2762},0).to({regX:78.7,regY:159.5,rotation:-9.4525,x:147.05,y:197.3,startPosition:2770},8,cjs.Ease.quadInOut).wait(60).to({startPosition:2830},0).to({regX:78.8,regY:159.3,rotation:0.5377,x:147.1,y:197.15,startPosition:2837},7).wait(15).to({rotation:0.5377,startPosition:2852},0).to({regY:159.4,rotation:-7.6553,x:147.15,y:197.2,startPosition:2859},7,cjs.Ease.quadInOut).wait(16).to({rotation:-7.6553,startPosition:2875},0).to({rotation:2.5844,x:147.1,y:197.3,startPosition:2883},8,cjs.Ease.quadInOut).wait(20).to({rotation:2.5844,startPosition:2903},0).to({regX:78.9,regY:159.5,scaleX:0.9999,scaleY:0.9999,rotation:-12.3846,x:147.2,y:197.4,startPosition:2910},7,cjs.Ease.quadInOut).wait(24).to({startPosition:2934},0).to({regX:78.6,regY:159.4,scaleX:1,scaleY:1,rotation:0,x:146.95,y:197.15,startPosition:2943},9,cjs.Ease.quadInOut).wait(1).to({startPosition:2944},0).wait(12).to({startPosition:2956},0).to({regY:159.5,rotation:-9.9752,y:197.25,startPosition:2965},9,cjs.Ease.quadInOut).wait(53).to({startPosition:3018},0).to({regX:78.7,rotation:-2.5074,x:147.05,y:197.2,startPosition:3026},8,cjs.Ease.quadInOut).wait(70).to({rotation:-2.5074,startPosition:3096},0).to({rotation:-18.2547,x:147.1,startPosition:3104},8,cjs.Ease.quadInOut).wait(112).to({startPosition:3216},0).to({regX:78.6,regY:159.4,rotation:0,x:146.95,y:197.15,startPosition:3224},8,cjs.Ease.quadInOut).wait(8).to({startPosition:3232},0).wait(1).to({startPosition:3233},0).wait(11).to({startPosition:3244},0).to({regX:78.5,rotation:-9.4784,x:146.85,y:197.1,startPosition:3252},8,cjs.Ease.quadInOut).wait(80).to({startPosition:3332},0).to({regX:78.7,regY:159.5,rotation:-1.7331,x:147,y:197.2,startPosition:3340},8,cjs.Ease.quadInOut).wait(49).to({rotation:-1.7331,startPosition:3389},0).to({rotation:-9.3315,x:147.1,y:187.35,startPosition:3395},6).to({regX:78.6,rotation:-16.9302,x:147.05,y:197.3,startPosition:3401},6).wait(17).to({startPosition:3418},0).to({regY:159.4,rotation:0,x:146.95,y:197.15,startPosition:3428},10,cjs.Ease.quadInOut).wait(1).to({startPosition:3429},0).wait(10).to({startPosition:3439},0).to({rotation:-11.4521,startPosition:3446},7,cjs.Ease.quadInOut).wait(90).to({startPosition:3536},0).to({rotation:0,startPosition:3544},8,cjs.Ease.quadInOut).wait(94).to({startPosition:3638},0).wait(1).to({startPosition:3639},0).wait(18).to({startPosition:3657},0).to({rotation:-11.4521,startPosition:3664},7,cjs.Ease.quadInOut).wait(156).to({startPosition:3820},0).to({rotation:0,startPosition:3828},8,cjs.Ease.quadInOut).wait(96).to({startPosition:3924},0).wait(1).to({startPosition:3925},0).wait(69).to({startPosition:3994},0).to({rotation:-11.4521,startPosition:4001},7,cjs.Ease.quadInOut).wait(129).to({startPosition:4130},0).to({rotation:0,startPosition:4138},8,cjs.Ease.quadInOut).wait(25).to({startPosition:4163},0).wait(1).to({startPosition:4164},0).wait(12).to({startPosition:4176},0).to({rotation:-11.4521,startPosition:4183},7,cjs.Ease.quadInOut).wait(149).to({startPosition:4332},0).to({rotation:0,startPosition:4340},8,cjs.Ease.quadInOut).wait(21).to({startPosition:4361},0).wait(1).to({startPosition:4362},0).wait(21).to({startPosition:4383},0).to({rotation:-11.4521,startPosition:4390},7,cjs.Ease.quadInOut).wait(94).to({startPosition:4484},0).to({rotation:0,startPosition:4492},8,cjs.Ease.quadInOut).wait(36).to({startPosition:4528},0).wait(1).to({startPosition:4529},0).wait(19).to({startPosition:4548},0).to({rotation:-11.4521,startPosition:4555},7,cjs.Ease.quadInOut).wait(185).to({startPosition:4740},0).to({rotation:0,startPosition:4748},8,cjs.Ease.quadInOut).wait(31).to({startPosition:4779},0).wait(1).to({startPosition:4780},0).wait(33).to({startPosition:4813},0).to({rotation:-11.4521,startPosition:4820},7,cjs.Ease.quadInOut).wait(103).to({startPosition:4923},0).to({rotation:0,startPosition:4931},8,cjs.Ease.quadInOut).wait(51).to({startPosition:4982},0).wait(1).to({startPosition:4983},0).wait(14).to({startPosition:4997},0).to({rotation:-11.4521,startPosition:5004},7,cjs.Ease.quadInOut).wait(71).to({startPosition:5075},0).to({rotation:0,startPosition:5083},8,cjs.Ease.quadInOut).wait(51).to({startPosition:5134},0).to({rotation:-11.4521,startPosition:5141},7,cjs.Ease.quadInOut).wait(58).to({startPosition:5199},0).to({rotation:0,startPosition:5207},8,cjs.Ease.quadInOut).wait(17));
	
		// Aviva_Body
		this.instance_1 = new lib.AvivaBody("single",1);
		this.instance_1.setTransform(160.95,363.15,1,1,0,0,0,133,163.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({startPosition:1},0).to({scaleX:1.0215,scaleY:0.9756,skewX:1.3882,x:160.8,y:363},30,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,skewX:0,x:160.95,y:363.15},30,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).wait(110).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(120).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(98).to({startPosition:1},0).to({y:373.15},6,cjs.Ease.quadInOut).wait(10).to({startPosition:1},0).to({y:363.15},6,cjs.Ease.quadInOut).wait(62).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(6).to({startPosition:1},0).to({regY:163.6,scaleY:1.0617,y:363.65},4,cjs.Ease.quadInOut).to({regY:163.5,scaleY:1,y:363.15},4,cjs.Ease.quadInOut).wait(4).to({startPosition:1},0).wait(57).to({startPosition:1},0).to({scaleY:1.0004,skewX:1.7052,x:165.85},10,cjs.Ease.quadInOut).wait(112).to({startPosition:1},0).to({scaleY:1,skewX:0,x:160.95},9,cjs.Ease.quadInOut).wait(1).to({startPosition:1},0).wait(7).to({startPosition:1},0).wait(216).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(34).to({startPosition:1},0).to({regY:163.6,scaleY:1.0679,y:364.7},6,cjs.Ease.quadInOut).to({regY:163.5,scaleY:1,y:363.15},6,cjs.Ease.quadInOut).wait(123).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(299).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(138).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(276).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(56).to({startPosition:1},0).to({scaleX:0.9913,scaleY:1.0555,x:161,y:362.55},7,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,x:160.95,y:363.15},6,cjs.Ease.quadInOut).wait(138).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(309).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(161).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(249).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(216).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(288).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(156).to({startPosition:1},0).to({regX:133.1,regY:163.6,scaleX:0.9677,scaleY:1.0617,x:161.05,y:363.65},6).to({regX:133,regY:163.5,scaleX:1,scaleY:1,x:160.95,y:363.15},6).wait(27).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(209).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(285).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(238).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(197).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(166).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(250).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(202).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(241));
	
		// Aviva_Pony_Tail
		this.instance_2 = new lib.AvivaPonyTail("synched",0);
		this.instance_2.setTransform(137.95,193.75);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({startPosition:0},0).to({rotation:2.6754,x:139.2,y:194.55},30,cjs.Ease.quadInOut).to({rotation:0,x:137.95,y:193.75},30,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(8).to({startPosition:0},0).to({rotation:-14.1978},10,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-9.9982,x:138.05,y:193.85},3,cjs.Ease.quadInOut).wait(80).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:137.95,y:193.75},9).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).to({rotation:-22.2209,x:141.3,y:197.7},8,cjs.Ease.quadInOut).to({rotation:-14.993,x:141.35,y:197.65},4,cjs.Ease.quadInOut).wait(83).to({startPosition:0},0).to({rotation:3.4529,x:137.95,y:193.75},7,cjs.Ease.quadInOut).to({rotation:0},4,cjs.Ease.quadInOut).wait(7).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8).to({startPosition:0},0).to({rotation:-22.2209,x:141.3,y:197.7},8,cjs.Ease.quadInOut).to({rotation:-14.993,x:141.35,y:197.65},4,cjs.Ease.quadInOut).wait(54).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:3.4529,x:137.95,y:193.75},7,cjs.Ease.quadInOut).to({rotation:0},4,cjs.Ease.quadInOut).wait(11).to({startPosition:0},0).to({y:203.75},6,cjs.Ease.quadInOut).wait(10).to({startPosition:0},0).to({y:193.75},6,cjs.Ease.quadInOut).wait(62).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(6).to({startPosition:0},0).to({scaleY:1.0403,rotation:-2.7408,y:183.75},4,cjs.Ease.quadInOut).to({scaleY:0.95,rotation:4.7375,y:193.75},4,cjs.Ease.quadInOut).to({scaleY:1,rotation:0},4,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-15.9221,x:139.85,y:196.1},10,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:-8.4409,x:139.7,y:196.05},6,cjs.Ease.quadInOut).wait(41).to({startPosition:0},0).to({regX:0.1,scaleX:1.0043,scaleY:1.0062,rotation:0,skewX:5.7477,skewY:14.0432,x:149.65,y:196},10,cjs.Ease.quadInOut).to({regY:0.1,scaleY:0.9961,skewX:7.4747,skewY:5.8357,y:196.15},5,cjs.Ease.quadInOut).wait(65).to({skewY:5.8357},0).to({regX:0.2,regY:0,skewX:1.4985,skewY:-0.1402,x:153.5,y:199.35},7,cjs.Ease.quadIn).to({regY:0.1,skewX:-6.9828,skewY:-8.6231,y:199.45},5,cjs.Ease.quadOut).wait(30).to({skewX:-6.9828},0).to({regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:0,x:137.95,y:193.75},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).to({regX:0.1,regY:0.1,rotation:1.3343,x:145.55,y:196.9},10,cjs.Ease.quadIn).to({regX:0,regY:0,rotation:-11.4396,x:140.45,y:196.8},6,cjs.Ease.quadOut).wait(77).to({startPosition:0},0).to({regX:0.2,regY:0.4,scaleX:0.9976,scaleY:1.0023,rotation:0,skewX:0.9813,skewY:1.3708,x:142.35,y:182.5},8,cjs.Ease.quadInOut).to({regX:0.1,regY:0.2,scaleX:1,scaleY:1.0024,skewX:-1.4899,skewY:-5.448,x:142.25,y:182.3},5,cjs.Ease.quadInOut).wait(101).to({startPosition:0},0).to({regX:0,regY:0,scaleY:1,skewX:0,skewY:0,x:137.95,y:193.75},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(34).to({startPosition:0},0).to({scaleY:1.0595,rotation:-5.2307,y:185.15},6,cjs.Ease.quadInOut).to({scaleY:0.9202,rotation:4.4878,y:191.8},6,cjs.Ease.quadInOut).to({scaleY:1,rotation:0,y:193.75},6,cjs.Ease.quadInOut).wait(13).to({startPosition:0},0).to({regX:0.1,regY:0.1,rotation:-4.2179,x:141.5,y:197.8},7,cjs.Ease.quadIn).to({regX:0,regY:0,rotation:-15.1866,x:141.4,y:197.65},6,cjs.Ease.quadOut).wait(81).to({startPosition:0},0).to({rotation:0,x:137.95,y:193.75},10,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(37).to({startPosition:0},0).to({rotation:-17.2297},8,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-11.0085,x:138.05,y:193.8},5,cjs.Ease.quadInOut).wait(63).to({startPosition:0},0).to({rotation:7.9679,x:138.1,y:193.75},9,cjs.Ease.quadInOut).to({regY:0.2,rotation:2.5205,y:193.85},4,cjs.Ease.quadInOut).wait(124).to({startPosition:0},0).to({rotation:-20.4664},11,cjs.Ease.quadInOut).to({rotation:-13.5197,x:138.15,y:193.9},5,cjs.Ease.quadInOut).wait(21).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:137.95,y:193.75},12,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(10).to({startPosition:0},0).to({rotation:-23.2026},10,cjs.Ease.quadInOut).to({rotation:-13.7233,x:138},5,cjs.Ease.quadInOut).wait(87).to({startPosition:0},0).to({rotation:3.9839,x:138.05,y:193.8},10,cjs.Ease.quadInOut).to({rotation:0,x:137.95,y:193.75},7,cjs.Ease.quadInOut).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(49).to({startPosition:0},0).to({rotation:-23.232},10,cjs.Ease.quadInOut).to({rotation:-13.5426},4,cjs.Ease.quadInOut).wait(59).to({startPosition:0},0).to({rotation:6.1731,y:193.7},9,cjs.Ease.quadInOut).to({rotation:0.4293},5,cjs.Ease.quadInOut).wait(28).to({rotation:0.4293},0).to({regY:0.1,rotation:-14.5494,x:138,y:193.8},7).to({regX:0.1,rotation:-9.337,x:138.05,y:193.75},4).wait(42).to({startPosition:0},0).to({regY:0.2,rotation:9.6197,y:193.8},10,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,rotation:6.8782,x:138.1},5,cjs.Ease.quadInOut).wait(35).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:137.95,y:193.75},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(10).to({startPosition:0},0).to({rotation:-17.9699},9,cjs.Ease.quadInOut).to({rotation:-9.7639,y:193.7},4,cjs.Ease.quadInOut).wait(34).to({startPosition:0},0).to({regX:0.2,regY:0.4,scaleX:0.9624,scaleY:1.0462,rotation:-12.0009,x:138.4,y:185.05},8,cjs.Ease.quadInOut).to({regX:0.1,regY:0.2,scaleX:1.0851,scaleY:0.9519,rotation:0,skewX:-9.7637,skewY:-5.9117,x:137.85,y:192.7},6,cjs.Ease.quadInOut).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:-9.7639,skewX:0,skewY:0,x:137.95,y:193.7},5,cjs.Ease.quadInOut).wait(15).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleY:1.0028,rotation:0,skewX:12.2379,skewY:7.9659,x:138.05,y:193.8},8,cjs.Ease.quadInOut).to({scaleY:1.0005,skewX:-0.443,skewY:1.5066},5,cjs.Ease.quadInOut).wait(32).to({skewX:-0.443,skewY:1.5066},0).to({skewX:-14.9688,skewY:-13.02,x:138.15,y:193.85},9,cjs.Ease.quadInOut).to({regX:0.2,regY:0.2,skewX:-9.7206,skewY:-7.7702,x:138.2},5,cjs.Ease.quadInOut).wait(46).to({startPosition:0},0).to({regX:0,regY:0,scaleY:1,skewX:0,skewY:0,x:137.95,y:193.75},11,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(35).to({startPosition:0},0).to({rotation:-14.7404},10,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-6.7572,x:138.05,y:193.85},5,cjs.Ease.quadInOut).wait(45).to({startPosition:0},0).to({rotation:3.2322},8,cjs.Ease.quadInOut).to({rotation:-2.7157,y:193.9},5,cjs.Ease.quadInOut).wait(73).to({startPosition:0},0).to({regX:0.2,scaleX:0.9999,scaleY:0.9999,rotation:-15.9392,x:138.2},9,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1,rotation:-10.2056,x:138.15},5,cjs.Ease.quadInOut).wait(65).to({startPosition:0},0).to({regX:0,regY:0,rotation:6.0103,x:138,y:193.75},7,cjs.Ease.quadInOut).to({rotation:0,x:137.95},5,cjs.Ease.quadInOut).wait(37).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(18).to({startPosition:0},0).to({rotation:-15.6864},8,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-9.9309,x:138.05,y:193.85},5,cjs.Ease.quadInOut).wait(106).to({startPosition:0},0).to({regX:0,regY:0,rotation:2.7393,x:137.95,y:193.75},9,cjs.Ease.quadInOut).to({rotation:0},5,cjs.Ease.quadInOut).wait(10).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(69).to({startPosition:0},0).to({rotation:-9.7469},9,cjs.Ease.quadInOut).to({rotation:-6.0146},4,cjs.Ease.quadInOut).wait(144).to({startPosition:0},0).to({rotation:4.4545},8,cjs.Ease.quadInOut).to({rotation:0},4,cjs.Ease.quadInOut).wait(11).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(37).to({startPosition:0},0).to({rotation:-12.7138},9,cjs.Ease.quadInOut).to({rotation:-8.9949},5,cjs.Ease.quadInOut).wait(55).to({startPosition:0},0).to({rotation:3.7114},8).to({rotation:-2.2711},5).wait(8).to({rotation:-2.2711},0).to({rotation:-10.0101},8,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,rotation:-6.3043,x:138},3,cjs.Ease.quadInOut).wait(13).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,rotation:0.1539,x:138.1,y:193.85},8,cjs.Ease.quadInOut).to({scaleX:0.9999,scaleY:0.9999,rotation:-2.5687},5,cjs.Ease.quadInOut).wait(14).to({startPosition:0},0).to({rotation:-12.2891,y:193.9},7,cjs.Ease.quadInOut).to({regX:0.2,rotation:-8.2968,x:138.2,y:193.85},4,cjs.Ease.quadInOut).wait(18).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:137.95,y:193.75},9,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(15).to({startPosition:0},0).to({rotation:-11.2345},9,cjs.Ease.quadInOut).to({rotation:-8.4941},4,cjs.Ease.quadInOut).wait(48).to({startPosition:0},0).to({rotation:1.7506},9,cjs.Ease.quadInOut).to({rotation:-1.4926},5,cjs.Ease.quadInOut).wait(64).to({startPosition:0},0).to({rotation:-12.7274},9,cjs.Ease.quadInOut).to({rotation:-8.2274,y:193.7},5,cjs.Ease.quadInOut).wait(106).to({startPosition:0},0).to({rotation:3.997,y:193.75},8,cjs.Ease.quadInOut).to({rotation:0},6,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(13).to({startPosition:0},0).to({rotation:-11.7144},8,cjs.Ease.quadInOut).to({rotation:-7.7223},4,cjs.Ease.quadInOut).wait(76).to({startPosition:0},0).to({rotation:-1.9876,x:138},8,cjs.Ease.quadInOut).to({rotation:-4.9899},5,cjs.Ease.quadInOut).wait(42).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:1.004,scaleY:1.0623,rotation:0,skewX:-4.9895,skewY:-10.133,x:138.1,y:183.85},6).to({regX:0.2,regY:0.2,scaleX:1,scaleY:0.9477,skewX:-17.3719,skewY:-13.6948,x:138.25,y:193.9},6).to({regX:0.1,regY:0.1,scaleY:1,rotation:-4.7819,skewX:0,skewY:0,x:138.1,y:193.85},5,cjs.Ease.quadInOut).to({rotation:-8.4734},4,cjs.Ease.quadInOut).wait(8).to({startPosition:0},0).to({regX:0,regY:0,rotation:0,x:137.95,y:193.75},10,cjs.Ease.quadInOut).wait(1).to({startPosition:0},0).wait(12).to({startPosition:0},0).to({rotation:-9.4738},7,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-6.4711,x:138.05,y:193.85},4,cjs.Ease.quadInOut).wait(86).to({startPosition:0},0).to({rotation:3.2751,x:138.1},8,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:137.95,y:193.75},4,cjs.Ease.quadInOut).wait(88).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(18).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:-9.4738},7,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-6.4711,x:138.05,y:193.85},4,cjs.Ease.quadInOut).wait(150).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:3.2751,x:138.1},8,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:137.95,y:193.75},4,cjs.Ease.quadInOut).wait(90).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(69).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:-9.4738},7,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-6.4711,x:138.05,y:193.85},4,cjs.Ease.quadInOut).wait(123).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:3.2751,x:138.1},8,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:137.95,y:193.75},4,cjs.Ease.quadInOut).wait(19).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:-9.4738},7,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-6.4711,x:138.05,y:193.85},4,cjs.Ease.quadInOut).wait(143).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:3.2751,x:138.1},8,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:137.95,y:193.75},4,cjs.Ease.quadInOut).wait(15).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(21).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:-9.4738},7,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-6.4711,x:138.05,y:193.85},4,cjs.Ease.quadInOut).wait(88).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:3.2751,x:138.1},8,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:137.95,y:193.75},4,cjs.Ease.quadInOut).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(19).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:-9.4738},7,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-6.4711,x:138.05,y:193.85},4,cjs.Ease.quadInOut).wait(179).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:3.2751,x:138.1},8,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:137.95,y:193.75},4,cjs.Ease.quadInOut).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(33).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:-9.4738},7,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-6.4711,x:138.05,y:193.85},4,cjs.Ease.quadInOut).wait(97).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:3.2751,x:138.1},8,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:137.95,y:193.75},4,cjs.Ease.quadInOut).wait(45).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:-9.4738},7,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-6.4711,x:138.05,y:193.85},4,cjs.Ease.quadInOut).wait(65).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:3.2751,x:138.1},8,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:137.95,y:193.75},4,cjs.Ease.quadInOut).wait(45).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:-9.4738},7,cjs.Ease.quadInOut).to({regX:0.1,regY:0.1,rotation:-6.4711,x:138.05,y:193.85},4,cjs.Ease.quadInOut).wait(52).to({startPosition:0},0).wait(2).to({startPosition:0},0).to({rotation:3.2751,x:138.1},8,cjs.Ease.quadInOut).to({regX:0,regY:0,rotation:0,x:137.95,y:193.75},4,cjs.Ease.quadInOut).wait(11));
	
		this._renderFirstFrame();
	
	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(155.4,272.5,149.1,93.69999999999999);
	// library properties:
	lib.properties = {
		id: '27B2C2A17C724CB6AC3B5D1C9C04FFB9',
		width: 305,
		height: 545,
		fps: 24,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [
			{src:"images/animation_atlas_1.png", id:"animation_atlas_1"}
		],
		preloads: []
	};
	
	
	
	// bootstrap callback support:
	
	(lib.Stage = function(canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();
	
	p.setAutoPlay = function(autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
	
	p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
	
	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if(!an.bootstrapListeners) {
		an.bootstrapListeners=[];
	}
	
	an.bootstrapCallback=function(fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if(an.bootcompsLoaded.length > 0) {
			for(var i=0; i<an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};
	
	an.compositions = an.compositions || {};
	an.compositions['27B2C2A17C724CB6AC3B5D1C9C04FFB9'] = {
		getStage: function() { return exportRoot.stage; },
		getLibrary: function() { return lib; },
		getSpriteSheet: function() { return ss; },
		getImages: function() { return img; }
	};
	
	an.compositionLoaded = function(id) {
		an.bootcompsLoaded.push(id);
		for(var j=0; j<an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}
	
	an.getComposition = function(id) {
		return an.compositions[id];
	}
	
	
	an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}
			domContainers[0].width = w * pRatio * sRatio;			
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function(container) {				
				container.style.width = w * sRatio + 'px';				
				container.style.height = h * sRatio + 'px';			
			});
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	an.handleSoundStreamOnTick = function(event) {
		if(!event.paused){
			var stageChild = stage.getChildAt(0);
			if(!stageChild.paused || stageChild.ignorePause){
				stageChild.syncStreamSounds();
			}
		}
	}
	
	
	})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
	var createjs, AdobeAn;
	