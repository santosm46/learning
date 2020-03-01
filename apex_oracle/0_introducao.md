# Principais tipos de dados do Oracle

char(tam) até 2000 caracteres
varchar2(tam) até 4000 chars
number(i, d) 
number(i)
number
date
clob texto max 4GB
blob binário max 4GB


SQL workshop > Object Browser
ver tabelas, índices, triggers, etc.


## Tabelas
[Tipos de dados das tabelas](https://docs.oracle.com/cd/B28359_01/server.111/b28318/datatype.htm#CNCPT012)


## Constraint
primary key: nome da tabela + _PK
foreign key: nome da tabela detalhe + o nome da tabela mestre + _FK
check condição
unique


## Sequence
[saber mais](https://docs.oracle.com/cd/B28359_01/server.111/b28286/statements_6015.htm#sthref7018)
NOME_DA_TABELA_SEQ


## Trigger
[saber mais](http://docs.oracle.com/cd/B28359_01/server.111/b28286/statements_7004.htm#sthref7670)

Exemplo de código gerado pelo Apex para popular automaticamente a chave primária numérica COD da tabela PROFESSOR_TURMA:
```sql
CREATE OR REPLACE TRIGGER bi_professor_turma
  BEFORE INSERT
  ON professor_turma
  FOR EACH ROW
BEGIN
  IF :NEW."COD" IS NULL
  THEN
    SELECT "PROFESSOR_TURMA_SEQ".NEXTVAL
      INTO :NEW."COD"
      FROM DUAL;
  END IF;
END;
```

bi significa que essa trigger é executada antes da inserção (Before Insert) e o resto é o nome da tabela

Index: https://docs.oracle.com/cd/B28359_01/server.111/b28286/statements_5011.htm#SQLRF01209

