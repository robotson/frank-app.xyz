var modal = document.getElementById('myModal');
var modalImg = document.getElementById("imgBox");
var link = document.getElementById("pdfLink");
var images = document.getElementsByClassName("mini");
for(var img of images){
	img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		link.href = this.dataset.pdfLink;
	}
}
// var span = document.getElementsByClassName("close")[0];
document.getElementsByClassName("close")[0].onclick = function() {
	modal.style.display = "none";
}
