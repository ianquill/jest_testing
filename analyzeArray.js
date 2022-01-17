import {average, min, max, length} from './analyzeArrayUtils';

function analyzeArray(array) {
    const object = {};
    object.max = max(array);
    object.min = min(array);
    object.average = average(array);
    object.length = length(array);
    return object;
}

module.exports = analyzeArray;