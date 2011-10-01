function Circulo(juego, x, y ) {
	this.juego = juego;
	this.x = x;
	this.y = y;
	this.remover = false;
}	
	Circulo.prototype.actualizar = function() { 
    if (this.y < this.juego.ctx.canvas.width) {
        this.y += 20;
    }
    else {
        this.y = 10;
    }
};

Circulo.prototype.dibujar = function(ctx) { 
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "black";
    ctx.rect(this.x, this.y, 50,50);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
};


