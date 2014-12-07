init();

function init(){
	stage = new PIXI.Stage(0x444444);
	renderer = PIXI.autoDetectRenderer(innerWidth, innerHeight);
	document.body.appendChild(renderer.view);

	fog = new PIXI.Graphics();
	stage.addChild(fog);

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
		bitches[name].update()

	drawShadows();
	stage.setChildIndex(fog, stage.children.length - 1);

	renderer.render(stage);
}
