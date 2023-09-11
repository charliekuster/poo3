import { User } from "./user";
import { Bike } from "./bike";
import { App } from "./app";
import { Rent } from "./rent";


const app = new App()
const bike = new Bike('caloi', 'speed', 100, 200, 150.5, 'My bike', 5, [])
const bike2 = new Bike('caloi mountain', 'mountain bike', 101, 201, 150.6, 'Bike Igor', 5, [])
const bike3 = new Bike('trek', 'bmx', 102, 202, 150.7, 'My bike bmx', 5, [])
const bike4 = new Bike('cannondale', 'speed', 103, 203, 150.8, 'My bike rapidona', 5, [])
const bike5 = new Bike('ahhhhhhhhh', 'ahhhhhhh', 104, 204, 150.9, 'My bike ahhhhhhhhhhhh', 5, [])
const bikeId = app.registerBike(bike)
const bikeId2 = app.registerBike(bike2)
const bikeId3 = app.registerBike(bike3)
const bikeId4 = app.registerBike(bike4)
const bikeId5 = app.registerBike(bike5)

app.listBikes();

const user1 = new User('Jose', 'jose@mail.com', '1234')
const user2 = new User('Maria', 'maria@mail.com', '12345')
const user3 = new User('Igor', 'igor@mail.com', '12346')
const user4 = new User('Dora', 'dora@mail.com', '12347')
const user5 = new User('Charlie', 'charli@mail.com', '12348')
app.registerUser(user1)
app.registerUser(user2)
app.registerUser(user3)
app.registerUser(user4)
app.registerUser(user5)

app.listUsers();

const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)
const today = new Date()
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const dayAfterTomorrow = new Date()
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)
const twoDaysFromToday = new Date()
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 3)

const Date2 = new Date(2023, 4, 1)
const tomorrow2 = new Date(2023, 4, 2)


const Date3 = new Date(2023, 7, 6)
const tomorrow3 = new Date(2023, 7, 7)

const Date4 = new Date(2023, 8, 8)
const tomorrow4 = new Date(2023, 8, 9)


app.rentBike(bikeId, 'jose@mail.com', yesterday, today)
app.rentBike(bikeId2, 'charli@mail.com', Date2, tomorrow2)
app.rentBike(bikeId3, 'maria@mail.com', Date3, tomorrow3)
app.rentBike(bikeId4, 'dora@mail.com', Date4, tomorrow4)
console.log('Antes do retorno:')

app.listRents();

app.returnBike(bikeId, 'jose@mail.com')
app.returnBike(bikeId2, 'charli@mail.com')
app.returnBike(bikeId3, 'maria@mail.com')
app.returnBike(bikeId4, 'dora@mail.com')
console.log('Depois do retorno:')

app.listRents();

