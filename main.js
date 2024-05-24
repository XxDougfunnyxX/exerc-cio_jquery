const form = document.getElementById("tarefa-form");
let linhas = '';

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputNomeTarefa = document.getElementById('task-form');

  let linha = '<td>';
linha += `<td>${inputNomeTarefa.value}</td>`;
linha += `</tr>`;

linhas += linha;

const corpoTabela = document.querySelector('tbody');
corpoTabela.innerHTML = linhas;

const tds = document.querySelectorAll('td');
  tds.forEach(td => {
    td.addEventListener('click', function() {
      td.style.textDecoration = 'line-through';
    });
  });
});