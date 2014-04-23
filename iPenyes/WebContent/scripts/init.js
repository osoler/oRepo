var redirectURL = window.location.protocol + "//" + window.location.host + "/pages/Start.jsp";


if (navigator.standalone) {
	redirected = true;
	window.location.replace(redirectURL);
}
	