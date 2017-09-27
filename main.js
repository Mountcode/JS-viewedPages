 // Блок просмотренные страницы

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}



function viewedPages(){
	// Устонавливаем время на которое помним посещенные страницы
	var cookieTime = new Date(new Date().getTime() + 86400 * 1000);
	// Определяем и запоминаем страницу на которой находимся

	let currentPage = document.location;
	let currentPageName = document.getElementsByTagName("h1")[0].innerText;
	
	if(getCookie("lastPage") != undefined){
		let pagesArr = getCookie("lastPage");
		pagesArr += '///'+ currentPage;

		let pagesNamesArr = getCookie("lastPageName");
		pagesNamesArr += '///'+ currentPageName;

		document.cookie = "lastPage="+pagesArr+"; path=/;expires=" + cookieTime.toUTCString();
		document.cookie = "lastPageName="+pagesNamesArr +"; path=/;expires=" + cookieTime.toUTCString();
	}
	else{
		document.cookie = "lastPage="+currentPage+"; path=/;expires=" + cookieTime.toUTCString();
		document.cookie = "lastPageName="+currentPageName+"; path=/;expires=" + cookieTime.toUTCString();
	}

	console.log(getCookie("lastPage"));
	console.log(getCookie("lastPageName"));


	

	// создаем объект для вывода запомненных страниц

	// function rememberPage(step) {
	// 	this.step = 1;
	//  	this.pagename = getCookie('lastPageName');
	//  	this.pageurl = getCookie('lastPage');
	// }
	// var viewedPage = new rememberPage("one");

	// document.querySelectorAll('.viewed_pages_block')[0].innerHTML = `<a href="${viewedPage.pageurl}">${viewedPage.pagename}</a>`;


}


document.addEventListener("DOMContentLoaded", viewedPages);
