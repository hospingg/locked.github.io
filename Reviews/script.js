const reviews =[ 
    {
    id: 1,
    name: "Непереможні",
    room: "5 Night’s at Freddy",
    text: "Вражені вашими квест-кімнатами - це найкраща ідея для вечора з друзями.Квести виходять за рамки звичайних розваг, надаючи вам можливість розкрити свої справжні таланти в груповому вирішенні проблем та виявленні творчого підходу до розв'язання загадок"
},
    {
    id: 2,
    name: "Зірки",
    room: "Star Wars",
    text: "Ми з друзями нещодавно відвідали квест-кімнату 'Star Wars', і це був неймовірний досвід! З моменту, коли ми увійшли до кімнати, нас повністю занурили в атмосферу всесвіту Зоряних Війн. Декорації були надзвичайно деталізованими та реалістичними, що дозволило нам відчути себе справжніми джедаями на завданні."
},
    {
    id: 3,
    name: "Чаклунки",
    room: "The Secrets of Hogwarts",
    text: "Це був неймовірний досвід!З самого початку нас зустрів привітний персонал, який детально пояснив правила гри та занурив нас у магічну атмосферу Гаррі Поттера. Декорації та обстановка в кімнаті були виконані на високому рівні – ми дійсно відчули себе учнями Гоґвортсу. Кожна деталь була продумана до дрібниць, від чарівних паличок до портретів, що рухаються. Завдання були різноманітні та захопливі, іноді доводилось добряче подумати, але це тільки додавало азарту!"
}]

document.addEventListener('DOMContentLoaded', function(){
    const ul = document.querySelector('#review-list');

    for (const item of reviews){
        const listItem = document.createElement("li");
        const reviewContainer = document.createElement("div");
        const textContainer = document.createElement("div");
        const name = document.createElement("h1");
        const roomName = document.createElement("h2");
        const text = document.createElement("p");
        const italic = document.createElement("i");
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');
        
        name.innerText = "Команда " + item.name;
        italic.innerText = item.text;
        roomName.innerText = "квест-кімната " + item.room; // Fixed assignment operator

        img.src = `../photos/review${item.id}.png`;
        img.alt = `${item.name} review image`; // Added alt text for better accessibility

        reviewContainer.classList.add("review-container");
        textContainer.classList.add("text-container");
        imgContainer.classList.add("img-container");
        
        text.append(italic);

        textContainer.append(name, roomName, text);
        imgContainer.append(img); // Append the image to the imgContainer
        reviewContainer.append( textContainer, imgContainer); // Append imgContainer and textContainer to reviewContainer
        listItem.append(reviewContainer); // Append reviewContainer to listItem
        ul.append(listItem); // Append listItem to the list
    }
});
