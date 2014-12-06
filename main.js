init();

function init(){
	stage = new PIXI.Stage(0x000000);
	renderer = PIXI.autoDetectRenderer(640, 480);
	document.body.appendChild(renderer.view);

	//Player
	player = new Player();
	stage.addChild(player);
	player.position.x = 350;
	player.position.y = 350;

	generator = new Generator();
	generator.start();

	requestAnimFrame( animate );

}


function animate() {
	requestAnimFrame( animate );

	player.update();

	for (var name in bitches)
		bitches[name].move()

	renderer.render(stage);
}
