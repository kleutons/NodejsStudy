# Inicializa um projeto Node.js

> npm init -y

# Inicializa um projeto Node.js TypeScript

# One Command
> npm init -y typescript -D

# Cria a pasta src
> mkdir src

# Cria o arquivo inicial

> echo 'console.log("hello world");' > src\dado.ts

# Instala as dependências

> npm i typescript tsx tsup

# Cria o arquivo tsconfig

> npx tsc --init

# Scripts padrões

> "scripts": { <br>
> "dist": "tsup src", <br>
> "start:dev": "tsx src/index.ts", <br>
> "start:watch": "tsx watch src/index.ts", <br>
> "start:dist": "npm run dist && node dist/index.js" <br>
> },