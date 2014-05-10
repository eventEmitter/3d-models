function main() {   
    
    var drillHead = CSG.cylinder({                     
          start         : [0, 0, 0]
        , end           : [0, 60, 0]
        , radiusStart   : 22
        , radiusEnd     : 21
        , resolution    : 60
    });
    
    
    var motor = CSG.cylinder({                     
          start         : [0, 0, 0]
        , end           : [0, -20, 0]
        , radius        : 18.5
        , resolution    : 60
    });

    var casing = cube([70,55,60]).translate([-35,-20,-30]);

    var knob = cube([16,3.2,7]).translate([-8,7,20]);
    var littleKnob = cube([6,4.3,7]).translate([-3,0,20]);
    
    var screwHole = union(
        CSG.cylinder({                     
              start         : [0, -2, 0]
            , end           : [0, 17, 0]
            , radiusStart   : 3.1
            , radiusEnd     : 2.5
            , resolution    : 20
        }).translate([17.1,0,17])
        , cube([6,19,17.5]).translate([14.1,-2,0])
    );
    
    
    var MaterialSaver = cube([60,20,20]).rotateY(45).translate([0,-2,56]);

    var m4hole = union(
        CSG.cylinder({                     
              start         : [0, 0, 0]
            , end           : [0, 50, 0]
            , radius        : 4
            , resolution    : 6
        }).rotateX(90).translate([25.5,-11,6])
        ,  CSG.cylinder({                     
              start         : [0, 0, 0]
            , end           : [0, 50, 0]
            , radius        : 2.1
            , resolution    : 12
        }).rotateX(90).translate([25.5,-11,-1])
    );
    
    var m4roundHole = union(
        CSG.cylinder({                     
              start         : [0, 0, 0]
            , end           : [0, 50, 0]
            , radius        : 4.2
            , resolution    : 20
        }).rotateX(90).translate([-25.5,-11,6])
        , CSG.cylinder({                     
              start         : [0, 0, 0]
            , end           : [0, 50, 0]
            , radius        : 2.1
            , resolution    : 20
        }).rotateX(90).translate([-25.5,-11,-1])
    );
    
    var m4ScrewHoles = union(m4hole, m4roundHole);
    
    
    var fixingHole = union(
        CSG.cylinder({                     
              start         : [0, 0, 0]
            , end           : [0, 200, 0]
            , radius        : 3.1
            , resolution    : 20
        }).rotateX(90).translate([-26.5,8,-100])
        , CSG.cylinder({                     
              start         : [0, 0, 0]
            , end           : [0, 40, 0]
            , radius        : 10
            , resolution    : 20
        }).rotateX(90).translate([-26.5,8,25])
    );
    
    
    var halfer = cube([300,300,70]).translate([-100,-100,-70]);
    

    var result = difference(
        casing
        , motor
        , drillHead
        , knob
        , littleKnob
        , screwHole
        , screwHole.mirroredX()
        , MaterialSaver
        , MaterialSaver.mirroredX()
        , m4ScrewHoles
        , m4ScrewHoles.mirroredY().translate([0,16,0])
        , fixingHole
        , fixingHole.mirroredX()
        , halfer
    );
    
    return [result];
}