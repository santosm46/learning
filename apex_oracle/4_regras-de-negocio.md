# 1 Revisão básica de SQL

[fonte](https://contas.tcu.gov.br/ead/mod/book/view.php?id=30923)

## a. Sum, Avg, Count, Max, Min

|Function|						Descrição|
|--|--|
|AVG(expr)|					Valor médio de expr; ignora valores nulos.|
|COUNT(expr) ou COUNT(*)|		COUNT(expr) - Retorna número de linhas, em que expr é avaliado como um valor diferente de nulo. Count(*) - conta todas as linhas selecionadas, inclusive valores duplicados e linhas com valores nulos.|
|MAX(expr)|					Valor máximo de expr; ignora valores nulos.|
|MIN(expr)|					Valor mínimo de expr; ignora valores nulos.|
|SUM(expr)|					Valores somados de expr; ignora valores nulos.|


## b. Select Into
```sql
DECLARE
  V_COD NUMBER;
BEGIN
  SELECT PROFESSOR_SEQ.NEXTVAL -- Seleciona o próximo valor da sequence PROFESSOR_SEQ
  INTO V_COD                   -- e insere este valor na variável V_COD (previamente declarada)
  FROM DUAL;                   -- DUAL é usado quando não faz sentido usar uma tabela
  HTP.P(V_COD);
END;
```

## c. Decode
```sql
SELECT nome, 
  DECODE (ind_sexo, 'M', 'Masculino', 'Feminino')
FROM aluno;
```
## d. Length
```sql
SELECT nome, 
  LENGTH (nome)
FROM aluno;
```
## e. Case When
```sql
SELECT nome, length(nome) as "qtd chars",
  case 
    when length(nome) < 20
      then 'nome curto'
    when length(nome) <= 25
      then 'nome médio'
    else 'nome longo'
  end as "Tamanho nome"
FROM ALUNO_MRCL;
```

## 1.1 Otimizando o SQL

- Evite o produto cartesiano
- Use índices
- Evite Código SQL Ruim
- Evite Varredura Integral (Full-table scan)
- Evite Grande quantidade de SQL recursivo
- Evite Erros nos schema e problemas no otimizador



# 2 Revisão básica de PL/SQL

## Definição e estrutura de um bloco PL/SQL
A estrutura básica de um bloco PL/SQL está dividida em três sessões:
```sql
DECLARE
BEGIN … END
EXCEPTION
```
## Bloco anônimo
```sql
[DECLARE]
BEGIN
    -- Instruções
[EXCEPTION]
END;
```
## Procedure
```sql
PROCEDURE nome_procedure
IS
BEGIN
    -- Instruções
[EXCEPTION]
END;
```
## Função
```sql
FUNCTION nome_funcao 
RETURN tipo_retorno
IS
BEGIN
    -- Instruções
    RETURN valor;
[EXCEPTION]
END;
```

```sql
-- Nome da procedure, sem parâmetros de entrada ou de saída. Caso fosse necessário deveria aparecer, entre parênteses, o nome do parâmetro, um indicador se ele é de entrada ou saída e o tipo de dado dele com vírgulas separando os parâmetros. Ex: (param1 IN NUMBER, param2 IN VARCHAR2, param3 OUT DATE)

CREATE OR REPLACE PROCEDURE atualiza_curriculo
IS
BEGIN
  UPDATE professor  -- Atualização de dados
    SET curriculo = 'Sem currículo castradado'
  WHERE curriculo IS NULL;

  COMMIT;  -- Confirmação da alteração dos dados. A ausência do COMMIT pode causar problemas!!
END;

EXEC atualiza_curriculo();
```

praticar
