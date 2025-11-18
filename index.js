let submit = document.getElementById('btn').addEventListener('click', function() {
    const dollar = document.getElementById('input').value
    const natija = document.getElementById('p')
    let som = dollar * 12000
    natija.innerText = som + 'UZS'
    console.log(som)
    natija.classList = 'soya'
})

