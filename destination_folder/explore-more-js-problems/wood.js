function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    let perChairWood = 3 * chairQuantity,
        perTableWood = 10 * tableQuantity,
        perBedWood = 50 * bedQuantity,
        totalWood = perChairWood + perTableWood + perBedWood;
    console.log(totalWood);
}
woodCalculator(2, 3, 5);