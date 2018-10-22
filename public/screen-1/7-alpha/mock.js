const channel = new BroadcastChannel('brfv4-faces')
const decompressFace = data => ({
	...data,
	points: data.vertices.reduce((result, value, index) => {
		if(index % 2){
			result[result.length - 1].y = value
		}else{
			result.push({x: value})
		}
		return result
	}, [])
})

const publish = faces => {
	channel.postMessage(faces.map(decompressFace))
}

const data = [{"vertices":[209.46409606933594,232.3045196533203,207.5349578857422,249.22787475585938,207.75518798828125,265.6482849121094,208.00880432128906,287.2930908203125,213.16375732421875,311.2391357421875,218.36631774902344,327.9627380371094,230.63482666015625,342.5182800292969,253.1343994140625,357.65521240234375,277.8800964355469,361.1609191894531,302.5447998046875,360.32745361328125,327.1473693847656,352.261474609375,345.085693359375,340.7082214355469,358.6844177246094,325.5057067871094,368.1351013183594,305.7264099121094,372.4892578125,285.9344787597656,374.56121826171875,266.7403564453125,376.5682373046875,243.85198974609375,223.95986938476562,200.25608825683594,231.48793029785156,188.3095703125,244.2706298828125,182.0235595703125,258.43414306640625,182.63414001464844,272.68096923828125,188.5711669921875,307.95111083984375,190.82852172851562,323.5848388671875,186.0368194580078,339.31292724609375,185.66409301757812,353.514404296875,193.85675048828125,361.6120910644531,209.58595275878906,287.6207580566406,213.92787170410156,286.09820556640625,223.65780639648438,284.8973693847656,232.1929931640625,282.8995666503906,242.52076721191406,269.8988037109375,265.1753234863281,276.12994384765625,266.28387451171875,283.5351867675781,268.1866760253906,291.1672058105469,267.3800964355469,298.947265625,266.0387268066406,237.8880615234375,218.057861328125,245.76193237304688,208.84701538085938,257.0279541015625,208.50970458984375,267.23040771484375,218.79788208007812,256.18896484375,220.79391479492188,245.21278381347656,221.01058959960938,311.994873046875,221.5620574951172,319.9609680175781,211.26885986328125,332.33148193359375,211.92520141601562,341.5737609863281,223.085693359375,332.1531066894531,224.8096466064453,320.174560546875,224.027587890625,251.263671875,302.18408203125,261.88616943359375,290.02496337890625,274.1103820800781,284.3030700683594,281.938720703125,286.9825744628906,289.6567687988281,284.6735534667969,301.7353820800781,291.49591064453125,312.9255676269531,305.01617431640625,301.4956970214844,309.08355712890625,288.269775390625,310.5415954589844,280.7677001953125,310.80230712890625,271.72015380859375,309.61358642578125,260.34576416015625,307.3381042480469,256.2913818359375,301.2603454589844,273.4644470214844,297.3219299316406,281.69757080078125,297.4084167480469,289.1200256347656,297.6184997558594,307.5411376953125,303.69683837890625,288.7533874511719,298.2587890625,281.4794006347656,298.2638854980469,273.2061767578125,297.95953369140625],"scale":134.7091827392578,"points":[{"x":209.46409606933594,"y":232.3045196533203},{"x":207.5349578857422,"y":249.22787475585938},{"x":207.75518798828125,"y":265.6482849121094},{"x":208.00880432128906,"y":287.2930908203125},{"x":213.16375732421875,"y":311.2391357421875},{"x":218.36631774902344,"y":327.9627380371094},{"x":230.63482666015625,"y":342.5182800292969},{"x":253.1343994140625,"y":357.65521240234375},{"x":277.8800964355469,"y":361.1609191894531},{"x":302.5447998046875,"y":360.32745361328125},{"x":327.1473693847656,"y":352.261474609375},{"x":345.085693359375,"y":340.7082214355469},{"x":358.6844177246094,"y":325.5057067871094},{"x":368.1351013183594,"y":305.7264099121094},{"x":372.4892578125,"y":285.9344787597656},{"x":374.56121826171875,"y":266.7403564453125},{"x":376.5682373046875,"y":243.85198974609375},{"x":223.95986938476562,"y":200.25608825683594},{"x":231.48793029785156,"y":188.3095703125},{"x":244.2706298828125,"y":182.0235595703125},{"x":258.43414306640625,"y":182.63414001464844},{"x":272.68096923828125,"y":188.5711669921875},{"x":307.95111083984375,"y":190.82852172851562},{"x":323.5848388671875,"y":186.0368194580078},{"x":339.31292724609375,"y":185.66409301757812},{"x":353.514404296875,"y":193.85675048828125},{"x":361.6120910644531,"y":209.58595275878906},{"x":287.6207580566406,"y":213.92787170410156},{"x":286.09820556640625,"y":223.65780639648438},{"x":284.8973693847656,"y":232.1929931640625},{"x":282.8995666503906,"y":242.52076721191406},{"x":269.8988037109375,"y":265.1753234863281},{"x":276.12994384765625,"y":266.28387451171875},{"x":283.5351867675781,"y":268.1866760253906},{"x":291.1672058105469,"y":267.3800964355469},{"x":298.947265625,"y":266.0387268066406},{"x":237.8880615234375,"y":218.057861328125},{"x":245.76193237304688,"y":208.84701538085938},{"x":257.0279541015625,"y":208.50970458984375},{"x":267.23040771484375,"y":218.79788208007812},{"x":256.18896484375,"y":220.79391479492188},{"x":245.21278381347656,"y":221.01058959960938},{"x":311.994873046875,"y":221.5620574951172},{"x":319.9609680175781,"y":211.26885986328125},{"x":332.33148193359375,"y":211.92520141601562},{"x":341.5737609863281,"y":223.085693359375},{"x":332.1531066894531,"y":224.8096466064453},{"x":320.174560546875,"y":224.027587890625},{"x":251.263671875,"y":302.18408203125},{"x":261.88616943359375,"y":290.02496337890625},{"x":274.1103820800781,"y":284.3030700683594},{"x":281.938720703125,"y":286.9825744628906},{"x":289.6567687988281,"y":284.6735534667969},{"x":301.7353820800781,"y":291.49591064453125},{"x":312.9255676269531,"y":305.01617431640625},{"x":301.4956970214844,"y":309.08355712890625},{"x":288.269775390625,"y":310.5415954589844},{"x":280.7677001953125,"y":310.80230712890625},{"x":271.72015380859375,"y":309.61358642578125},{"x":260.34576416015625,"y":307.3381042480469},{"x":256.2913818359375,"y":301.2603454589844},{"x":273.4644470214844,"y":297.3219299316406},{"x":281.69757080078125,"y":297.4084167480469},{"x":289.1200256347656,"y":297.6184997558594},{"x":307.5411376953125,"y":303.69683837890625},{"x":288.7533874511719,"y":298.2587890625},{"x":281.4794006347656,"y":298.2638854980469},{"x":273.2061767578125,"y":297.95953369140625}],"rotationX":-0.09630736708641052,"rotationY":0.06694721430540085,"rotationZ":0.08456462621688843},{"vertices":[378.2375793457031,190.40032958984375,376.7026062011719,213.6356964111328,378.1416931152344,239.518798828125,381.6788635253906,264.07647705078125,392.9697570800781,285.6124572753906,414.37921142578125,301.6112976074219,442.2394104003906,314.57818603515625,473.5398864746094,323.68084716796875,506.53997802734375,325.60174560546875,535.0269165039062,321.6775817871094,557.2073364257812,309.1286926269531,570.3307495117188,291.9767150878906,579.47021484375,270.455810546875,583.4038696289062,247.2677764892578,585.7210693359375,226.3706817626953,584.5175170898438,205.6812744140625,579.4397583007812,184.1311492919922,413.0384826660156,136.23281860351562,427.0281066894531,123.31207275390625,444.6453857421875,115.56621551513672,464.0278015136719,114.9738998413086,482.3701477050781,121.58770751953125,525.06396484375,122.48271179199219,539.2037963867188,118.87903594970703,552.1348876953125,121.068603515625,564.2474365234375,128.12411499023438,570.8031005859375,139.5782012939453,505.8973083496094,151.1402130126953,508.216552734375,160.53292846679688,511.0063171386719,168.35630798339844,514.2685546875,177.9179229736328,487.9322509765625,209.75538635253906,498.6704406738281,211.65382385253906,510.1048583984375,212.97723388671875,518.0377197265625,212.41989135742188,524.6702880859375,210.0837860107422,433.7215576171875,160.7489013671875,445.5920104980469,151.14080810546875,459.6452941894531,149.7178497314453,471.848876953125,160.2140655517578,459.1274108886719,162.46002197265625,445.59381103515625,163.04087829589844,524.6062622070312,162.77432250976562,536.9371337890625,153.19192504882812,550.5838012695312,154.867919921875,558.0929565429688,166.59373474121094,549.5455322265625,167.7537384033203,536.8719482421875,165.95030212402344,466.15924072265625,255.47116088867188,484.64349365234375,238.1876983642578,501.5674743652344,229.9454345703125,509.455078125,233.4081268310547,520.3089599609375,230.79945373535156,532.95947265625,240.17140197753906,543.38134765625,258.6387939453125,532.65234375,263.78521728515625,517.7258911132812,264.99713134765625,508.5189514160156,265.0395812988281,499.4914855957031,263.6514587402344,483.3634338378906,260.4510498046875,472.3193664550781,254.58485412597656,501.4834899902344,247.60519409179688,509.8829040527344,247.55361938476562,519.6577758789062,248.08163452148438,537.5633544921875,256.4880065917969,518.4738159179688,249.3170623779297,508.8232421875,249.08775329589844,500.93902587890625,248.67648315429688],"scale":162.64639282226562,"points":[{"x":378.2375793457031,"y":190.40032958984375},{"x":376.7026062011719,"y":213.6356964111328},{"x":378.1416931152344,"y":239.518798828125},{"x":381.6788635253906,"y":264.07647705078125},{"x":392.9697570800781,"y":285.6124572753906},{"x":414.37921142578125,"y":301.6112976074219},{"x":442.2394104003906,"y":314.57818603515625},{"x":473.5398864746094,"y":323.68084716796875},{"x":506.53997802734375,"y":325.60174560546875},{"x":535.0269165039062,"y":321.6775817871094},{"x":557.2073364257812,"y":309.1286926269531},{"x":570.3307495117188,"y":291.9767150878906},{"x":579.47021484375,"y":270.455810546875},{"x":583.4038696289062,"y":247.2677764892578},{"x":585.7210693359375,"y":226.3706817626953},{"x":584.5175170898438,"y":205.6812744140625},{"x":579.4397583007812,"y":184.1311492919922},{"x":413.0384826660156,"y":136.23281860351562},{"x":427.0281066894531,"y":123.31207275390625},{"x":444.6453857421875,"y":115.56621551513672},{"x":464.0278015136719,"y":114.9738998413086},{"x":482.3701477050781,"y":121.58770751953125},{"x":525.06396484375,"y":122.48271179199219},{"x":539.2037963867188,"y":118.87903594970703},{"x":552.1348876953125,"y":121.068603515625},{"x":564.2474365234375,"y":128.12411499023438},{"x":570.8031005859375,"y":139.5782012939453},{"x":505.8973083496094,"y":151.1402130126953},{"x":508.216552734375,"y":160.53292846679688},{"x":511.0063171386719,"y":168.35630798339844},{"x":514.2685546875,"y":177.9179229736328},{"x":487.9322509765625,"y":209.75538635253906},{"x":498.6704406738281,"y":211.65382385253906},{"x":510.1048583984375,"y":212.97723388671875},{"x":518.0377197265625,"y":212.41989135742188},{"x":524.6702880859375,"y":210.0837860107422},{"x":433.7215576171875,"y":160.7489013671875},{"x":445.5920104980469,"y":151.14080810546875},{"x":459.6452941894531,"y":149.7178497314453},{"x":471.848876953125,"y":160.2140655517578},{"x":459.1274108886719,"y":162.46002197265625},{"x":445.59381103515625,"y":163.04087829589844},{"x":524.6062622070312,"y":162.77432250976562},{"x":536.9371337890625,"y":153.19192504882812},{"x":550.5838012695312,"y":154.867919921875},{"x":558.0929565429688,"y":166.59373474121094},{"x":549.5455322265625,"y":167.7537384033203},{"x":536.8719482421875,"y":165.95030212402344},{"x":466.15924072265625,"y":255.47116088867188},{"x":484.64349365234375,"y":238.1876983642578},{"x":501.5674743652344,"y":229.9454345703125},{"x":509.455078125,"y":233.4081268310547},{"x":520.3089599609375,"y":230.79945373535156},{"x":532.95947265625,"y":240.17140197753906},{"x":543.38134765625,"y":258.6387939453125},{"x":532.65234375,"y":263.78521728515625},{"x":517.7258911132812,"y":264.99713134765625},{"x":508.5189514160156,"y":265.0395812988281},{"x":499.4914855957031,"y":263.6514587402344},{"x":483.3634338378906,"y":260.4510498046875},{"x":472.3193664550781,"y":254.58485412597656},{"x":501.4834899902344,"y":247.60519409179688},{"x":509.8829040527344,"y":247.55361938476562},{"x":519.6577758789062,"y":248.08163452148438},{"x":537.5633544921875,"y":256.4880065917969},{"x":518.4738159179688,"y":249.3170623779297},{"x":508.8232421875,"y":249.08775329589844},{"x":500.93902587890625,"y":248.67648315429688}],"rotationX":-0.19090448319911957,"rotationY":-0.20592355728149414,"rotationZ":-0.024923162534832954},{"vertices":[281.5798034667969,195.87939453125,281.502197265625,212.0604705810547,282.364013671875,232.13819885253906,282.73492431640625,252.8641357421875,288.6376647949219,274.282470703125,302.1889953613281,293.2748107910156,322.729736328125,305.8123474121094,351.0624694824219,315.08538818359375,382.0819396972656,315.2707214355469,412.3166809082031,311.4728088378906,437.4238586425781,301.7288818359375,456.4249267578125,288.2945861816406,468.8009338378906,270.82080078125,474.3428649902344,249.906005859375,474.4378662109375,228.07679748535156,473.63134765625,206.726806640625,471.40899658203125,185.23593139648438,297.80560302734375,147.94287109375,306.2085266113281,130.98333740234375,320.7575378417969,121.03126525878906,340.0291442871094,118.26473236083984,358.53179931640625,123.8479995727539,393.957275390625,123.5992660522461,410.8977966308594,116.11033630371094,428.7084655761719,113.96060180664062,444.79132080078125,120.96406555175781,455.39874267578125,135.7637939453125,375.9775390625,148.2801971435547,376.39447021484375,156.90927124023438,377.23272705078125,165.8895263671875,377.0357360839844,175.52366638183594,363.0633850097656,205.1588592529297,370.27874755859375,207.53500366210938,379.6832580566406,209.06199645996094,386.6351318359375,207.41966247558594,393.9641418457031,204.61312866210938,317.639404296875,164.56207275390625,325.74725341796875,152.44313049316406,339.6014099121094,150.55520629882812,352.5865478515625,159.69973754882812,340.104736328125,163.80999755859375,326.76312255859375,166.13906860351562,400.117919921875,157.50726318359375,411.4338684082031,144.6511993408203,426.0068054199219,145.19273376464844,435.9622802734375,156.70860290527344,426.9440002441406,160.73167419433594,413.0053405761719,160.68739318847656,342.5606689453125,252.57020568847656,354.47198486328125,235.0952606201172,369.0473327636719,226.65072631835938,378.8233947753906,228.946533203125,387.70599365234375,225.9102020263672,400.937744140625,232.3914031982422,414.1095886230469,249.3227996826172,401.062255859375,253.92393493652344,387.48065185546875,255.7074737548828,378.9814758300781,256.3882141113281,368.4829406738281,256.4280700683594,354.1782531738281,255.50787353515625,348.4946594238281,251.23199462890625,369.6224670410156,242.3975372314453,379.2090759277344,241.78945922851562,387.5281982421875,241.59219360351562,407.2837219238281,247.84080505371094,386.919921875,242.07273864746094,378.4597473144531,243.17933654785156,368.2880554199219,243.93206787109375],"scale":154.57919311523438,"points":[{"x":281.5798034667969,"y":195.87939453125},{"x":281.502197265625,"y":212.0604705810547},{"x":282.364013671875,"y":232.13819885253906},{"x":282.73492431640625,"y":252.8641357421875},{"x":288.6376647949219,"y":274.282470703125},{"x":302.1889953613281,"y":293.2748107910156},{"x":322.729736328125,"y":305.8123474121094},{"x":351.0624694824219,"y":315.08538818359375},{"x":382.0819396972656,"y":315.2707214355469},{"x":412.3166809082031,"y":311.4728088378906},{"x":437.4238586425781,"y":301.7288818359375},{"x":456.4249267578125,"y":288.2945861816406},{"x":468.8009338378906,"y":270.82080078125},{"x":474.3428649902344,"y":249.906005859375},{"x":474.4378662109375,"y":228.07679748535156},{"x":473.63134765625,"y":206.726806640625},{"x":471.40899658203125,"y":185.23593139648438},{"x":297.80560302734375,"y":147.94287109375},{"x":306.2085266113281,"y":130.98333740234375},{"x":320.7575378417969,"y":121.03126525878906},{"x":340.0291442871094,"y":118.26473236083984},{"x":358.53179931640625,"y":123.8479995727539},{"x":393.957275390625,"y":123.5992660522461},{"x":410.8977966308594,"y":116.11033630371094},{"x":428.7084655761719,"y":113.96060180664062},{"x":444.79132080078125,"y":120.96406555175781},{"x":455.39874267578125,"y":135.7637939453125},{"x":375.9775390625,"y":148.2801971435547},{"x":376.39447021484375,"y":156.90927124023438},{"x":377.23272705078125,"y":165.8895263671875},{"x":377.0357360839844,"y":175.52366638183594},{"x":363.0633850097656,"y":205.1588592529297},{"x":370.27874755859375,"y":207.53500366210938},{"x":379.6832580566406,"y":209.06199645996094},{"x":386.6351318359375,"y":207.41966247558594},{"x":393.9641418457031,"y":204.61312866210938},{"x":317.639404296875,"y":164.56207275390625},{"x":325.74725341796875,"y":152.44313049316406},{"x":339.6014099121094,"y":150.55520629882812},{"x":352.5865478515625,"y":159.69973754882812},{"x":340.104736328125,"y":163.80999755859375},{"x":326.76312255859375,"y":166.13906860351562},{"x":400.117919921875,"y":157.50726318359375},{"x":411.4338684082031,"y":144.6511993408203},{"x":426.0068054199219,"y":145.19273376464844},{"x":435.9622802734375,"y":156.70860290527344},{"x":426.9440002441406,"y":160.73167419433594},{"x":413.0053405761719,"y":160.68739318847656},{"x":342.5606689453125,"y":252.57020568847656},{"x":354.47198486328125,"y":235.0952606201172},{"x":369.0473327636719,"y":226.65072631835938},{"x":378.8233947753906,"y":228.946533203125},{"x":387.70599365234375,"y":225.9102020263672},{"x":400.937744140625,"y":232.3914031982422},{"x":414.1095886230469,"y":249.3227996826172},{"x":401.062255859375,"y":253.92393493652344},{"x":387.48065185546875,"y":255.7074737548828},{"x":378.9814758300781,"y":256.3882141113281},{"x":368.4829406738281,"y":256.4280700683594},{"x":354.1782531738281,"y":255.50787353515625},{"x":348.4946594238281,"y":251.23199462890625},{"x":369.6224670410156,"y":242.3975372314453},{"x":379.2090759277344,"y":241.78945922851562},{"x":387.5281982421875,"y":241.59219360351562},{"x":407.2837219238281,"y":247.84080505371094},{"x":386.919921875,"y":242.07273864746094},{"x":378.4597473144531,"y":243.17933654785156},{"x":368.2880554199219,"y":243.93206787109375}],"rotationX":-0.17108410596847534,"rotationY":0.006975196767598391,"rotationZ":-0.03613943234086037}, {"vertices":[257.14306640625,353.4597473144531,256.8808898925781,368.9287109375,257.21771240234375,384.83282470703125,259.7013244628906,401.7953186035156,264.6763000488281,419.41131591796875,275.2582702636719,434.39532470703125,289.87738037109375,447.7001647949219,308.560791015625,457.58258056640625,329.0985107421875,459.5615539550781,347.6330261230469,456.7215270996094,363.68695068359375,446.4630126953125,375.1496887207031,432.4126281738281,382.6799011230469,415.2843933105469,385.4411926269531,397.6306457519531,386.8730773925781,380.8388366699219,387.6311340332031,363.59112548828125,387.3520812988281,348.0034484863281,271.7548522949219,329.32098388671875,279.34088134765625,318.6996154785156,291.22235107421875,314.5205383300781,303.86865234375,315.66912841796875,316.5108947753906,320.40618896484375,342.1914367675781,319.7185363769531,352.524169921875,314.61663818359375,363.1378479003906,312.2784423828125,374.3677062988281,315.9736633300781,380.1626892089844,325.8979797363281,329.5101623535156,337.25091552734375,329.6673583984375,348.09130859375,330.436767578125,358.2686767578125,330.9643249511719,369.2834777832031,318.0531921386719,383.5330505371094,324.14776611328125,385.1527404785156,330.5887451171875,387.037109375,336.04791259765625,385.185791015625,341.6719665527344,383.509521484375,287.6065368652344,340.7021484375,294.27984619140625,334.9808654785156,302.9875793457031,335.11187744140625,309.7969665527344,342.783203125,302.4566345214844,344.52154541015625,293.8531188964844,344.1185302734375,345.15106201171875,342.4147033691406,352.5138244628906,334.6189270019531,361.0257568359375,334.5282287597656,366.99945068359375,340.5296630859375,361.73162841796875,342.86505126953125,352.984375,343.78857421875,306.7969055175781,413.0194396972656,315.2625732421875,405.133056640625,324.9005432128906,400.74298095703125,330.5118408203125,402.997802734375,336.40606689453125,400.8697204589844,344.32794189453125,405.49237060546875,351.5779724121094,413.6410827636719,344.58294677734375,419.40911865234375,336.403564453125,421.1761474609375,330.6271667480469,421.5386657714844,324.140625,421.07684326171875,314.98394775390625,418.2447509765625,310.7256164550781,412.6632385253906,324.5811767578125,410.8177490234375,330.4578857421875,411.23944091796875,336.50238037109375,411.0252990722656,347.5680236816406,413.4462890625,336.6986083984375,410.7568664550781,330.48101806640625,411.3119201660156,324.47943115234375,410.5176696777344],"scale":108.91305541992188,"rotationX":-0.01982877403497696,"rotationY":-0.09057296067476273,"rotationZ":-0.018933042883872986},{"vertices":[17.593833923339844,275.8565979003906,16.009031295776367,297.2618713378906,15.543519020080566,317.0755310058594,16.2130184173584,339.486572265625,21.74871063232422,362.4778137207031,33.6569938659668,382.4049987792969,48.98078918457031,398.6642761230469,70.87059020996094,414.1148376464844,97.61768341064453,418.2682189941406,124.22306060791016,415.2536926269531,147.3074188232422,401.7491455078125,165.32046508789062,385.8095703125,179.62106323242188,365.2721862792969,186.63427734375,342.783203125,188.96340942382812,320.4807434082031,191.48928833007812,298.1269226074219,193.3110809326172,275.4384765625,31.338212966918945,249.72137451171875,40.82033920288086,236.55349731445312,54.98808670043945,230.82452392578125,69.89000701904297,232.8134765625,87.47217559814453,238.885498046875,123.86602020263672,239.93011474609375,138.88877868652344,233.84103393554688,154.27017211914062,231.35935974121094,170.55572509765625,235.6304168701172,179.70733642578125,248.96990966796875,104.0396499633789,262.9309387207031,102.92463684082031,276.665283203125,102.17596435546875,290.0340881347656,100.91158294677734,304.623046875,85.1922607421875,322.1726989746094,93.09957122802734,324.1319885253906,101.81974792480469,327.3663635253906,110.30130004882812,325.4389953613281,118.27912139892578,322.6892395019531,48.699398040771484,266.95343017578125,58.52043151855469,258.0998840332031,72.05292510986328,259.0686340332031,80.72034454345703,269.4891662597656,70.99211120605469,271.5282897949219,57.45771789550781,270.96417236328125,129.73223876953125,269.4991149902344,139.7075653076172,258.9910888671875,152.61087036132812,259.6682434082031,160.44927978515625,268.357177734375,152.3629608154297,272.64764404296875,140.52447509765625,272.09161376953125,68.04952239990234,360.6983947753906,78.0768051147461,351.3354187011719,90.7718276977539,345.236083984375,100.0976333618164,348.4564208984375,108.0601806640625,345.6409912109375,119.17594146728516,350.9340515136719,131.74778747558594,361.6921691894531,120.32372283935547,369.27020263671875,107.82452392578125,372.2826232910156,99.5670166015625,372.6952209472656,89.87892150878906,371.6834411621094,78.36919403076172,367.8327941894531,73.08740997314453,360.21490478515625,90.35301208496094,358.41729736328125,99.87141418457031,358.81842041015625,107.97991180419922,358.2422180175781,126.13288116455078,361.4924011230469,107.97893524169922,358.9394226074219,99.85601043701172,360.0235900878906,90.24099731445312,359.0194396972656],"scale":144.2373504638672,"rotationX":0.015138588845729828,"rotationY":-0.00017816158651839942,"rotationZ":0.024061623960733414},{"vertices":[282.0527038574219,305.0849304199219,280.02862548828125,319.65826416015625,279.7982482910156,334.5200500488281,280.3623046875,350.2850036621094,282.8942565917969,364.91314697265625,291.7190856933594,379.9613037109375,303.78961181640625,392.2978210449219,320.5586242675781,402.1072998046875,339.9293518066406,405.1854553222656,358.82537841796875,404.6507568359375,375.5408020019531,397.85870361328125,388.75494384765625,387.15423583984375,397.5588684082031,373.72857666015625,402.9256286621094,357.88165283203125,405.84161376953125,340.99859619140625,406.44598388671875,325.9837341308594,407.44329833984375,308.7351379394531,293.2981872558594,282.6439514160156,300.4527587890625,272.5557861328125,311.4093322753906,268.2977294921875,322.4554443359375,269.1889343261719,333.70123291015625,274.189453125,358.8588562011719,273.5190734863281,370.44512939453125,270.133056640625,381.2138671875,269.3193054199219,391.91943359375,273.7229309082031,397.07232666015625,282.6921081542969,345.3590087890625,290.4505615234375,344.9435119628906,298.9217834472656,344.82928466796875,307.0944519042969,344.7175598144531,315.9145812988281,332.9808349609375,331.3515930175781,338.81805419921875,332.6210632324219,344.32415771484375,334.2254943847656,349.9934997558594,333.21319580078125,355.28118896484375,332.7603759765625,310.1776428222656,293.78521728515625,314.33721923828125,288.2763977050781,320.69866943359375,286.5614929199219,328.6010437011719,295.6866149902344,322.6354675292969,297.8420715332031,314.0310363769531,296.64093017578125,365.2460021972656,297.118408203125,374.582275390625,291.4298400878906,380.41473388671875,291.8846435546875,384.6500244140625,297.38861083984375,375.1439514160156,298.4572448730469,371.0107116699219,299.09881591796875,321.56292724609375,358.20672607421875,330.3435974121094,350.49310302734375,339.0543212890625,346.6235656738281,344.50103759765625,349.0933532714844,350.21240234375,347.5164794921875,358.9231872558594,353.0123291015625,366.3431396484375,362.4639587402344,357.9960021972656,366.609130859375,348.7413330078125,367.3204345703125,342.8733825683594,366.9393310546875,337.0494689941406,365.8480529785156,328.988525390625,363.5140380859375,325.1294250488281,358.24884033203125,338.43255615234375,356.9590148925781,343.7462158203125,357.3099670410156,350.0361633300781,357.3935546875,362.5446472167969,361.64471435546875,349.4535827636719,357.4426574707031,343.5335693359375,357.5819396972656,338.09478759765625,356.4708557128906],"scale":103.16909790039062,"rotationX":-0.07618165761232376,"rotationY":-0.008676622062921524,"rotationZ":0.04924669861793518},{"vertices":[282.0527038574219,305.0849304199219,280.02862548828125,319.65826416015625,279.7982482910156,334.5200500488281,280.3623046875,350.2850036621094,282.8942565917969,364.91314697265625,291.7190856933594,379.9613037109375,303.78961181640625,392.2978210449219,320.5586242675781,402.1072998046875,339.9293518066406,405.1854553222656,358.82537841796875,404.6507568359375,375.5408020019531,397.85870361328125,388.75494384765625,387.15423583984375,397.5588684082031,373.72857666015625,402.9256286621094,357.88165283203125,405.84161376953125,340.99859619140625,406.44598388671875,325.9837341308594,407.44329833984375,308.7351379394531,293.2981872558594,282.6439514160156,300.4527587890625,272.5557861328125,311.4093322753906,268.2977294921875,322.4554443359375,269.1889343261719,333.70123291015625,274.189453125,358.8588562011719,273.5190734863281,370.44512939453125,270.133056640625,381.2138671875,269.3193054199219,391.91943359375,273.7229309082031,397.07232666015625,282.6921081542969,345.3590087890625,290.4505615234375,344.9435119628906,298.9217834472656,344.82928466796875,307.0944519042969,344.7175598144531,315.9145812988281,332.9808349609375,331.3515930175781,338.81805419921875,332.6210632324219,344.32415771484375,334.2254943847656,349.9934997558594,333.21319580078125,355.28118896484375,332.7603759765625,310.1776428222656,293.78521728515625,314.33721923828125,288.2763977050781,320.69866943359375,286.5614929199219,328.6010437011719,295.6866149902344,322.6354675292969,297.8420715332031,314.0310363769531,296.64093017578125,365.2460021972656,297.118408203125,374.582275390625,291.4298400878906,380.41473388671875,291.8846435546875,384.6500244140625,297.38861083984375,375.1439514160156,298.4572448730469,371.0107116699219,299.09881591796875,321.56292724609375,358.20672607421875,330.3435974121094,350.49310302734375,339.0543212890625,346.6235656738281,344.50103759765625,349.0933532714844,350.21240234375,347.5164794921875,358.9231872558594,353.0123291015625,366.3431396484375,362.4639587402344,357.9960021972656,366.609130859375,348.7413330078125,367.3204345703125,342.8733825683594,366.9393310546875,337.0494689941406,365.8480529785156,328.988525390625,363.5140380859375,325.1294250488281,358.24884033203125,338.43255615234375,356.9590148925781,343.7462158203125,357.3099670410156,350.0361633300781,357.3935546875,362.5446472167969,361.64471435546875,349.4535827636719,357.4426574707031,343.5335693359375,357.5819396972656,338.09478759765625,356.4708557128906],"scale":103.16909790039062,"rotationX":-0.07618165761232376,"rotationY":-0.008676622062921524,"rotationZ":0.04924669861793518}]
const animation = () => {
	setTimeout(animation, 1000)
	publish(data)
}

animation()
