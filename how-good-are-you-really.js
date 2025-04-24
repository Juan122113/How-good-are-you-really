function betterThanAverage(classPoints, yourPoints) {
    
    let averageClassPoints = 0;

    // Calculating total class points

    for (let i = 0; i < classPoints.length; i++) {
        averageClassPoints += classPoints[i];
    }

    // Calculating total class points

    averageClassPoints /= (classPoints.length);

    if (yourPoints > averagePoints) {
        return true;
    } else
        return false;

}