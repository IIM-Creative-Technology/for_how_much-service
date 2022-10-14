## For How Much :scroll: 

it's a node.js game that we created in 2 days during a node.js course :video_game: 

### Resume
The Goal of the game is to have the same number as the opponent; we can select sentences that are meant to be funny. It's a game to play with friends !! :vs:

## Requirment :passport_control: 
- [Node.js](https://nodejs.org/en/download/)
- Nodemon : 
```bash
npm install -g nodemon # or using yarn: yarn global add nodemon
```

## How to Use

Modify .env : 
```bash
MONGO_URI=mongodb+srv://admin:admin1234@cluster0.nzzihbr.mongodb.net/?retryWrites=true&w=majority
```
Command :
```bash
npm install
```
```bash
npm start
```

## Stack technique

Base de donnée MangoDB
Node.js

## Contributeurs :information_desk_person:	
- [MALATERRE Romainh](https://github.com/romainmltr)
- [DROUET Quentin](https://github.com/QuentinDrouet)
- [LECONTE Edgar](https://github.com/Edgarlct)
- [NICOLAS Edouard](https://github.com/wared2003)

## Utilisation API :
Socket.io :  
Node.js:

/ GET all available rooms */
```bash
router.get('/fetch/all', roomService.getAllRooms)
```

/ GET room with code /
```bash
router.get('/fetch/:code', roomService.getRoom)
```
/** POST create room/
```bash
router.post('/create', roomService.createRoom)
```
/ DELETE room with code /
```bash
router.delete('/delete/:code', roomService.deleteRoom)
```
/** leave room/
```bash
router.post('/leave/:code', roomService.leaveRoom)
```

 :yellow_heart: :yellow_heart:
