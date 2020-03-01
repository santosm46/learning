# 1) Conceitos

## a. LOV = Lista de Valores (List Of Values)
Pode ser Dinâmico ou estático

## b. Form
É um formulário tradicional (entrada de dados), onde o layout pode ser mais detalhado e só vemos um registro por vez.

## c. Form Tabular
É um formulário que se parece com uma planilha do Excel

## d. Relatório
São informações que aparecem na tela como resultado de uma consulta (query) SQL. São dos tipos clássico e interativo

## e. Form com Relatório
No desenvolvimento rápido de aplicações, é a melhor opção. Toda a estrutura de criar, atualizar e deletar dados é gerada automaticamente.

## f. Modelo
É o código HTML que representa cada item ou região da tela.
Para acessar este modelo, vá a Componentes Compartilhados -> Modelo

## g. Região
É uma área pré-definida da sua página, utilizada para dar uma ideia de posicionamento do conteúdo a ser inserido.

## h. Caminho Detalhado (breadcrumb)
Quando incluído na sua página, mostra a hierarquia de páginas percorridas para chegarmos na página atual.


# 2) Criando o esqueleto da aplicação via wizard

## 2.1 Defaults da Interface do Usuário
a. Configurando para a tabela TURMA
SQL Workshop > Browser de Objetos
Tabela feita > Padrões da UI (criar padrão)
Ir em Tabela_mrcl e Editar padrões de Tabela
Para alterar, caminho: Utilitários  \  Padrões da Interface do Usuário  \  Dicionário de Tabela  \  Propriedades da Tabela e Coluna

Criar Lista de Valores: 
	clicar no campo IND_ALGO
	depois na aba "Lista de Valores". e em "Criar Lista de Valores Estática".

Máscara de formato do valor: 999G999G999G999G990D00



## 2.2 Rodando o wizard inicial


App Builder > Criar 


# 3) Entendendo o que foi criado
(Inserindo registros nas tabelas)


Para deixar claro aos desenvolvedores que a sua aplicação MinhaEscola está em desenvolvimento, siga os passos seguintes:

- 1. Acesse o Application Builder > selecione sua aplicação > Componentes Compartilhados.

- 2. Vá em Lógica da Aplicação > Atributos de Definição da Aplicação e procure acesse Notificação Global conforme imagem abaixo.
texto:  == Em Desenvolvimento ==
