// Função para realizar cálculos na calculadora
function calcular(tipo, valor) {
    // Verifica se a ação é um comando (limpar ou operador) ou um valor numérico
    if (tipo === 'acao') {
        // Comando para limpar o visor
        if (valor === 'c') {
            document.getElementById('display').value = '';  // Limpa o visor
        }
  
        // Comandos para operadores e ponto decimal
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '%' || valor === '.') {
            document.getElementById('display').value += valor;  // Concatena o operador ou ponto
        }
  
        // Comando para realizar o cálculo quando pressionado "="
        if (valor === '=') {
            // Recupera os elementos digitados e executa as operações usando eval
            var valor_campo = eval(document.getElementById('display').value);
            // Retorna o valor já calculado para o visor
            document.getElementById('display').value = valor_campo;
        }
  
    } else if (tipo === 'valor') {
        // Substitui o '0' padrão pelo valor digitado e continua concatenando mais valores
        document.getElementById('display').value += valor;
    }
  }
  