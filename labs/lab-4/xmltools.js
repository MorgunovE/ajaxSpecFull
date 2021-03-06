// Функция преобразует xml DOM в строку
function showXML(xml){
	if (window.XMLSerializer){
		// Это не Internet Explorer
		var serializer = new XMLSerializer();
		return serializer.serializeToString(xml);
	}else if (window.ActiveXObject){
		// Это Internet Explorer
		return xml.xml;
	}else{
		return "Сериализация не поддерживается!";
	}
}

// Функция загружает требуемый XML файл в синхронном режиме
let xnlCache = {};
function loadXML(url){
	if(xnlCache[url]) return xnlCache[url];
	var reqMessage = getXmlHttpRequest();
	reqMessage.open("GET", url, false);
	reqMessage.send(null);
	xnlCache[url] = reqMessage.responseXML
	return xnlCache[url];
}