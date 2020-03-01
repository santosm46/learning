# Modelagem

## 1) introdução (anterior)

## 2) identificação do problema

Descrição Geral de Aplicação (DGA)
O DGA é um documento dinâmico por definição. Antes de iniciar o seu projeto real, busque na comunidade Apex o template da última versão válida do documento.

DGA Minha Escola: https://contas.tcu.gov.br/ead/pluginfile.php/204134/mod_book/chapter/13201/MinhaEscola.doc
https://contas.tcu.gov.br/pls/apex/f?p=curso_apex


Normalização 3FN
http://imasters.com.br/artigo/7020/banco-de-dados/modelagem-de-dados-final-normalizacao/
http://www.juliobattisti.com.br/artigos/office/modelorelacional_p[1-5].asp
http://infernatica.blogspot.com/2007/09/normalizao-de-banco-de-dados.html



Caso houvesse chave estrangeira, o procedimento seria:

adicionar o nome da tabela pai (ou mestre) no fim do nome da chave estrangeira, para atender o padrão do TCU;
clicar no campo que é a chave estrangeira na tabela e em seguida no símbolo ;
digitar o nome da tabela pai (ou mestre) no campo Faz Referência à Tabela ou clicar no símbolo  para ver uma lista de todas as tabelas até então criadas. Clique sobre a tabela desejada;
escolha a(s) coluna(s) da lista Selecionar Coluna(s) de Referência e em seguida no símbolo ;
para finalizar, clique em Próximo .

## 3) Criando tabelas

Criar constraint
Veremos agora como criar a regra de restrição abaixo mostrada:

clique na opção Verificar e em seguida na caixa de texto;
escreva na caixa de texto a regra que fica assim: ind_sexo in ('M','F');
no campo Nome coloque o nome da constraint no padrão TCU que seria ALUNO_CK_IND_SEXO, onde:
ALUNO - é o nome da tabela em que a constraint vai agir;
CK - indica que esta constraint é de verificação (check);
IND_SEXO - é o nome da coluna em que a constraint vai agir;
para finalizar a criação desta restrição, clique em Adicionar;
caso precise remover uma regra basta clicar no X após o campo Coluna(s)/Verificação;
se todas as regras de restrições já tiverem sido implementadas, clique em Finalizar.



## 4) Verificando os objetos criados

Relatórios de Exceções (criando index)

SQL Workshop > Utilitários > Relatório de objetos
Mostra
Tabelas sem Chaves Primárias
Tabelas sem Índices
Chaves Estrangeiras Não Indexadas
Tabelas sem Trigger

