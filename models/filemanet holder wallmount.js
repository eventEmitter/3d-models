function main() {
    return difference(
        union(
            cube({
                size: [2, 2, 17]
            }).rotateX(45).translate([0, 12.605, 2.565])
            ,  cube({
                size: [2, 2, 13]
            }).rotateX(-80).translate([0, 1.65, 1.97])
            ,  cube({
                size: [2, 2, 16]
            }).rotateX(0)
            , difference(
                torus({
                      fni:4
                    , ri: 2.5
                    , ro: 4.5
                    , fno:50
                    , roti:45 
                }).rotateY(90).translate([1.76,23.85,9.98]).scale([.567, .6, .6])
                , cube({
                    size: [5, 3, 17]
                }).rotateX(45).translate([-1, 13, 4.5])
                , cube({
                    size: [5, 5, 17]
                }).rotateX(45).translate([-1, 10, 2])
                , cube({
                    size: [7, 7, 7]
                }).translate([-1, 15, -5.5]).rotateX(45)
            )
            , cylinder({
                    r: 1.4
                  , h: 10
            }).rotateY(90).translate([-1,14.4,5.7])
        )
        , union(
            cylinder({
                    r: 0.5
                  , h: 10
            }).rotateX(90).translate([1,11,15])
            , cylinder({
                    r: 0.2
                  , h: 10
            }).rotateX(90).translate([1,9,15])
        ).translate([0,0,-0.5])
    );
}