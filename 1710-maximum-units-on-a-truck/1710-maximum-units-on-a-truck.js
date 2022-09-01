var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    
    let boxCount = truckSize;
    let totalNum = 0;
    
    for (let [box, unit] of boxTypes) {
        if (box <= boxCount) {
            totalNum += box * unit;
            boxCount -= box;
        } else {
            totalNum += boxCount * unit;
            boxCount = 0;
            break;
        }
    }
    return totalNum;
};