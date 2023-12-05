


# CakeShop
### Link do Projeto em Produção

- [Site](https://cupcake-shop-psi.vercel.app)
- [Github](https://github.com/Jef1-Dev/cupcake)
- [Apresentação do projeto](https://youtu.be/cwgiwhn6xSk)







---
## Desenvolvido Utilizando:
- **Typescript** - linguagem usada
- **Nextjs** - Framework 
- **Stripe** - pagamento e catalogo de produtos
- **Vercel** - Deploy em produção



---
## Configuração do Ambiente
Para configurar o ambiente, adicione um arquivo `.env.local` à raiz do projeto com os seguintes parâmetros:

``` plaintext
    STRIPE_PUBLIC=pk_test_51OIaeMHDPUwBrCFeeN0lGutP19UftGl9sIOIcT852TWIpLcPLSJWKEGwrCG0J3ZnNvhBjjiXcYVffczFgM1ZqSfP00oHL9Qyri
    STRIPE_SECRET=sk_test_51OIaeMHDPUwBrCFeXaPqBmEuaYqk50Q9x8ySpCAEdcy3x2MPtVvKWVuMWBmBmrHcCfI8fvwD8H4aZoilBCFCRxnt00aN5ezOFS

```
#### O site automaticamente buscará todo o catálogo de produtos registrados no Stripe.

---

#### Depois de configurar o arquivo `.env.local`, abra o terminal na raiz do projeto e execute os seguintes comandos:


lembre-se de ter o [**node.js**](https://nodejs.org/en) instalado na sua maquina para conseguir rodar o **npm**


1. `npm i` ou `npm install` - comando para instalar dependências necessárias para rodar o projeto.
2. `npm run dev` - comando que inicia o sistema em "localhost".



---

