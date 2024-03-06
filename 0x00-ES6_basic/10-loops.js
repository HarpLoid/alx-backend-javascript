export default function appendToEachArrayValue(array, appendString) {
  for (const element of array) {
    const i = array.indexOf(element);
    array[i] = appendString + element;
  }

  return array;
}
