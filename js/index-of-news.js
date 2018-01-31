function getUrlParameter(e){
  var i,t,r=decodeURIComponent(window.location.search.substring(1)),a=r.split("&");
  for(t=0;t<a.length;t++)if(i=a[t].split("="),i[0]===e)
  return void 0===i[1]||i[1]
}

$(document).ready(
  function(){
	var e=getUrlParameter("page"),t=2;
    for(i=1;i<=t;i++) e && e>=1 && e<=t && i==e && ($("#page-"+i).show(),$("#page-"+i+"-tag").html(i))});