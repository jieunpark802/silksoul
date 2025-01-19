function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


function submitWallet() {
    const walletInput = document.getElementById('wallet-address');
    const successMessage = document.getElementById('success-message');

    if (walletInput.value.trim() === '') {
        alert('Please enter a valid wallet address!');
    } else {
        // 로컬스토리지에 저장
        const walletAddress = walletInput.value.trim();
        let walletList = JSON.parse(localStorage.getItem('walletAddresses')) || []; // 기존 데이터 가져오기
        walletList.push(walletAddress); // 새 주소 추가
        localStorage.setItem('walletAddresses', JSON.stringify(walletList)); // 저장

        // 성공 메시지 표시
        successMessage.style.display = 'block';

        // 입력 필드 초기화
        walletInput.value = '';
    }
}
