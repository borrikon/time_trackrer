export const getWorkHours = (start, end) => {
    let totalHousr = Math.floor(((end-start) / (1000 * 60 * 60)) % 24);
    if (start && end && (start<end)) {
        return totalHousr;
    } else {
        return '00';
    }
}
export const getWorkMinutes = (start, end) => {
    let totalMinutes = Math.floor(((end-start) / (1000 * 60)) % 60);
    if (start && end && (start<end)) {
        return totalMinutes;
    } else {
        return '00';
    }
}
