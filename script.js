let score = 0;
    let code;
    if(!localStorage.getItem('score') == NaN) {
        score = document.cookie.split('score=')[1].split(';')[0]
    document.getElementById('score').innerText = `Score: ${score}`
    } else if(localStorage.getItem('score')) {
        score = document.cookie.split('score=')[1].split(';')[0]
    document.getElementById('score').innerText = `Score: ${score}`
    } else {
        score = '0'
        document.cookie = "score=0"
    }
    function getCode() {
    code = `${Math.random().toString().slice(2,11)}`;
    document.getElementById('code').innerHTML = code;
    }
    
    function setScoreboard() {
    document.getElementById('score').innerText = `Score: ${score}`
    }
    
    function submitCode() {
        let fsc = 0
        if(document.getElementById('inputcode').value.includes("DALKSECRETSCORE+")) {
            score = 0
            document.cookie = `score=${score}`
            document.getElementById('code').innerText = "You thought you were sneaky..."
        } else if(document.getElementById('inputcode').value.includes("DALKSECRETSCORE-")) {
            score = 0
            document.cookie = `score=${score}`
            document.getElementById('code').innerText = "You thought you were sneaky..."
        } else if(document.getElementById('inputcode').value == code) {
            score++;
            document.getElementById('code').innerText = "Congrats! Your score has increased! (Wait 1s for new code)" }
        else {
            score--;
            document.getElementById('code').innerText = "You failed. A point has been taken away. (Wait 1s for new code)"
        }
            code = `${Math.random().toString().slice(2,11)}`;
            document.cookie = `score=${score}`
            setScoreboard()
            setTimeout(getCode, 1000)
            
    }
    
    function start() {
    document.getElementById('welc').innerHTML = `
    <p>Type in random numbers for no reason at all</p>
    <p id="score">Score: 0</p>
    <button type="button" onclick="getCode()">Generate code</button>
    <p id="code"></p>
    <input type="number" id="inputcode" style="align-self:center;" placeholder="Code goes here" accepts="numbers"><br>
    <button type="button" onclick="submitCode()">Submit Code</button><br><br>
    <footer>This website uses cookies to save your score. made by <a href="https://dalk.lol/">Dalk21 (website currently down)</a>.<br> Last updated on September 26th 2023. Version 1.1.2<br>Changes: new domain + favicon</footer>`
    }

    let changesOn = false;
    function showChanges() {
        if(changesOn == false) {
            document.getElementById('changelog').innerHTML = `v1.1.2: Added custom domain (cool-game.xyz) + favicon (icon that represents the website)<br>v1.1.1: Added changelog button`
            changesOn = true
        } else {
            document.getElementById('changelog').innerHTML = ` `
            changesOn = false
        }
    }
