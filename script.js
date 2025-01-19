function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


async function submitWallet() {
    const walletInput = document.getElementById('wallet-address');
    const successMessage = document.getElementById('success-message');
    const walletAddress = walletInput.value.trim();

    if (walletAddress === '') {
        alert('Please enter a valid wallet address!');
        return;
    }

    try {
        // 서버로 지갑 주소 전송
        const response = await fetch('http://localhost:3000/submit-wallet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ walletAddress }),
        });

        if (response.ok) {
            successMessage.style.display = 'block';
            walletInput.value = ''; // 입력 필드 초기화
        } else {
            alert('Failed to submit wallet address.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting your wallet address.');
    }
}


