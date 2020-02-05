function sideNav() {
	document.getElementById("dropbtnmd").style.opacity = "0";
	document.getElementById("sidenav").style.left = "-15px";
	//document.getElementById("sidenav").style.height = "105vh";
};

function closeSideNav() {
	document.getElementById("dropbtnmd").style.opacity = "1";
	document.getElementById("sidenav").style.left = "-300px";
};

function openNav() {
	document.getElementById("mydropdown").style.top = "15px";
	document.getElementById("dropbtn").style.opacity = "0";
	document.getElementById("dropbtnmd").style.opacity = "0";
	document.getElementById("caret").style.transform = "rotate(180deg)";
};


function closeNav() {
	document.getElementById("mydropdown").style.top = "-65px";
	document.getElementById("dropbtn").style.opacity = "1";
	document.getElementById("dropbtnmd").style.opacity = "1";
	document.getElementById("caret").style.transform = "rotate(0deg)";
};


function mouseover1() {
	/*document.getElementById("info-card1").classList.toggle("d-none");*/
	document.getElementById("info-card1").style.height = "305px";
	document.getElementById("info-card1").style.opacity = "1";	
};

function mouseout1() {
	/*document.getElementById("info-card1").classList.toggle("d-none");*/
	document.getElementById("info-card1").style.height = "0";
	document.getElementById("info-card1").style.opacity = "0";
};

function mouseover2() {
	/*document.getElementById("info-card2").classList.toggle("d-none");*/
	document.getElementById("info-card2").style.height = "305px";
	document.getElementById("info-card2").style.opacity = "1";
};

function mouseout2() {
	/*document.getElementById("info-card2").classList.toggle("d-none");*/
	document.getElementById("info-card2").style.height = "0";
	document.getElementById("info-card2").style.opacity = "0";
};


function scrollFunction() {
	let homeHeight = document.getElementById("home-background").offsetHeight;
	let y = document.documentElement.scrollTop;
	let dropDown = document.querySelector("#mydropdown").children;
	let sideNav = document.querySelector("#mysidenav").children;

	// Mobile Dropdown Header Color changes
	if (y >= homeHeight - 25 ) {
		document.getElementById("dropbtn").style.color = "black";
		document.getElementById("dropbtnmd").style.color = "black";
		document.getElementById("caret").style.color = "black";
		for (let i = 0; i <= dropDown.length - 1 ; i++) {
			dropDown[i].style.color = "black";
			dropDown[i].style.fontWeight = "bold";
		};
	} else {
		document.getElementById("dropbtn").style.color = "white";
		document.getElementById("dropbtnmd").style.color = "white";
		document.getElementById("caret").style.color = "white";
		for (let i = 0; i <= dropDown.length - 1 ; i++) {
			dropDown[i].style.color = "white";
			dropDown[i].style.fontWeight = "normal";
		};
	};

	// Desktop SideNav Color Changes
	if (y >= homeHeight - 275 ) { 
		for (let j = sideNav.length - 1; j == 2; j--) {
			sideNav[j].style.color = "black";
		};
	} else {
		for (let j = sideNav.length - 1; j == 2; j--) {
			sideNav[j].style.color = "white";
		};
	};


	if (y >= homeHeight - 190) {
		for (let j = sideNav.length - 2; j == 1; j--){
			sideNav[j].style.color = "black";
		};
	} else {
		for (let j = sideNav.length - 2; j == 1; j--) {
			sideNav[j].style.color = "white";
		};
	};


	if (y >= homeHeight - 105) {
		for (let j = 0; j == 0; j--){
			sideNav[j].style.color = "black";
		};
	} else {
		for (let j = 0; j == 0; j--) {
			sideNav[j].style.color = "white";
		};
	};

	if (y >= homeHeight - 40) {
		document.getElementById("close-side-nav").style.color = "black";
	} else {
		document.getElementById("close-side-nav").style.color = "white";
	};
};

