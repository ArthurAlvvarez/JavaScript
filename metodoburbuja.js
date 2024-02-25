// Función que ordena el array con el algoritmo de la burbuja
function bubble_sort(arr) {
    for (let i = 0; i <= arr.length; i++) {
        for (let j = 1; j < (arr.length - i - 1); j++) {
            if (arr[j + 1] > arr[j]) {
                let temp = arr[j + 1]
                arr[j] = arr[j + 1]
                arr[j] = temp
            }
        }
    }
}

// Creamos un array desordenado
let arr = [2, 43, 9, 5, 4, 5, 8, 1, 21, 52];

// Imprimir el array desordenado
console.log(arr);

// Llamamos a la función que ordena el array y le pasamos el array desordenado
bubble_sort(arr)

// Imprimir el array ordenado
console.log(arr);