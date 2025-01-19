const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // 정적 파일 제공

const dataFile = path.join(__dirname, 'data', 'walletAddresses.json');

// 초기 데이터 파일 생성
if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([]));
}

// 지갑 주소 저장 API
app.post('/submit-wallet', (req, res) => {
    const { walletAddress } = req.body;

    if (!walletAddress) {
        return res.status(400).json({ error: 'Wallet address is required' });
    }

    // 데이터 파일에 추가
    const walletAddresses = JSON.parse(fs.readFileSync(dataFile));
    walletAddresses.push(walletAddress);
    fs.writeFileSync(dataFile, JSON.stringify(walletAddresses));

    res.status(200).json({ message: 'Wallet address saved successfully' });
});

// 저장된 주소 가져오기 API
app.get('/wallets', (req, res) => {
    const walletAddresses = JSON.parse(fs.readFileSync(dataFile));
    res.status(200).json(walletAddresses);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
