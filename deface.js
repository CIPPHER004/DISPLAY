document.body.innerHTML = `
    <style>
        body {
            background-color: black;
            color: lime;
            font-family: 'Courier New', monospace;
            text-align: center;
            margin-top: 100px;
        }

        h1 {
            font-size: 60px;
            margin-bottom: 20px;
        }

        p {
            font-size: 30px;
            animation: blink 1s infinite;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
    </style>
    <h1>Hacked by IG</h1>
    <p>I’m not a virus... I’m just your computer’s new best friend 😈</p>
`;
