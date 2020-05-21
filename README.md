# Emailing with Node.js

Envio de emails com Node.js (usando Nodemailer)



## Resumo

Consiste, na verdade, de um código-exemplo para meu aprendizado em como enviar um email usando Node.js. O servidor SMTP utilizado é o [Mailtrap](https://mailtrap.io/), e como é para fins de aprendizado, foi utilizado seu servidor fake para testes.



## :gear: Instalação e Configuração

### Pré-requisitos

É exigido que tenha [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalação

1. Copie o repositório para sua máquina:
   - Baixando o ZIP pelo repositório no GitHub (Botão Verde acima ou [aqui](https://github.com/cleberson-dev/nodejs-email)):
   - Clonando o repositório ([Git](https://git-scm.com/downloads) necessário):

    ```bash
   git clone https://github.com/cleberson-dev/nodejs-email.git
    ```

1. No diretório do projeto, instale as dependências necessárias utilizando um gerenciador de pacotes para Node.js (npm ou yarn):

   ```bash
   npm install
   # ou yarn
   ```

3. Configure as variáveis de ambiente `MAILTRAP_USERNAME` e `MAILTRAP_PASSWORD` com o nome de usuário (`user`) e senha (`pass`) gerado e apresentado na dashboard da Mailtrap (necessário login/registro):

   ```bash
   export MAILTRAP_USERNAME=<seu-nome-de-usuario>
   export MAILTRAP_PASSWORD=<sua-senha> 
   ```

4. Execute o script principal `app.js` para ver o email ser entregue em sua [caixa de entrada](https://mailtrap.io/inboxes/) de demonstração:

   ```bash
   node app.js 
   ```

Modifique esse script para alterar parâmetros como destinatário, fonte, assunto, conteúdo, anexos e ver o resultado por si só.

> OBS: Caso queira aprender mais sobre a biblioteca utilizada para a configuração do servidor, envio de mensagens, visite a [documentação oficial do Nodemailer](https://github.com/nodemailer/nodemailer), que lhe apresenta mais features e exemplos de uso.

