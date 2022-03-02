const inputForm = document.querySelector('#orderitem')
const output = document.querySelector('#order')

const calcOrder = (event) => {
   const { elements: fields } = event.target;

   event.preventDefault();

   const order = {
      quantity: fields["qty"].value,
      size: fields["itemsize"].selectedOptions[0].getAttribute('data-size'),
      price: fields["itemsize"].value,
      homeDelivery: fields["del"].checked,
      homeDeliveryPrice: fields["del"].value
   }

   console.table(order)

   const total = formatCurrency((order.quantity * order.price) + +(order.homeDelivery ? order.homeDeliveryPrice : 0))

   output.innerHTML = `
   You ordered ${order.quantity} ${order.size} Easter Egg${order.quantity > 1 ? 's' : ''}<br>
   Cost Price ${formatCurrency(order.quantity * order.price)}<br>
   ${order.homeDelivery ? `Home Delivery (${formatCurrency(order.homeDeliveryPrice)})` : "No Delivery"}<br>
   Total Price ${total}
   `
}

inputForm.addEventListener('submit', calcOrder)

function formatCurrency(num) {
   /*Unicode Character 'EURO SIGN' \u20ac*/
   num = num.toString().replace(/\u20ac|\,/g, '');
   isNaN(num) ? num = "0" : num
   sign = (num == (num = Math.abs(num)));
   num = num.toFixed(2);
   elements = num.split(".");
   num = elements[0];
   cents = elements[1];
   for (let i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
      num = num.substring(0, num.length - (4 * i + 3)) + ',' +
         num.substring(num.length - (4 * 0 + 3));
   }
   return (((sign) ? '' : '-') + '\u20ac' + num + '.' + cents)
}
