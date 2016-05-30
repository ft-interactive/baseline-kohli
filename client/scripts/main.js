/* eslint-disable */

queue()
  .defer(d3.csv, './data/data.csv')
  .defer(d3.csv, './data/data2.csv')
  .defer(d3.csv, './data/data3.csv')
  .await(drawAll);

function drawAll(error,data,data2,data3){

	runUp(d3.select('#runUp'),data);
	distributions(d3.select('#distributions'),data);
	scatters(d3.select('#scatters > div > div:nth-child(1)'),data3);
	scatters2(d3.select('#scatters > div > div:nth-child(2)'),data3);
	runDown(d3.select('#runDown'),data2);

	var originalWidth = window.innerWidth;

	d3.select(window).on('resize',function(){
		if(window.innerWidth != originalWidth){
			runUp(d3.select('#runUp'),data);
			distributions(d3.select('#distributions'),data);
			scatters(d3.select('#scatters > div > div:nth-child(1)'),data3);
			scatters2(d3.select('#scatters > div > div:nth-child(2)'),data3);
			runDown(d3.select('#runDown'),data2);
		}
	});

}

/* eslint-enable */