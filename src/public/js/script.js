const buttonAdd = document.querySelector('#buttonAdd');
        
        buttonAdd.addEventListener('click', () => {
            window.location.href = '/addProduct';
        })

function formatDate(isoDate) {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/products');
        const products = await response.json();

        const tbody = document.querySelector('#products-tbody');
        tbody.innerHTML = '';

        if (products <= 0 || products === null || products === undefined) {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td colspan="9" class="fst-italic text-center fs-5">No product registration!</td>
            `;

            tbody.appendChild(tr);
        } else {
            products.forEach((product, index) => {
                const tr = document.createElement('tr');

                tr.innerHTML = `
                    <td>${product.id_product}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.flavor}</td>
                    <td>${product.mark}</td>
                    <td>${product.manufacturer}</td>
                    <td>${formatDate(product.due_date)}</td>
                    <td>${product.quantity_stock}</td>
                    <td class="d-flex gap-1">
                        <a itemid="${product.id_product}" class="btn btn-sm btn-primary"><i class="bi bi-eye"></i></a>
                        <a itemid="${product.id_product}" class="btn btn-sm btn-success"><i class="bi bi-pencil-square"></i></a>
                        <a itemid="${product.id_product}" class="btn btn-sm btn-danger"><i class="bi bi-trash"></i></a>
                    </td>
                `;
                
                tbody.appendChild(tr);
            });
            
        }
    } catch (error) {
        console.error('Error searching for products!');
    }
});