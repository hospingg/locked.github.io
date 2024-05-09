const rules =[ 
    {
    id: 1,
    name: "Команда та гравці",
    text: "Кожен квест призначений для групи від 2 до 6 гравців. Краще грати в команді, так як багато завдань потребують комунікації та обміну ідеями."
},
    {
    id: 2,
    name: "Без насильства та фізичних зусиль",
    text: "Всі завдання можна вирішити розумовими зусиллями та командною роботою. Будь-яке фізичне втручання або насильство заборонено"
},
    {
    id: 3,
    name: "Підказки",
    text: "Якщо команда стикається з труднощами, вони можуть використовувати підказки, які надаються гравцям. Кількість підказок обмежена, тому важливо використовувати їх обдумано."
},
    {
    id: 4,
    name: "Час",
    text: "Кожен квест має обмежений час для проходження, зазвичай від 60 до 90 хвилин. Гравці повинні використовувати час розумно та швидко розв'язувати загадки."
},
    {
    id: 5,
    name: "Заборона фото/відео під час гри",
    text: "Заборонено фотографування та відеозапис в середині квест-кімнати, щоб зберегти ефект сюрпризу та зберегти конфіденційність завдань."
}]
document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('.containers')

    for (const item of rules){
        const ruleContainer = document.createElement("div")
        const num = document.createElement("span")
        const name = document.createElement("h1")
        const text = document.createElement("p")
        const listContainer = document.createElement("li")
        const content = document.createElement('div')
        
        num.innerText = item.id
        name.innerText = item.name
        text.innerText = item.text


        ruleContainer.classList.add("rule-container")
        content.classList.add("rule-text")
        
        content.append(name, text)
        ruleContainer.append(num, content)
        listContainer.append(ruleContainer)
        list.append(listContainer)
    }
})
