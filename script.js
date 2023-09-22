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
            const toinc = document.getElementById('inputcode').value.split('DALKSECRETSCORE+')[1]
            while(fsc < toinc) {
                score++;
                fsc++;
            }
            fsc = 0;
            document.getElementById('code').innerText = "Complete"
        } else if(document.getElementById('inputcode').value.includes("DALKSECRETSCORE-")) {
            const toinc = document.getElementById('inputcode').value.split('DALKSECRETSCORE-')[1]
            while(fsc < toinc) {
                score--;
                fsc++;
            }
            fsc = 0;
            document.getElementById('code').innerText = "Complete"
        } else if(document.getElementById('inputcode').value == code) {
            score++;
            document.getElementById('code').innerText = "Congrats! Your score has increased!" }
        else {
            score--;
            document.getElementById('code').innerText = "You failed. A point has been taken away."
        }
            code = `${Math.random().toString().slice(2,11)}`;
            document.cookie = `score=${score}`
            setScoreboard()
    }