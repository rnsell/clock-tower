const startLessThanEnd = (startHour, endHour) => {
    let sum = 0;
    for(let currentTime = startHour; currentTime <= endHour; currentTime++){
        let clockFaceRings = currentTime % 12 || 12;
        sum += clockFaceRings;
    }
    return sum;
}

const startGreaterOrEqualEnd = (startHour, endHour) => {
    let sum = 0;
    for(let currentTime = startHour; currentTime <= endHour + 24; currentTime++){
        const clockFaceRings = currentTime % 12 || 12;
        sum += clockFaceRings;
    }
    return sum; 
}

module.exports = {
    startLessThanEnd,
    startGreaterOrEqualEnd
}