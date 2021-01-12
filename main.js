// const { project } = require("paper");

// const { view } = require("paper");

let animalName = 'dog'
// let count = 10
let www = true

let animals = ['dogs', 'cats', 'rabblts']
console.log(animals);

let animal = {}
animal.name = animalName
animal.weight = 100
animal.color = 'blue'
console.log(animal.color);


window.onload = () => {

    let heads = [
        'tou1.png', 'tou2.png', 'tou3.png', 'tou4.png', 'tou5.png', 'tou6.png', 'tou7.png'
    ]
    let bodys = [
        'clothes1.png', 'clothes2.png', 'clothes3.png', 'clothes4.png', 'clothes5.png', 'clothes6.png', 'clothes7.png', 'clothes8.png',
        'clo1.png',
        'clo2.png',
        'clo3.png',
        'clo4.png',
        'clo5.png',
        
    ]

    let talks = [
        'talk1.png'
    ]

    let trees = [
        'tree1.png', 'tree2.png', 'tree3.png', 'tree4.png', 'tree5.png', 'tree6.png', 'tree7.png', 'tree8.png', 'tree9.png', 'tree10.png'
    ]
    let plants = [
        'plants1.png', 'plants2.png', 'plants3.png', 'plants4.png', 'plants5.png', 'plants6.png', 'plants7.png', 'plants8.png'
    ]

    let springTrees = [
        'springplant1.png',
        'springplant2.png',
        'springplant3.png',
        'springplant4.png',
        'springplant5.png',
        'springplant6.png',
        'springplant7.png',
        'springplant8.png',
        'springplant9.png',
        'springplant10.png',
        'springplant11.png',
        'springplant12.png',
    ]

    let autumnTrees = [
        'autumnplant1.png',
        'autumnplant2.png',
        'autumnplant3.png',
        'autumnplant4.png',
        'autumnplant5.png',
        'autumnplant6.png',
        'autumnplant7.png',
        'autumnplant8.png',
      
    ]

    let autumnGrass = [
        'autumngrass1.png',
        'autumngrass2.png',
        'autumngrass3.png',
        'autumngrass4.png',
        'autumngrass5.png',
        'autumngrass6.png',
        'autumngrass7.png',
        'autumngrass8.png',
      
    ]

    let winterGrass = [
        'wintergrass1.png',
        'wintergrass2.png',
        'wintergrass3.png',
        'wintergrass4.png',
        'wintergrass5.png',
        'wintergrass6.png',
        'wintergrass7.png',
        'wintergrass8.png',
      
    ]

    let winterTrees = [
        'winterplant1.png',
        'winterplant2.png',
        'winterplant3.png',
        'winterplant4.png',
        'winterplant5.png',
        'winterplant6.png',
        'winterplant7.png',
        'winterplant8.png',
        'winterplant9.png',
    ]



    let springGrass = [
        'springgrass1.png',
        'springgrass2.png',
        'springgrass3.png',
        'springgrass4.png',
        'springgrass5.png',
        'springgrass6.png',
        'springgrass7.png',
        'springgrass8.png',
        'springgrass9.png',
        'springgrass10.png',
        'springgrass11.png',
        
    ]

    let clouds = [
        'yun1.png', 'yun2.png', 'yun3.png'

    ]
    let mounts = [
        'mount1.png', 'mount2.png', 'mount3.png'
    ]

    let characterNames = [
        '小明', '小红', '小黄'
    ]

    let chars  = [
        '😎','😀','😃','😄','😁','😆','😅','😂','🤣','🥲','😊','🙂','🙃','😉','😌','🥰','🥳','🥺','🥶','😳','😡','😐'
    ]

    let springSentence = [
        'Spring is beautiful!',
    ]

    let autumnSentence = [
        'I love autumn.',
    ]

    let winterSentence = [
        'It is really cold',
    ]

    //添加句子

    function rn() {
        return Math.random() > 0.5 ? 1 : -1
    }

    let seasons = ['spring', 'autumn', 'winter']

    let journey = {
        day: 0,
        monthDay:0,
        season: seasons[Math.floor(Math.random() * seasons.length)],
        position: '',
        newSeason() {
            this.season = seasons[Math.floor(Math.random() * seasons.length)]
        }
    }


    function randomJourney() {
        journey.day++
        journey.monthDay ++
        if (journey.monthDay == 10) {
            journey.monthDay = 0
            journey.newSeason()
        }
        let sentence 
        switch (journey.season){
            case 'spring':
                    sentence = springSentence
                    break
                case 'autumn':
                    sentence = autumnSentence
                    break;
                case 'winter':
                    sentence = winterSentence
                    break;
        }
        return `Today is ${journey.day}th day, is a ${journey.season}, ${sentence[Math.floor(Math.random() *sentence.length)]}`
    }

    class Animal {
        constructor() {
            let 头部随机序列号 = Math.floor(Math.random() * heads.length)
            let 衣服随机序列号 = Math.floor(Math.random() * bodys.length)
            let talkIndex = Math.floor(Math.random() * talks.length)
            this.characterName = characterNames[Math.floor(Math.random() * characterNames.length)]



            const loadBody = new Promise((res, rej) => {
                this.body = new Raster(bodys[衣服随机序列号])
                this.body.name = 'body'
                this.body.onLoad = () => {
                    res()
                }
            })

            const loadHead = new Promise((res, rej) => {
                this.head = new Raster(heads[头部随机序列号])
                this.head.name = 'head'
                this.head.onLoad = () => {
                    res()
                }
            })

            Promise.all([loadBody, loadHead]).then((res) => {
                this.group._children['head'].bounds.centerX = this.group._children['body'].bounds.centerX
                this.group.bounds.bottom = view.bounds.bottom

            })

            this.talk = new Raster(talks[talkIndex])
            this.text = new PointText(new Point(0, 0));


            this.text.justification = 'center';
            this.text.fontSize = 100
            // this.text.fillColor = 'black';
            this.text.content = chars[Math.floor(Math.random()*chars.length)];
            this.text.bounds.center = this.talk.bounds.center

            this.body.sendToBack()
            this.body.position.y = 130
            this.talk.position = [150, -100]
            this.text.position = [150, -100]
            this.talk.name = 'talk'
            this.text.name = 'talkText'
            this.talk.opacity = 0
            this.text.opacity = 0

            this.group = new Group()

            this.group.addChildren([this.talk, this.text, this.body, this.head])
            this.group.scaling.x = rn()
            this.group.position = [Math.random() * view.bounds.width, 600]
            this.group.scale(Math.random() + 0.3)
            this.group.position.x = Math.random() * window.innerWidth
            // this.move()
            // console.log(Tween);
        }

        move() {

            // console.log(TWEEN);
            let moveTween = new TWEEN.Tween(this.group.position)
                .to({ y: '+10' }, 100)
                .repeat(2)
                .yoyo(true)
                .start()
        }

        toggleTalk() {
            let state = this.group._children['talk'].opacity
            if (state == 1) {
                this.group._children['talk'].opacity = 0
                this.group._children['talkText'].opacity = 0
            } else {
                this.group._children['talk'].opacity = 1
                this.group._children['talkText'].opacity = 1
            }

        }

    }
    class Tree {
        constructor() {
            let seasonTrees
            switch (journey.season) {
                case 'spring':
                    seasonTrees = springTrees
                    break
                case 'autumn':
                    seasonTrees = autumnTrees
                    break;
                case 'winter':
                    seasonTrees = winterTrees
                    break;
                default:
                    seasonTrees = springTrees
                    break;
            }
            let 树 = Math.floor(Math.random() * seasonTrees.length)
            this.tree = new Raster(seasonTrees[树])
            this.tree.sendToBack()
            this.tree.position.x = Math.random() * window.innerWidth
            this.tree.onLoad = () => {
                this.tree.scale(Math.random()+0.5)
                this.tree.bounds.bottom = view.bounds.bottom
            }
            this.tree.scaling.x = rn()
        }
    }

    class Yun {
        contructor() {
            let 云 = Math.floor(Math.random() * clouds.length)
            this.yun = new Raster(clouds[云])

            this.yun.onLoad = () => {
                this.yun.scale(Math.random() * 2)
                this.yun.bounds.top = view.bounds.top
            }


        }
    }


    class Plant {
        constructor() {
            let seasonPlants
            switch (journey.season) {
                case 'spring':
                    seasonPlants = springGrass
                    break
                case 'autumn':
                    seasonPlants = autumnGrass
                    break;
                case 'winter':
                    seasonPlants = winterGrass
                    break;
                default:
                    seasonPlants = springGrass
                    break;
            }
            let 草 = Math.floor(Math.random() * seasonPlants.length)
            this.plant = new Raster(seasonPlants[草])
            this.plant.position.x = window.innerWidth * Math.random()
            this.plant.onLoad=()=>{
                let smaller = Math.random() 
                
                // this.plant.bounds.bottom = view.bounds.bottom
                let mode = Math.floor(Math.random() * 5)
            switch (mode) {
                case 0:
                case 1:
                case 2:
                case 3:
                    this.plant.scaling.x = rn()
                    this.plant.scale(smaller/1.5)
                    this.plant.bounds.bottom = view.bounds.bottom
                    break;
                case 4:
                    this.plant.scale(smaller/1.5)
                    this.plant.rotation = 90
                    this.plant.bounds.left = view.bounds.left
                    this.plant.position.y = Math.random() * window.innerHeight
                    break;
                case 5:
                    this.plant.scale(smaller/1.5)
                    this.plant.rotation = -90
                    this.plant.bounds.right = view.bounds.right
                    this.plant.position.y = Math.random() * window.innerHeight
                    break;
            }
            }


            
        }
    }

    function animate(time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
    }
    requestAnimationFrame(animate)

    paper.install(window)
    paper.setup(document.querySelector('canvas'))

    let count = 4
    let animalCount = 10

    function newPage() {
        let animalArray = []

        for (let i = 0; i < 10; i = i + 1) {
            let tree = new Tree()
        }

        for (let i = 0; i < 30; i = i + 1) {
            let tree = new Plant()
        }

        for (let i = 0; i < count; i = i + 1) {
            let yun = new Yun()
        }

        for (let i = 0; i < 10; i = i + 1) {
            let animal = new Animal()
            if (i < 4) {
                animal.group.sendToBack()
            }
            animal.group.onClick = () => {
                animal.move()
                animal.toggleTalk()

            }
            animalArray.push(animal)

        }
    }



    newPage()

    let btn = document.querySelector('#btn')

    btn.addEventListener('mouseenter', mouseIn)
    btn.addEventListener('mouseleave', mouseOut)

    function mouseIn() {
        document.querySelector('#currentPage').classList.add('cnvIn')
    }
    function mouseOut() {
        document.querySelector('#currentPage').classList.remove('cnvIn')
    }

    let indexPage = document.querySelector('#indexPage')
    indexPage.addEventListener('click', () => {
        document.querySelector('#indexPage').classList.toggle('indexOpen')
    })

    btn.addEventListener('click', () => {

        let url = document.querySelector('#canvas').toDataURL()
        let img = new Image()
        let img2 = new Image()
        let page = document.createElement('div')
        page.style.opacity = 0
        let title = document.createElement('h1')
        title.classList.add('page-title')
        title.innerHTML = 'Day ' + journey.day
        page.appendChild(title)


        img.src = url
        img2.src = url
        img.classList.add('page-img')
        img2.classList.add('canvas-img')


        let text = document.createElement('p')
        text.classList.add('page-content')
        text.innerHTML = randomJourney()
        img.style.transform = `rotate(${Math.random() * 10 * rn()}deg)`
        text.style.left = window.innerWidth / 2 + rn() * Math.random() * window.innerWidth / 4 + 'px'
        text.style.top = window.innerHeight / 2 + rn() * Math.random() * window.innerHeight / 4 + 'px'

        document.querySelector('#currentPage').appendChild(img2)
        let pageMoveAni = new TWEEN.Tween({ top: 0 })
            .to({ top: -1000 }, 500)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate((obj) => {

                img2.style.transform = `translateY(${obj.top}px)`
            })
            .onComplete(() => {
                document.querySelector('#currentPage').removeChild(img2)
                page.appendChild(text)
                page.appendChild(img)
                page.classList.add('page')
                window.scrollBy({
                    top: window.innerHeight,
                    behavior: 'smooth'
                })
                page.style.opacity = 1
                newPage()
            })
            .start()

        document.querySelector('.pages').appendChild(page)

        paper.project.clear()
        // document.querySelector('#canvas').style.width = Math.max(Math.random() * window.innerWidth, 500) + 'px'

        // paper.setup(document.querySelector('canvas'))




    })





}
