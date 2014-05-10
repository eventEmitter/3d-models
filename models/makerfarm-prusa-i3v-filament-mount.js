function main() {   
    
    var model = difference(
            union(
                // bed
                cube({
                    size: [30,60,12]
                }).translate([0,-6,0])
                
                // top bed
                , cube({
                    size: [30,60,21]
                }).translate([0,-6,149])
                
                // middle bed
                , cube({
                    size: [30,60,6]
                }).translate([0,-6,100])
                
                // vertical beams
                , cube({
                    size: [30,6,176]
                }).translate([0,-6,-6])  
                
                , cube({
                    size: [30,6,176]
                }).translate([0,48,-6])
            )
            
            // sidebar holes
            , union(
                cube({
                    size: [18,50,6]
                }).translate([6,38,156])
                , cube({
                    size: [18,16,6]
                }).translate([6,-6,156])
            )
            
            // big one
            , cylinder({
                  r: 13
                , h: 100
            }).rotateX(90).rotateZ(90).translate([-2,24,177])
            
            // top holes
            , cylinder({
                  r: 3
                , h: 100
            }).translate([6,4,152])
            , cylinder({
                  r: 3
                , h: 100
            }).translate([6,44,152])
            
            , cylinder({
                  r: 3
                , h: 100
            }).translate([24,4,152])            
            , cylinder({
                  r: 3
                , h: 100
            }).translate([24 ,44,152])
            
            
                      
            , cylinder({
                  r: 1.5
                , h: 50
            }).translate([10,22,0])
            , cylinder({
                  r: 3
                , h: 50
            }).translate([10,22,8])
        ).translate([30,0,0]);
    
    
    
    var mirrored = mirror([0, 0, 0], model).translate([90,80,0]).rotateX(180);
    
    return [model, mirrored];
}