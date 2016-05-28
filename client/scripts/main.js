/* eslint-disable */

queue()
  .defer(d3.csv, './data/data.csv')
  // .defer(d3.csv, './data/runDownAll2.csv')
  .await(drawAll);

function drawAll(error,data){

	runUp(d3.select('#runUp'),data);

	var originalWidth = window.innerWidth;

	d3.select(window).on('resize',function(){
		if(window.innerWidth != originalWidth){
			runUp(d3.select('#runUp'),data);
		}
	});

}

/* eslint-enable */