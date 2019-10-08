# controle_financeiro

API para controle financeiro

--------------------------------
Necessário só configurar o banco de dados no arquivo .env conforme exemplo .env_sample, 
baixar as dependencias usando npm ou yarn e npm run dev.

/users metodo POST efetua registro do usuario, caso seja enviado um json com {name, email, password}
/users metodo GET traz informação do usuario caso possua um jwt valido com chave authorization e o valor do token
/auth metodo POST efetua a authenticação do usuario enviado pelo json {email, password}
/transation metodo POST caso usuario esteja autenticado, efetua transação de entrada/saida através do json {description, value, transationType}
/transation metodo GET puxa todas transações efetuadas por aquele usuario autenticado
