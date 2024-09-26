// script.js
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const posto = document.getElementById('posto').value;
    const comments = document.getElementById('comments').value;

    const items = Array.from({ length: 20 }, (_, i) => ({
        id: `item${i + 1}`,
        checked: document.getElementById(`item${i + 1}`).checked,
        quantity: document.getElementById(`quantity${i + 1}`).value
    }));

    console.log(`Nome: ${name}`);
    console.log(`Telefone: ${phone}`);
    console.log(`Posto: ${posto}`);
    console.log(`Comentários: ${comments}`);
    console.log('Itens:', items);

    // Aqui você pode adicionar código para enviar os dados para um servidor, por exemplo
    alert('Obrigado, seu pedido foi realizado!');
});