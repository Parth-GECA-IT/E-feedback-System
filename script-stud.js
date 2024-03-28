for (let i = 1; i <= 10 ; i++) {
    document.querySelector(`.ques${i}`).insertAdjacentHTML("afterend", `<div class="rate">
    <input type="radio" id="star${i}.5" value="5" />
    <label for="star${i}.5"></label>
    <input type="radio" id="star${i}.4" value="4" />
    <label for="star${i}.4"></label>
    <input type="radio" id="star${i}.3" value="3" />
    <label for="star${i}.3"></label>
    <input type="radio" id="star${i}.2" value="2" />
    <label for="star${i}.2"></label>
    <input type="radio" id="star${i}.1" value="1" />
    <label for="star${i}.1"></label>
    </div>`)
}