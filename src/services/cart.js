/**
 * Ações do carrinho:
 * - Adicionar itens;
 * - Exluir itens;
 * - Aumentar e diminuir a quantidade de um item do carrinho;
 * - Calculo do total
 */

/**
 * Função pra adicionar um item no carrinho.
 * 
 */

async function addItem(userCart, item) {
    userCart.push(item);
}

/**
 * Função para exluir itens no carrinho
 */

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if(index != -1){
        userCart.splice(index, 1);
    }
}

/**
 * Funão para remover um item no carrinho.
 */

async function removeItem(userCart, item){
    const index = userCart.findIndex((p) => p.name === item.name);
    if(index != -1) {
        if(userCart[index].quantity > 1) {
            userCart[index].quantity -= 1;
        } else {
            userCart.splice(index, 1);
        }
    } else {
        console.log("Item não encontrado!");
        return;
    }
}

/**
 * Funão para calcular o total de intens no carrinho.
 */

async function calculateTotalValue(userCart) {
    const result =  userCart.reduce((total, item) => total + item.subtotal(), 0);
    return result;
}

function formatPrice(item) {
    return item.price.toFixed(2).toString().replace('.', ',');
}

function formatSutotal(item) {
    return item.subtotal().toFixed(2).toString().replace('.', ',');
}

/**
 * Imprime o carrinho.
 */
async function displayCart(myCart) {
    myCart.forEach((item, index) => {
        console.log(`${index + 1}) ${item.name} | ${item.quantity} x ${formatPrice(item)} | Subtotal: R\$ ${formatSutotal(item)}`);
    });
}

export {
    addItem,
    removeItem,
    deleteItem,
    calculateTotalValue,
    displayCart
}