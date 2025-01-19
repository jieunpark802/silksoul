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
        // 성공 메시지 표시
        successMessage.style.display = 'block';

        // 입력 필드 초기화
        walletInput.value = '';
    }
}
