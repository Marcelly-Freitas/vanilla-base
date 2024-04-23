# Projeto Sistema de gerenciamento acadêmico

Este README fornecerá instruções passo a passo sobre como baixar, instalar o Node.js no Windows e executar o projeto.

## Instalando o Node.js no Windows

1. **Baixe o instalador do Node.js:**

   Acesse o site oficial do Node.js em [nodejs.org](https://nodejs.org) e baixe o instalador para Windows.

2. **Execute o instalador:**

   Após o download ser concluído, execute o instalador clicando duas vezes no arquivo baixado (geralmente chamado `node-vX.X.X-x64.msi`, onde `X.X.X` é a versão do Node.js).

3. **Siga as instruções de instalação:**

   O instalador do Node.js fornecerá instruções passo a passo. Clique em "Next" para avançar através das etapas de instalação. Você pode aceitar as configurações padrão, a menos que tenha razões específicas para alterá-las.

4. **Verifique a instalação:**

   Após a conclusão da instalação, abra o prompt de comando do Windows e digite o seguinte comando para verificar se o Node.js e o npm (gerenciador de pacotes do Node.js) foram instalados corretamente:

   ```
   node -v
   npm -v
   ```

   Se ambos os comandos exibirem as versões do Node.js e do npm, respectivamente, a instalação foi bem-sucedida.

## Executando o projeto

1. **Clone o repositório:**

   Clone o repositório do projeto para o seu computador usando o Git. Por exemplo:

   ```
   git clone https://github.com/usuario/nome-do-projeto.git
   ```

2. **Navegue até o diretório do projeto:**

   Use o comando `cd` para navegar até o diretório do projeto que você acabou de clonar:

   ```
   cd nome-do-projeto
   ```

3. **Instale as dependências:**

   Execute o seguinte comando para instalar as dependências do projeto usando o npm:

   ```
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**

   Depois que todas as dependências forem instaladas, você pode iniciar o servidor de desenvolvimento usando o comando:

   ```
   npm run dev
   ```

   Este comando iniciará o servidor de desenvolvimento do Vite. Após a inicialização, você poderá acessar o projeto no navegador.

5. **Acesso ao projeto:**

   Abra um navegador da web e navegue até `http://localhost:8080` para visualizar o projeto em execução.

## Conclusão

Agora você tem o Node.js instalado no seu sistema Windows e está pronto para executar o projeto. Siga as etapas fornecidas neste README e comece a desenvolver as páginas do sistema.
