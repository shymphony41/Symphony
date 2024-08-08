body {
    background-color: #101522;
    background-blend-mode: hard-light;
    background-image: radial-gradient(circle at 20% 20%, #34074e67 10%, #ffcc7000 50%),
                      radial-gradient(circle at 80% 80%, #0033ff66 10%, #0033ff00 50%),
                      radial-gradient(ellipse at 35% 70%, #4a028d66 10%, #00ff4800 50%),
                      radial-gradient(ellipse at 70% 35%, #ff005d66 10%, #ff005d00 60%);
    background-size: 250% 250%;
    animation: background-animation 30s infinite;
    overflow: hidden;
}

@keyframes background-animation {
    0% { background-position: 5% 0%; }
    25% { background-position: 20% 80%; }
    50% { background-position: 96% 100%; }
    75% { background-position: 80% 10%; }
    100% { background-position: 5% 0%; }
}

.container {
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    width:1000px;
    height:600px;
    padding:50px;
    background-color: #2c2c2c;
    box-shadow: 0 30px 50px #000000;
    border-radius: 15px;
}

/* Estilo de los recuadros arcade */
.item {
    width: 200px;
    height: 300px;
    background-position: 50% 50%;
    display: inline-block;
    transition: 0.5s;
    background-size: cover;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translate(0, -50%);
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 0, 0, 0.7);
    border: 2px solid #ffcc00;
}

.item:nth-child(1),
.item:nth-child(2) {
    left: 0;
    top: 0;
    transform: translate(0, 0);
    border-radius: 0;
    width: 100%;
    height: 100%;
    box-shadow: none;
}

.item:nth-child(3) {
    left: 50%;
}

.item:nth-child(4) {
    left: calc(50% + 220px);
}

.item:nth-child(5) {
    left: calc(50% + 440px);
}

.item:nth-child(n+6) {
    left: calc(50% + 660px);
    opacity: 0;
}

.item .content {
    position: absolute;
    top: 50%;
    left: 10px;
    width: 180px;
    text-align: left;
    padding: 10px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    transform: translate(0, -50%);
    display: none;
    font-family: 'Press Start 2P', cursive;
}

.item:nth-child(2) .content {
    display: block;
    z-index: 11111;
}

.item .name {
    font-size: 20px;
    font-weight: bold;
    opacity: 0;
    animation: showcontent 1s ease-in-out 1 forwards;
    text-transform: uppercase;
}

.item .des {
    margin: 10px 0;
    opacity: 0;
    animation: showcontent 1s ease-in-out 0.3s 1 forwards;
    font-size: 14px;
    line-height: 1.4;
}

.item button {
    padding: 5px 10px;
    border: 1px solid #ffcc00;
    background-color: #ff5733;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5px;
    opacity: 0;
    animation: showcontent 1s ease-in-out 0.6s 1 forwards;
    cursor: pointer;
}

@keyframes showcontent {
    from {
        opacity: 0;
        transform: translate(0, 100px);
        filter: blur(33px);
    }
    to {
        opacity: 1;
        transform: translate(0, 0);
        filter: blur(0);
    }
}

.buttons {
    position: absolute;
    bottom: 30px;
    z-index: 222222;
    text-align: center;
    width: 100%;
}

.buttons button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #555;
    transition: 0.5s;
}

.buttons button:hover {
    background-color: #bac383;
}
