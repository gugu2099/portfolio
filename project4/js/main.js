$(function(){
	var n=0;
	var h;
	var total=6;

	function pageInteraction(){
		for(let i=0; i<total; i++){
			if($(".container > div").eq(i).index() <= n){
				$(".container > div").eq(i).animate({top: 0}, 500, function(){
					if(i == n){
						$(".container > div").removeClass("active");
						$(".container > div").eq(i).addClass("active");
						$(".controller li").removeClass("on");
						$(".controller li").eq(i).addClass("on");
					}
				});
			}
			else{
				$(".container > div").eq(i).animate({top: h}, 500);
			}
		}
	}

	$(window).resize(function(){
		h=$(window).height();
		pageInteraction();
	});

	$(window).trigger("resize");

	$(".container").mousewheel(function(e, delta){
		if($(".main_area").is(":animated")) return;

		if(delta > 0){ // up
			if(n > 0){
				n=n-1;
			}
		}
		else{ // down
			if(n < 5){
				n=n+1;
			}
		}

		pageInteraction();
	});
	$(".controller li").click(function(e){
		e.preventDefault();
		n=$(this).index();
		pageInteraction();
	});
});