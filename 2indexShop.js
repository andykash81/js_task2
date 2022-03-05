const goods = [
    {
        id: 1,
        name: 'рубашка',
        description: 'синий',
        sizes: '48',
        price: '100',
        available: '3',
    },
    {
        id: 2,
        name: 'брюки',
        description: 'черный',
        sizes: '50',
        price: '150',
        available: '2',
    },
    {
        id: 3,
        name: 'кофта',
        description: 'коричневый',
        sizes: '52',
        price: '200',
        available: '5',
    },
    {
        id: 4,
        name: 'кроссовки',
        description: 'белый',
        sizes: '41',
        price: '300',
        available: '6',
    },
    {
        id: 5,
        name: 'шапка',
        description: 'черный',
        sizes: '50',
        price: '40',
        available: '8',
    },
];

const goodIndex = [goods[0], goods[1], goods[2], goods[3], goods[4],];

const basket = [
    {
        goodId: '0',
        amount: 2,
    },
    {
        goodId: '3',
        amount: 4,
    },
];

function addGood(goodId, amountNew) {
    for(i = 0; i < basket.length; i++) {
        if(goodId == basket[i].goodId) {
            basket[i].amount = basket[i].amount + amountNew;
            return `Увеличено количество товара с названием ${goods[basket[i].goodId].name} на ${amountNew}.`;
        }
    };
    let good = {
        goodId: goodId,
        amount: amountNew,
    }
    basket.push(good);
    return `Товар с названием ${good.name} добавлен в корзину.`;
};

function delGood(goodId) {
    for(i = 0; i < basket.length; i++) {
        if(goodId == basket[i].goodId) {
            let namegood = goods[basket[i].goodId].name;
            basket.splice(i, 1);
            return `Удален товар с названием ${namegood}`;
        };
    };
};


function clearBasket() {
    basket.length = 0;
};

function basketSumm() {
    let countGoods = 0;
    let summa = 0;
    const price = {};
    for(i = 0; i < basket.length; i++) {
        countGoods = countGoods + basket[i].amount;
        summa = summa + (basket[i].amount * goods[basket[i].goodId].price);
    }
    price.totalAmount = countGoods;
    price.totalSumm = summa;
    
    return price;
};

addGood('3', 2);
addGood('1', 2);
addGood('4', 2);
delGood('1');
let summBasket = basketSumm();
console.log(basket);
console.log(`Общее количество товаров ${summBasket.totalAmount} на сумму ${summBasket.totalSumm}`);
