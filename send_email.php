<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 폼에서 전달받은 데이터 가져오기
    $name = htmlspecialchars($_POST['name']); // 이름
    $email = htmlspecialchars($_POST['email']); // 이메일
    $message = htmlspecialchars($_POST['message']); // 메시지

    // 이메일 설정
    $to = "wirocent@gmail.com"; // 받을 이메일 주소
    $subject = "New Message from $name"; // 이메일 제목
    $headers = "From: $email\r\n"; // 보낸 사람 정보
    $headers .= "Reply-To: $email\r\n"; // 회신 이메일 설정
    $body = "You have received a new message from your website contact form.\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Message:\n$message";

    // 이메일 전송
    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Sorry, there was an issue sending your message. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>
