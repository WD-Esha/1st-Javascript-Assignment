// Unit converter Feet To Mile 
function feetToMile(feet) {
    const Mile = feet * 0.000189394 ;
    return feet +" "+ "feet" +" "+ "is = " + Mile +" "+ "mile";
}

const result  = feetToMile(19.7);
console.log(result);




// Wood Calculator 

// 1 table needs = 4 cubic meter wood
// 1 chair needs = 2 cubic meter wood
// 1 Bed   needs = 6 cubic meter wood

function woodCalculator([Table, chair , Bed]) {

    const tableWoodNeed= Table*4  ; 
    const chairWoodNeed= chair*2;
    const BedWoodNeed  = Bed * 6;

    const totalWoodNeed = tableWoodNeed + chairWoodNeed + BedWoodNeed;

    return "You Need Total = " + totalWoodNeed + " Cubic Meter Wood";

    
}

const Furnitureneed = [12 , 12 , 12];

const totalWood =  woodCalculator(Furnitureneed);

console.log(totalWood);



// Brick Calculator
// Every Feet of Building wall needs = 1000 Bricks //
// 1 to 10th floor wall is 15 feet .
// Above eleven floor wall is 12 feet .

function brickCalculator(floor) {
    
    

    if( floor <= 10){
        const oneToTenFloor = 15*1000;
        const Brickneed = "You need " + oneToTenFloor + " bricks" ;
        
        return  Brickneed ;
    }

    else if( floor>=11 ){
        const twenthfloor = 12*1000;
        const Brickneed = "You need " + twenthfloor + " bricks" ;
        
        return  Brickneed ;
    }   
}
const myfloorIs = brickCalculator(2838848);
console.log(myfloorIs);




// Finding MY tiny friend 

function tinyFriend(age) {
    const min = Math.min(...age);
    
    return  "My tiniest friend is " + min;
        
}
 
const MyFriends = [ 10, 12 , 14 , 18 , 19 , 20 ,  9 , 14 , 15];

const Mytinyfriend = tinyFriend(MyFriends);
console.log(Mytinyfriend);




