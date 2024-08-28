function logStringElement(elements: string[]) {
  elements.forEach((element) => console.log(element));
}
function logNumberElement(elements: number[]) {
  elements.forEach((element) => console.log(element));
}
// te dwie funkcje są na napisane nadmiarowo lepiej zrobić jedną genereczną funkcje

function logElement<T>(elements: T[]) {
  elements.forEach((element) => console.log(element));
}
