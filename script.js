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


//하마토큰
const targetDate = new Date("2025-02-10T00:00:00").getTime();
const countdownTimer = document.getElementById('countdown-timer');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTimer.innerHTML = `
        <div>${days}d</div>
        <div>${hours}h</div>
        <div>${minutes}m</div>
        <div>${seconds}s</div>
    `;

    if (distance < 0) {
        clearInterval(interval);
        countdownTimer.innerHTML = "HamaCoin is Live!";
    }
}

const interval = setInterval(updateCountdown, 1000);