function Entity(texture) {
  PIXI.DisplayObjectContainer.call(this);
  stage.addChild(this);

  this.tex = new PIXI.Sprite(PIXI.Texture.fromImage(texture))
  this.tex.scale = new PIXI.Point(0.2, 0.2);
  this.tex.anchor = new PIXI.Point(0.5,0.5);
  this.addChild(this.tex);
}

Entity.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
