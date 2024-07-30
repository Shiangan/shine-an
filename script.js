document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    const toggleMusicButton = document.getElementById('toggle-music');
    const announcementsSection = document.getElementById('announcements');

    // 控制音樂播放與暫停
    toggleMusicButton.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            toggleMusicButton.textContent = '🔇';
        } else {
            music.pause();
            toggleMusicButton.textContent = '🔊';
        }
    });

    // 處理上傳表單的提交
    const uploadForm = document.getElementById('upload-form');
    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(uploadForm);

        const title = formData.get('title');
        const content = formData.get('content');
        const imageFile = formData.get('image');

        if (title && content && imageFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const newAnnouncement = document.createElement('div');
                newAnnouncement.classList.add('announcement');
                
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = '逝者照片';
                img.classList.add('announcement-img');
                
                const contentDiv = document.createElement('div');
                contentDiv.classList.add('announcement-content');
                
                const titleElement = document.createElement('h2');
                titleElement.textContent = title;
                
                const contentElement = document.createElement('p');
                contentElement.textContent = content;
                
                contentDiv.appendChild(titleElement);
                contentDiv.appendChild(contentElement);
                
                newAnnouncement.appendChild(img);
                newAnnouncement.appendChild(contentDiv);
                
                announcementsSection.appendChild(newAnnouncement);
            };
            reader.readAsDataURL(imageFile);

            // 重置表單
            uploadForm.reset();
        } else {
            alert('請填寫所有必填欄位並上傳圖片');
        }
    });
});
