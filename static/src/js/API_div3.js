document.addEventListener('DOMContentLoaded', () => {
    fetch('/get_div_3', {
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
        let count = 0;
        const main_title = document.querySelector('.main_title_div3');
        if (main_title) {
            main_title.innerText = HomeData.main_title;
        }
        const text_div3 = document.querySelector('.text_div3');
        if (text_div3) {
            text_div3.innerText = HomeData.text;
        }
        const grid_items = HomeData.icon_and_text;
        const contentBox = document.getElementById('content3_box2_grid');

        if (grid_items && contentBox) {
            // Lặp qua các phần tử flip_board và render vào div
            grid_items.forEach(items => {
                count +=1;
                console.log(count);
                const cardHTML = `
                    <div class="content3_box2_grid_item">
                        <img class="content3_logo" src="${items.icon}" alt="Logo" />
                        <div class="content3_box2_text">${items.text}</div>
                    </div>
                `;
                // Thêm phần tử vào div chứa thẻ bài
                contentBox.innerHTML += cardHTML;
            });
        }
        // content3 responsive effect
    const grid = document.getElementById("content3_box2_grid");
    const items = grid.getElementsByClassName("content3_box2_grid_item");


    // Xử lý kích thước các item dựa trên số lượng
    Array.from(items).forEach((item) => {
        item.style.flex = "";
        item.style.maxWidth = "";
        
    });

    if (count === 4 || count === 8) {
        Array.from(items).forEach((item) => {

            if (index <= 4) {
                item.style.flex = "1 1 calc(25% - 10px)";
                item.style.maxWidth = "calc(25% - 10px)";
            } else {
                item.style.flex = "1 1 calc(25% - 10px)";
                item.style.maxWidth = "calc(25% - 10px)";
                item.style.paddingTop = "30px";
            }
        });
    } else if (count === 5) {
        Array.from(items).forEach((item, index) => {
            if (index < 3) {
                item.style.flex = "1 1 calc(33.33% - 10px)";
                item.style.maxWidth = "calc(33.33% - 10px)";
            } else {
                item.style.flex = "1 1 calc(30% - 10px)";
                item.style.maxWidth = "calc(30% - 10px)";
                item.style.paddingTop = "30px";
            }
        });
    } else if (count === 6) {
        Array.from(items).forEach((item) => {
            item.style.flex = "1 1 calc(33.33% - 10px)";
            item.style.maxWidth = "calc(33.33% - 10px)";
            item.style.paddingTop = "30px";
        });
    } else if (count === 7) {
        Array.from(items).forEach((item, index) => {
            if (index < 4) {
                item.style.flex = "1 1 calc(25% - 10px)";
                item.style.maxWidth = "calc(25% - 10px)";
                item.style.paddingTop = "30px";
            } else {
                item.style.flex = "1 1 calc(30% - 10px)";
                item.style.maxWidth = "calc(30% - 10px)";
                item.style.paddingTop = "30px";
            }
        });
    }





    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
});
