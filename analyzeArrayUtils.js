export function average(array) {
    let sum = array.reduce((prev, current) => {
       return prev + current;
    });
    const avg = sum / array.length;
    return avg;
}

export function min(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

export function max(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

export function length(array) {
    return array.length;
}