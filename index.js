//ticking clock

function tick() {
	var app = React.createElement('div', {}, 
		React.createElement('h1', {}, 'Hello world' ),
		React.createElement('h1', {}, new Date().toLocaleTimeString() ),
	);
	ReactDOM.render(
		app, 
		document.getElementById('root')
	);
}
setInterval(tick, 1000);

