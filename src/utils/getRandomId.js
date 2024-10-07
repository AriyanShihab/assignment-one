export default function getUniqueID(string, index) {
  const charCode = string
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return charCode + index;
}
