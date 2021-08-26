console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('black')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'light.css'
	}

	if(mode == 'pink'){
		document.getElementById('theme-style').href = 'pink.css'
	}
     
    if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}
	

	if(mode == 'black'){
		document.getElementById('theme-style').href = 'portfolio_srishti.css'
	}

	localStorage.setItem('theme', mode)
}