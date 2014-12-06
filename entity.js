function Entity(texture) {
  PIXI.DisplayObjectContainer.call(this);
  stage.addChild(this);

  this.tex = new PIXI.Sprite(PIXI.Texture.fromImage(texture))
  this.tex.anchor = new PIXI.Point(0.5,0.5);
  this.addChild(this.tex);

  this.scale = new PIXI.Point(0.4,0.4);
}

Entity.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
