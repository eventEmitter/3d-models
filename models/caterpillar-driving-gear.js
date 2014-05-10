function main() {   
    var emptySpace = cube([120,20,20]);
    var halfEmtySpace = union(
          emptySpace
        , emptySpace.mirroredX().translate([60,0,-26]).rotateY(-45)
        , emptySpace.mirroredX().translate([5,0,-5]).rotateY(-90)
        , emptySpace.mirroredX().translate([-20,0,52]).rotateY(-135)
    ).translate([-60,20,55]);

    var gearDiff = union(
          cube([40,50,60]).translate([-37.6,-5,31.5]).rotateY(15)
        , CSG.cylinder({                     
              start         : [0, 0, 0]
        	, end 			: [0, 60, 0]
			, radius 		: 7             
			, resolution 	: 30
		}).translate([3.5,0,31])
    );
    
    var gear = difference(
          cube([40,40,43.9])
        , gearDiff
        , gearDiff.mirroredX().translate([40,0,0])
    ).translate([0,0,100]);
    
    
    var gearGroup = union(
          gear.translate([-20,10,-70])
        , gear.mirroredX().translate([20,0,-70]).rotateY(45)
        , gear.mirroredX().translate([20,0,-70]).rotateY(90)
        , gear.mirroredX().translate([20,0,-70]).rotateY(135)
        , gear.mirroredX().translate([20,0,-70]).rotateY(180)
        , gear.mirroredX().translate([20,0,-70]).rotateY(225)
        , gear.mirroredX().translate([20,0,-70]).rotateY(270)
        , gear.mirroredX().translate([20,0,-70]).rotateY(315)
    );


    var screwholes = union(
    	CSG.cylinder({                     
    		  start 		: [0, 25, -10]
			, end 			: [0, 80, -10]
			, radius 		: 5
			, resolution 	: 12
    	}).rotateX(90)
    	, CSG.cylinder({                     
    		  start 		: [0, 0, -10]
			, end 			: [0, 50, -10]
			, radius 		: 2.5
			, resolution 	: 12
    	}).rotateX(90)    	
    	, CSG.cylinder({                     
    		  start 		: [0, -20, -10]
			, end 			: [0, 50, -10]
			, radius 		: 1.5
			, resolution 	: 4
    	}).rotateX(90)

    	, CSG.cylinder({                     
    		  start 		: [0, 25, -50]
			, end 			: [0, 80, -50]
			, radius 		: 5
			, resolution 	: 12
    	}).rotateX(90)    	
    	, CSG.cylinder({                     
    		  start 		: [0, 0, -50]
			, end 			: [0, 50, -50]
			, radius 		: 2.5
			, resolution 	: 12
    	}).rotateX(90)    	  	
    	, CSG.cylinder({                     
    		  start 		: [0, -20, -50]
			, end 			: [0, 50, -50]
			, radius 		: 1.5
			, resolution 	: 4
    	}).rotateX(90)
    );
    
    var model = difference(
    	union(
	        difference(
	            union(
	                CSG.cylinder({                     
	            		  start 		: [0, 0, 0]
	        			, end 			: [0, 60, 0]
	        			, radius 		: 80             
	        			, resolution 	: 8
	        		}).rotateY(22.5)
	            )
	            , union(
	                  halfEmtySpace
	                , halfEmtySpace.mirroredX().rotateY(45)
	            )
	            , CSG.cylinder({                     
	        		  start 		: [0, -10, 0]
	    			, end 			: [0, 70, 0]
	    			, radius 		: 13
	    			, resolution 	: 30
	        	}).rotateY(22.5)
	        )
	        , gearGroup
	    )	    
    	, screwholes
    );
    
    
    
    
    var tilesubtract = cube([60,60,20]).translate([-31.8,0,73]).rotateY(45);
    
    var tile = difference(
    	union(
	          cube([60,60,5]).translate([-30,0,75])
	        , cube([100,18, 18.1]).translate([-50,21,57])
	    )
	    , tilesubtract
        , tilesubtract.mirroredX()
	);
    
    
    var diffTile = difference(
        difference(
              tile
            , gear.scale(1.01).translate([-20,0,-70.35])
        )
        /*, cube([120,8,50]).translate([-60,26,25])*/
        , cube([120,8,50]).translate([-60,19,25])
        , cube([120,8,50]).translate([-60,33,25])
        , cube([120,50,50]).translate([40,0,25])
        , cube([120,50,50]).translate([-160,0,25])
        , cube([50,50,30]).translate([-53,0,23]).rotateY(45)
    );
    
    
    
    
    
    
    return [/*model, */diffTile.translate([0,0,50])];
}start