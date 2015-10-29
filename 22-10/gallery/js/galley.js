(function(){
	var itemsList = document.getElementsByClassName('itemsList')[0];
	var nextBtn = document.getElementsByClassName('nextBtn')[0];
	var previousBtn = document.getElementsByClassName('previousBtn')[0];
	var cantItems = itemsList.children.length;
	var index = 0;
	
	function goPrevious(){
		//console.log('goPrevious');
		index = index - 1;
		//console.log(index);

		if(index === - 1){
			index = cantItems - 1;
			//console.log(index);
			itemsList.style.left='0';
		}
		itemsList.style.left=-1024 * index + 'px';
	}

	previousBtn.addEventListener('click', goPrevious);

	function goNext(){
		//console.log('goNext');
		index = index + 1;
		//console.log(index);

		if(index === cantItems){
			index = 0;
			itemsList.style.left='0';
		}
		itemsList.style.left=-1024 * index + 'px';
	}

	nextBtn.addEventListener('click', goNext);

	
} ());