function(){
	var httpRequest;}
function makeRequest(url){
	if (window.XMLHttpRequest){
		httpRequest = new XMLHttpRequest();
	} else if (window.ActiveXObject){
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
		try {
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
      } 
      catch (e) {
        try {
          httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        } 
        catch (e) {}
      }
    }
	if (!httpRequest){
		httpRequest.open('GET', 'http://www.example.org/some.file', true);
		httpRequest.send(null);
	}
	httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  	function alertContents() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();