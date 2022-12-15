function distanceFromHqInBlocks(pickupBlock) {
    //returns number of blocks from pickup block to Scuber HQ
    return Math.abs(pickupBlock - 42);
}

function distanceFromHqInFeet(pickupBlock) {
    //takes return from distanceFromHqInBlocks and calculates blocks * 264ft per block
    let blocks = distanceFromHqInBlocks(pickupBlock);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    //returns distance travelled in feet
    return (Math.abs(start - destination)) *264;

}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    //returns free ride 400 ft and under
    if (distance <= 400) {
        return 0;
    }
    //returns 2ct per feet between 400ft and 2000ft
    else if (distance <= 2000) {
        return (distance - 400) * .02;
    }
    //returns flat 25 between 2000ft and 2500ft
    else if (distance <= 2500) {
        return 25;
    }
    //returns no rides over 2500ft
    else if (distance >2500) {
        return 'cannot travel that far';
    }

}