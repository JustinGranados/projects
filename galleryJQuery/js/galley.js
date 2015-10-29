(function(){

	var Slider = function(itemsList, prev, next){
		this.nextBtn = next;
		this.previousBtn = prev;
		this.i = 0;
		this.elementList = itemsList;
		this.cantItems = this.elementList.children().length;

	}

	Slider.prototype = {
		constructor : Slider,
		
		goPrevious : function(){
			this.elementList;
			this.cantItems;
			this.i = this.i-1;
			if ( this.i === -1){
				this.i = this.cantItems - 1;
			}
			this.elementList.css({
				'left' : this.i * -1024 + 'px'
			});
		},

		goNext : function(){
			this.elementList;
			this.cantItems;
			this.i = this.i + 1;
			if ( this.i === this.cantItems ){
				this.i = 0;
			}
			this.elementList.css({
				'left' : this.i * -1024 + 'px'
			});
		}
	},

	addEventHandlers : function()
	{
		this.previousBtn[0].ref = this;
		this.nextBtn[0].ref = this;

		this.previousBtn.on('click', function()
		{
			this.ref.goPrevious();
		});

		this.nextBtn.on('click', function(){
			this.ref.goNext();
		});
	}
}

	var slider = new Slider( $('.itemsList') );
	slider.addEventHandlers();
	
})();