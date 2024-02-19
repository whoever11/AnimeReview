const db = require('../db')
const Anime = require('../models/anime')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const animes = [
        {
            name: 'Naruto',
            description: `On the day of Naruto Uzumaki's birth the village of Konoha was attacked by the 9-tailed fox demon. In order to protect the village Naruto's father the 4th hokage sacrificed his life and sealed the demon in his newborn son. 13 years later Naruto graduates the ninja academy and becomes a shinobi with the goal to be the hokage of the village. Joining him are rival Sasuke Uchiha who attempts to gain power to avenge his clan after they were murdered by his older brother Itachi. 
            And Sakura Haruno who is Naruto's love interest who of course loves his rival Sasuke. But when Itachi returns to the village after the chunnin exams and Sasuke proves to be powerless against him, Sasuke will fall to the villainous Orochimaru to gain power. Naruto must do everything in his power to stop his friend from losing himself to darkness even if it means losing himself.`,
            genres: 'Action, Adventure, Fantasy, Shounen',
            episodes: 220,
            characters: 'Naruto, Sasuke, Sakura, Kakashi',
            aired: { from: '2002', to: '2007' },
            image: 'https://e7.pngegg.com/pngimages/784/446/png-clipart-naruto-sakura-and-sasuke-illustration-naruto-ultimate-ninja-storm-naruto-shippuden-ultimate-ninja-storm-4-naruto-uzumaki-kakashi-hatake-naruto-computer-wallpaper-sasuke-uchiha.png',
            rating: 9.5
        },
        {
            name: 'One Piece',
            description: `Gol D. Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates,
            follow Luffy and his diverse crew as they sail the Grand Line in search of One Piece to become the Pirate King.`,
            genres: 'Action, Adventure, Fantasy, Shounen',
            episodes: 1094,
            characters: `Luffy, Zoro, Nami, Sanji,`,
            aired: { from: '1999', to: '2024' },
            image: `https://c0.klipartz.com/pngpicture/728/882/gratis-png-mono-d-luffy-vinsmoke-sanji-nami-roronoa-zoro-usopp-una-pieza.png`,
            rating: 9.4
        },
        {
            name: `Attack on Titan`,
            description:`After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction. Humans are nearly exterminated by giant creatures called Titans.`,
            genres: ` Adventure, Drama, Fantasy, Shounen`,
            episodes: 89,
            characters: `Eren, Mikasa, Armin, Levi`,
            aired: { from: '2013', to: '2023' },
            image: `https://cdn.imgbin.com/21/25/1/imgbin-eren-yeager-mikasa-ackerman-attack-on-titan-levi-armin-arlert-others-02s6BCVKHThh5PcYZV0XKwgE7.jpg`,
            rating: 9.7
        },
        {
            name: `Full Metal Alchemist: Brotherhood`,
            description: `The Elric brothers' mother is dead and their father has long since abandoned them. Deciding to perform a forbidden human transmutation to bring their mother back, they end up losing their bodies. 
            Now Edward must join the military in order to gain certain alchemical privileges, with his one goal being to restore his brother to his original state. But with war on the horizon it's only a matter of time before they are both forced to question their morals and ultimately decide the value of human life.`,
            genres: `Action, Drama, Mystery, Shounen`,
            episodes: 64,
            characters: `Edward, Alphonse, Roy, Winry`,
            aired: { from: '2009', to: '2010' },
            image: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a51c665f-0194-4385-b644-defb6224654d/dajhp7t-f3e65143-04aa-44e0-997f-4e094a3387d5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1MWM2NjVmLTAxOTQtNDM4NS1iNjQ0LWRlZmI2MjI0NjU0ZFwvZGFqaHA3dC1mM2U2NTE0My0wNGFhLTQ0ZTAtOTk3Zi00ZTA5NGEzMzg3ZDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HugYkLxsKLSrkbxd5wgKDmjA16orfbk1dloQW1oKqUk`,
            rating: 8.8
        },
        {
            name: `Dragon Ball Z`,
            description: `Dragon Ball Z follows the adventures of the adult Goku who, along with his companions, defends the earth against an assortment of villains ranging from intergalactic space fighters and conquerors, unnaturally powerful androids and near indestructible magical creatures.`,
            genres: `Action, Adventure, Fantasy, Shounen`,
            episodes: 291,
            characters: `Goku, Vegeta, Gohan, Piccolo`,
            aired: { from: '1989', to: '1996' },
            image: `https://i.pinimg.com/474x/f1/69/8b/f1698b9c23ca56a3b2f621fc7b57929a.jpg`,
            rating: 9.1
        },
        {
            name: `Death Note`,
            description: `Light Yagami is an ace student with great prospects and he's bored out of his mind. But all that changes when he finds the Death Note, a notebook dropped by a rogue Shinigami death god. Any human whose name is written in the notebook dies, and now Light has vowed to use the power of the Death Note to rid the world of evil. But when criminals begin dropping dead, the authorities send the legendary detective L to track down the killer. With L hot on his heels, will Light lose sight of his noble goal... or his life?`,
            genres: `Mystery, Psychological, Supernatural, Thriller`,
            episodes: 37,
            characters: `Light, L, Ryuk, Misa`,
            aired: { from: '2006', to: '2007' },
            image: `https://i.pngimg.me/thumb/f/720/comhiclipartxdtqg.jpg`,
            rating: 9.0
        },
        {
            name: `My Hero Academia`,
            description: `Izuku has dreamt of being a hero all his life, a lofty goal for anyone, but especially challenging for a kid with no superpowers. In a world where eighty percent of the population has some kind of super-powered “quirk,” Izuku was unlucky enough to be born completely normal. But that is not enough to stop him from enrolling in one of the worlds most prestigious hero academies.`,
            genres: `Action, Comedy, School, Shounen`,
            episodes: 138,
            characters: `Izuku, Bakugo, All Might, Todoroki`,
            aired: { from: '2016', to: '2023' },
            image:`https://i.pinimg.com/originals/6c/4f/20/6c4f204fa1b0620d7f580158e6aaa04d.png`,
            rating: 8.5
        },
        {
            name: `Solo Leveling`,
            description: `10 years ago, after the opening of "the Gate" that connected the real world with the monster world, some ordinary people gained the power to hunt monsters. They are called "Hunters". I am Sung Jin-Woo, an E-rank Hunter, known as the "World's Weakest". But everything changed when I discovered a hidden dungeon with the hardest difficulty. 
            I received a strange power, a quest log that only I can see, and a secret to leveling up. By completing quests and hunting monsters, I can rise from the weakest Hunter to the strongest S-rank Hunter!`,
            genres: `Action, Adventure, Fantasy`,
            episodes: 12,
            characters: `Sung Jin-Woo, Cha Hae-In, Go Gun-Hee, Igris`,
            aired: { from: '2024', to: '2024' }, 
            image: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f42f52f9-bf3b-49f4-9788-4cd9c4f3a166/dgoer5o-3c193ca3-3cc2-43bc-90a4-eeaace8db47d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y0MmY1MmY5LWJmM2ItNDlmNC05Nzg4LTRjZDljNGYzYTE2NlwvZGdvZXI1by0zYzE5M2NhMy0zY2MyLTQzYmMtOTBhNC1lZWFhY2U4ZGI0N2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.N75xrj85jWxT5q5V24cjmNYgp3lBafTiHyFPDuLXIyk`,
            rating: 9.6
        },
        {
            name: `Jujutsu Kaisen`,
            description:`The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers in order to kill a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host.`,
            genres: `Action, Adventure, Fantasy, Supernatural`,
            episodes: 47,
            characters: `Yuji, Megumi, Nobara, Gojo`,
            aired: { from: '2020', to: '2023' },
            image: `https://upload.wikimedia.org/wikipedia/en/2/27/Yuji_Itadori.png`,
            rating: 9.3
        },
    ]
        try {
            await Anime.insertMany(animes)
        console.log('Created animes!')}
        catch (error) {
            console.error(error)
        }
    }

const run = async () => {
    await main()
    db.close()
}
run()