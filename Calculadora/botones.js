 
 function porcentaje(){
            let resultado = 1;
            let num = document.calculadora.ans.value;
            resultado = num / 100;
            document.calculadora.ans.value = resultado;
        }
        function factorial(){
            let num = document.calculadora.ans.value;
            resultado = 1;
            for(i = num; i > 0;i--){
                resultado *= i;
            }
            document.calculadora.ans.value = resultado;
        }
         function x(){
            let num = document.calculadora.ans.value;
            let resultado = 1;
            resultado = Math.pow(10,num);
            document.calculadora.ans.value = resultado;
        }
        function deleteChar() {
            operacion = document.calculadora.ans.value;
            document.calculadora.ans.value = operacion.substring(0, operacion.length-1);
        }
        function diez(){
            let num = document.calculadora.ans.value;
            let resultado = 1;
            resultado = Math.pow(num,10);
            document.calculadora.ans.value = resultado;
        }
        function cubica(){
            let num = document.calculadora.ans.value;
            let resultado = 1;
            resultado = Math.pow(num, 1 / 3);
            document.calculadora.ans.value = resultado;
        }
        var memoria = 0;
        function addToMemory() {
            memoria = parseFloat(document.calculadora.ans.value);
        }
        function M(){
            document.calculadora.ans.value = memoria;
        }