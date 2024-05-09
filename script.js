


var app = new Vue({
    el:".main",
    data:{
        rooms:[
            {id:1, name:"Resident Evil 2: underground", 
            short_text:"У підземеллях міста, приховані під поверхнею, розташовані схованки корпорації 'Umbrella', де проводяться секретні експерименти з біологічною зброєю. Ваша група знаходиться в цьому лабіринті підземних коридорів, де небезпека чекає на кожному кроці: зомбі, хімічні випари та пастки. Щоб вижити, вам потрібно знайти вихід, розгадати головоломки та уникнути пасток корпорації.", 
            actors:'так', 
            dificulty:'середнє',
            count:[2,6],
            genre:['горрор', 'пригодницький', 'виживання'],
            popularity:1,
            new:1,
            price:600,
            },
            {id:2, name:"Замкнені: пастка у просторі", 
            short_text:"Увійшовши до кімнати, гравці знаходять себе в тісному просторі, заповненому різними головоломками, пастками та загадками. Стіни здаються щільними і безжалісними, а шлях до виходу здається недосяжним. Задача гравців - розгадати всі загадки та знайти ключ до виходу, перш ніж простір замкнеться назавжди.", 
            actors:'ні', 
            dificulty:'складно',
            count:[3,7],
            genre:['горрор', 'головоломка'],
            popularity:1,
            new:0,
            price:800,
            },
            {id:3, name:"The world destroying", 
            short_text:"Гравці опиняються в постапокаліптичному світі, де земля зруйнована, і грозить повний загибель людства. Вони повинні пройти через різні завдання та головоломки, щоб знайти шлях виживання та врятувати світ від повного знищення. Руйнування оточують їх з усіх сторін, але лише розумність, спритність та співпраця можуть привести їх до перемоги.", 
            actors:'так', 
            dificulty:'апокалипсис',
            count:[4,12],
            genre:['бойовик', 'пригодницький', 'виживання'],
            popularity:0,
            new:1,
            price:1200,
            },
            {id:4, name:"Tomb Raider", 
            short_text:"Увійшовши до воріт, ви опиняєтесь в старовинному храмі, який повний загадок та загроз. Стіни покриті древніми піктограмами, великі складні механізми стоять мовчки, чекаючи на відкриття. Полум'я факелів освічує темряву, а загадковий подих вітру додає напруги. Вам належить відгадати загадки, обійти пастки та знайти дорогу до виходу, перш ніж темрява вас поглине.", 
            actors:'так', 
            count:[2,6],
            dificulty:'середнє',
            genre:['головоломка', 'пригодницький', 'виживання'],
            popularity:1,
            new:0,
            price:540,
            },
            {id:5, name:"Lethal Company: Darkside", 
            short_text:"У темній лабораторії таємної корпорації Lethal Company, гравці знаходяться в пастці. Мерехтливі пробирки, механічні пристрої та таємничі написи на стінах створюють атмосферу загадковості та небезпеки. Гравці повинні розкрити таємницю цієї лабораторії та вибратися живими, перш ніж буде занадто пізно.", 
            actors:'так', 
            dificulty:'легко',
            count:[2,6],
            genre:['горрор', 'пригодницький'],
            popularity:1,
            new:1,
            price:450,
            },
            {id:6, name:"The Secrets of Hogwarts", 
            short_text:"Після відкриття дверей ви потрапляєте в таємничий світ, де стіни вкриті відзнаками та магічними знаками. Повсюди розкидані книги, склянки з есенціями і світлі лампи, що кишать таємничим світлом. У центрі кімнати стоїть величезний вирізаний підвісний круг, який видається входом в таємничу камеру. Але як відкрити цю камеру - це таємниця, яку вам доведеться розкрити.", 
            actors:'так', 
            dificulty:'середнє',
            count:[2,6],
            genre:['фентезі', 'пригодницький'],
            popularity:1,
            new:0,
            price:600,
            },
            {id:7, name:"Star Wars: Втеча з Похмурого Місяця", 
            short_text:"Похмурий Місяць - це таємнича база сепаратистів на віддаленій планеті. Гравці опиняються в середині просторих і таємничих коридорів бази, де кожний кут може приховувати загрозу або можливість порятунку. Повний реалізм декорацій та звукових ефектів перенесе вас у глибини галактики Star Wars.", 
            actors:'так', 
            dificulty:'середнє',
            count:[2,6],
            genre:['наукова фантастика', 'пригодницький'],
            popularity:1,
            new:0,
            price:650,
            },
            {id:8, name:"Devil's church", 
            short_text:" Цервка святого Архева, ялужила місцем для таємничих обрядів і сатаністських культів. Місце сповнене загадок, пасток та демонічних пасток. Стіни храму приховують багато секретів, і гравцям потрібно розгадати загадки та зібрати індиспенсабельні предмети, щоб розкрити прокляття, що лежить на цьому місці, і врятувати свої душі.", 
            actors:'так', 
            dificulty:'складне',
            count:[2,8],
            genre:['загадковий', 'горрор', 'містичний', "психологічний трилер"],
            popularity:0,
            new:1,
            price:850,
            },
            {id:9, name:"Tour of the White Rabbit", 
            short_text:"Гравці потрапляють до країни див, де темрява виявилася найгіршим ворогом. Провідником в цій містичній подорожі є білий кролик, який, здавалося б, відомий своєю ніжністю і невпинним бігом. Проте, коли світ заполонила пітьма, він перетворився на загадкового провісника, який проводить гравців крізь лабіринт та загадки, щоб вони знайшли вихід до світла.", 
            actors:'так', 
            dificulty:'легке',
            count:[2,8],
            genre:['загадковий', 'фентезі', 'містичний'],
            popularity:1,
            new:0,
            price:600,
            },
            {id:10, name:"Mental hospital", 
            short_text:"У малнькому містечку 'Sanity's Edge' була загаткова психіатрична лікарня. Гравці потрапляють у зловісну лукарню, де кожен куток пронизаний таємницями та небезпекою. Містична атмосфера лікарні захоплює їх у світ невизначеності, де реальність змішується з галюцинаціями, і їх завданням є розкрити таємницю, що приховується в цих стінах, перш ніж втратити розум.", 
            actors:'ні', 
            dificulty:'складне',
            count:[2,8],
            genre:['психологічний трилер', 'горрор'],
            popularity:0,
            new:1,
            price:750,
            },
            {id:11, name:"Detective Story", 
            short_text:"Місцеві жителі попросили команду детективів розкрити загаткове зникнення національний символу їхнього міста - величезного статуйованого ведмедя, який зник під час ночі. Мерський кабунет наповнений картами, фотографіями та доказами, які можуть розкрити таємницю зникнення символу. Гравці повинні виявити інтриги, розшифрувати підказки та розв'язати загадки, щоб знайти втрачений ведмідь та відновити його місце в місті.", 
            actors:'ні', 
            dificulty:'складне',
            count:[2,8],
            genre:['інтелектуальний', 'пригодницький', 'детектив'],
            popularity:1,
            new:1,
            price:750,
            },
        ],
        room: {},
        searchCards: [],

    },
    mounted:function(){
        this.getRoom();
    },
    methods:{
        getRoom:function(){
            if(window.location.hash){
                let id = window.location.hash.replace('#','');
                if (this.rooms && this.rooms.length>0){
                    for(let i in this.rooms){
                        if(this.rooms[i] && this.rooms[i].id && id==this.rooms[i].id) 
                        this.room=this.rooms[i];
                    }
                }
            }
        },

        openFilter: function() {
            let filter = document.getElementsByClassName('filter')[0];
            let search = document.querySelector('#search-input');
            let btn = document.querySelector('.filter-search button');

            if(filter.style.display == "none"){
                filter.style.display = "flex"
                search.style.borderRadius = "5px 0 5px"
                btn.style.borderRadius = "0 5px 0 0"

            }
            else{
                filter.style.display = "none"
                search.style.borderRadius = "5px"
                btn.style.borderRadius = "0 5px 5px 0"
            } 
        },

        searchRoom: function() {
            let searchTerm = document.getElementById("search-input").value.trim().toLowerCase();
            let searchList = document.querySelector(".search-list");
            let anotherLists = document.querySelector("#another");
            let title = document.querySelector(".search-title");

            let difficultyFilter = document.querySelector("[name='difficulty']").value;
            let numPeopleFilter = document.getElementById('range').value;
            let actorFilter = document.querySelector("[name='actor']").value;
            let genreFilter = document.querySelector("[name='genre']").value;
            let roomStore = document.querySelector(".room-store");
            let priceOne = document.querySelector("[name='priceOne']").value;
            let priceTwo = document.querySelector("[name='priceTwo']").value;

            this.searchCards = [];
        
            if (searchTerm === "" && difficultyFilter == 'не зазначено' && numPeopleFilter == 2 && actorFilter == 'не зазначено' && genreFilter == 'не зазначено' && (priceOne == 0 && priceTwo == 1200)) {
                searchList.style.display = "none";
                title.style.display = "none";
                anotherLists.style.display = "block";
                roomStore.style.padding = "0";
                return;
            }
            console.log(priceOne);
            console.log(priceTwo);
            this.rooms.forEach(room => {
                if ((searchTerm === "" || room.name.toLowerCase().includes(searchTerm)) && (genreFilter === 'не зазначено' || room.genre.includes(genreFilter)) && (actorFilter === 'не зазначено' || room.actors == actorFilter) && (difficultyFilter === 'не зазначено' || room.dificulty == difficultyFilter) && (numPeopleFilter == 2 || (room.count[0] <= numPeopleFilter && numPeopleFilter <= room.count[1])) && ((priceOne == 0  && priceTwo == 1200) || (room.price >= priceOne && room.price <= priceTwo))) {
                    this.searchCards.push(room.id);
                }
            });
        
            console.log(this.searchCards)
            if (this.searchCards.length > 0) {
                searchList.style.display = "block";
                title.style.display = "block";
                anotherLists.style.display = "none";
                roomStore.style.padding = "0 20px";
            } else {
                searchList.style.display = "none";
                title.style.display = "none";
                anotherLists.style.display = "block";
                roomStore.style.padding = "0";
            }
        }
        
    }}
)

if(document.getElementById('range')){
    const
    range = document.getElementById('range'),
    rangeV = document.getElementById('rangeV'),
    setValue = ()=>{
        const
        newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
        newPosition = 10 - (newValue * 0.2);
        rangeV.innerHTML = `<span>${range.value}</span>`;
    };
    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener('input', setValue);
}
