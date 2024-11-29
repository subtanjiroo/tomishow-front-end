document.addEventListener('DOMContentLoaded', () => {
    fetch('/get_div_8', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        // Kiểm tra xem phản hồi có phải là JSON không
        if (response.ok) {
            return response.json();  // Chỉ chuyển thành JSON nếu phản hồi hợp lệ
        } else {
            // Nếu không phải JSON, kiểm tra nội dung trả về
            return response.text().then(text => {
                throw new Error('Received non-JSON response: ' + text);
            });
        }
    })
    .then(data => {
        const HomeData = data;

        const connection = document.querySelector('.content8_text2');
        const connection_items = HomeData.connections;
        connection_items.forEach(item => {
            const cardHTML = `
                <div class="icon_items">
                    <div><img class="logo_items" src="${item.icon}" alt="img"/></div>
                    <div class="content8_text2_subtext">${item.title}</div>
                    <div class="content8_text2_info">${item.text}</div>
                </div>
            `;
            connection.innerHTML += cardHTML;
        });


        // Thêm Google Map vào .map-container
        const mapContainer = document.querySelector('.map-container');
        if (HomeData.google_map) {
            mapContainer.innerHTML = HomeData.google_map; // Chèn iframe vào map-container
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
});
