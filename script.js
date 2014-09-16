
// Array of items.
var itemArray = [
    {
        'item': 'Apple',
        'price': 0.50,
        'special': 1
    },
    {
        'item': 'Orange',
        'price': 0.55,
        'special': 0
    },
    {
        'item': 'Grapes',
        'price': 1.30,
        'special': 0
    }, {
        'item': 'Lettuce',
        'price': 1.00,
        'special': 0
    },
     {
         'item': 'Potato',
         'price': 0.75,
         'special': 0
     },
     {
         'item': 'Carrot',
         'price': 0.40,
         'special': 0
     },
     {
         'item': 'Eggplant',
         'price': 0.80,
         'special': 0
     },
     {
         'item': 'Plum',
         'price': 0.45,
         'special': 0
     }
];

// Array of specials.
var specials = [
    {
        'special': 1,
        'amount': 3,
        'price': 1.30
    },
    {
        'special': 2,
        'amount': 2,
        'price': 0.75
    },
    {
        'special': 2,
        'amount': 2,
        'price': 0.50
    }
];

// Array that stores total items with amount and price.
var itemTotal = [];

// Function to add items to cart.
function AddtoCart(name) {
    var div = document.getElementById('cart');
    div.innerHTML = div.innerHTML + name + ",";
}

// Function to check out items.
function CheckOut() {
    var items = document.getElementById('cart').innerHTML.split(',');
    items.pop();

    for (var i = 0; i < items.length; i++) {
        var price = "";
        price = GetPrice(items[i]);

        itemTotal = AddtoItemTotal(items[i], price, itemTotal);
    }

    PrintReceipt(itemTotal);
    GetTotal(itemTotal);


}

// Function to get price of item.
function GetPrice(priceName) {
    for (var i = 0; i < itemArray.length; i++) {
        if (itemArray[i].item.match(priceName)) {
            return (itemArray[i].price);
        }
    }
}

// Function to determine if we have duplicate items
function FindMatchingItem(matchngName, itemList) {
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].itemName.match(matchngName)) {
            return (i);
        }
    }
    return -1;
}

// Function to store items with pricing and amount to an array.
function AddtoItemTotal(itemName, itemPrice, itemList) {

    if (itemList.length >= 1) {
        var number = -1;
        number = FindMatchingItem(itemName, itemList);

        if (number >= 0) {
            itemList[number].cost = itemList[number].cost + itemPrice;
            itemList[number].amount = itemList[number].amount + 1;
        }
        else {
            itemList.push({
                'itemName': itemName,
                'cost': itemPrice,
                'amount': 1
            }
            );
        }
    }
    else {

        itemList.push(
            {
                'itemName': itemName,
                'cost': itemPrice,
                'amount': 1
            }
        );
    }

    return itemList;
}

// Function print out the receipt
function PrintReceipt(itemReceipt) {
    var table = document.getElementById("receiptTable");

    for (var i = 0; i < itemReceipt.length; i++) {
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = itemReceipt[i].itemName,
        cell2.innerHTML = itemReceipt[i].cost,
        cell3.innerHTML = itemReceipt[i].amount;
    }
}

// Gets the total of the bill.
function GetTotal(totalCost) {
    var totalprice = 0;

    for (var i = 0; i < totalCost.length; i++) {
        totalprice = totalprice + totalCost[i].cost;
    }

    var div = document.getElementById("total");
    div.innerHTML = "<br /><hr/><br />Total: $ " + totalprice;
}


//Function to clear Cart
function ClearCart ()
{
    itemTotal = [];
    var div = document.getElementById('cart');
    div.innerHTML = "";

}

//Function to clear Receipt
function ClearReceipt()
{
    var div = document.getElementById('receipt');
    div.innerHTML = "";

    var div2 = document.getElementById('total');
    div2.innerHTML = "";
}
