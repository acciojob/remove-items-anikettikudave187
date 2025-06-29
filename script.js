//your JS code here. If required.
	let dropdown=document.getElementById('colorSelect');
	let removeBtn=document.querySelector('input[type="button"]');
	
	
	removeBtn.addEventListener("click",()=>{
		const colorIdx=dropdown.selectedIndex;
	
		if(colorIdx>=0){
			dropdown.remove(colorIdx);
		}else{
			alert('list is empty');
		}
	});