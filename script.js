document.addEventListener('DOMContentLoaded', function() {
    // 字體選擇變更
    document.getElementById('font-choice').addEventListener('change', function() {
        const selectedFont = this.value;
        changeFont(selectedFont);
    });

    function changeFont(font) {
        document.body.style.fontFamily = font;
    }

    // 表單提交事件處理
    document.getElementById('deceased-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // 獲取表單數據
        const name = document.getElementById('name').value;
        const photo = document.getElementById('photo').files[0];
        const birthDate = document.getElementById('birth-date').value;
        const deathDate = document.getElementById('death-date').value;
        const funeralSpace = document.getElementById('funeral-space').value;
        const funeralDate = document.getElementById('funeral-date').value;
        ('funeral-location').value;
        const otherFuneralLocation = document.getElementById('other-funeral-location').value;
        const familyServiceTime = document.getElementById('family-service-time').value;
        const publicServiceTime = document.getElementById('public-service-time').value;
        const lifeStory = document.getElementById('life-story').value;
        const musicChoice = document.getElementById('music-choice').value;

        // 顯示訃聞詳情區域
        document.getElementById('obituary-section').style.display = 'block';

        // 填充訃聞內容
        document.getElementById('deceased-name').textContent = name;
        document.getElementById('birth-date-text').textContent = birthDate;
        document.getElementById('death-date-text').textContent = deathDate;
        document.getElementById('funeral-space-text').textContent = funeralSpace;
        document.getElementById('funeral-date-text').textContent = funeralDate;
        document.getElementById('funeral-location-text').textContent = funeralLocation === '其他' ? otherFuneralLocation : funeralLocation;
        document.getElementById('family-service-time-text').textContent = familyServiceTime;
        document.getElementById('public-service-time-text').textContent = publicServiceTime;
        document.getElementById('life-story-text').textContent = lifeStory;

        // 設置背景音樂
        const backgroundMusic = document.getElementById('background-music');
        backgroundMusic.src = musicChoice;
        backgroundMusic.play();

        // 處理照片上傳
        if (photo) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('deceased-photo').src = e.target.result;
            };
            reader.readAsDataURL(photo);
        }

        // 重置表單
        document.getElementById('deceased-form').reset();
    });

    // 留言表單提交
    document.getElementById('message-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const message = document.getElementById('message-input').value.trim();
        if (message === '') return;

        const messagesDiv = document.getElementById('messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.textContent = message;
        messagesDiv.appendChild(messageDiv);

        document.getElementById('message-form').reset(); // 清空留言表單
    });

    // 花籃訂購表單提交
    document.getElementById('flower-order-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const senderName = document.getElementById('sender-name').value.trim();
        const recipientName = document.getElementById('recipient-name').value.trim();
        const recipientAddress = document.getElementById('recipient-address').value.trim();
        const invoice = document.getElementById('invoice').value;
        const flowerBasketMessage = document.getElementById('flower-basket-message').value.trim();

        // 顯示訂購信息（這裡只是模擬顯示）
        alert(`訂購人姓名: ${senderName}\n收件人姓名: ${recipientName}\n收件人地址: ${recipientAddress}\n是否需要發票: ${invoice}\n花籃留言: ${flowerBasketMessage}`);

        // 清空訂購表單
        document.getElementById('flower-order-form').reset();
    });
});
