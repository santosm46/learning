# 1 Relatórios


## 1.1 Criando o relatório

para fazer download correto do arquivo CSV (trate corretamente os acentos da língua portuguesa)
Componentes Compartilhados > Atributos de Definição da Aplicação > Aba Globalização
	ajuste o idioma principal da aplicação para "Português (Brasil) (pt-br)" e selecione Sim para o campo "Codificação Automática de CSV".

## 1.2 melhorando a aparência

colocar link no COD
Clique sobre a coluna COD e altere o seu tipo para "Link". Na parte de Link, observe que o Destino está como "Nenhum Link Definido". Clique sobre essa mensagem para inserir o link.
Selecione a Página 3 no Destino, e defina o item de Nome P3_COD com o Valor #COD# e clique em OK.

## 1.3 Adicionando um filtro ao relatório

link:
https://contas.tcu.gov.br/ead/mod/book/view.php?id=30922&chapterid=13223

bind variable
:Pn_NOME-DO-ITEM
```sql
select * from aluno_mrcl
where     data_nascimento >= to_date(:P12_DT_INICIO, 'dd/mm/rrrr') and
          data_nascimento <= to_date(:P12_DT_FIM, 'dd/mm/rrrr')
```

## 1.4 Incluindo o relatório na árvore de navegação do sistema

Comp. compartilhados > breadcrumbs > Entradas

# 2 Formulários

## 2.1 Criando o formulário
O objetivo deste item é criar um formulário do tipo grade interativa de alunos usando o wizard

## 2.2 Melhorando a aparência do formulário
