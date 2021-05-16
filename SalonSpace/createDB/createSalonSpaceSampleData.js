var db = db.getSiblingDB('SalonSpace')

// // SKILLS
// db.createCollection('skills')
// skillsCollection = db.getCollection("skills")
// skillsCollection.remove({})
// skillsCollection.insert(
// {
// 	skillID: 1,
// 	name: "Manicure",
// 	skillListID: [1, 2]
// }
// )
// skillsCollection.insert(
// {
// 	skillID: 2,
// 	name: "Pedicure",
// 	skillListID: [1]
// }
// )

// SALONS
db.createCollection('salons')
salonsCollection = db.getCollection("salons")
salonsCollection.remove({})
salonsCollection.insert(
{
	salonID: 1,
	name: "Nails & Spa",
	address: "1918 E Yesler Way Unit B, Seattle, WA 98122",
	salonListID: [1]
}
)
salonsCollection.insert(
{
	salonID: 2,
	name: "MC Nails",
	address: "2211 E Madison St, Seattle, WA 98112",
	salonListID: [2]
}
)

// REGISTERED USERS
db.createCollection('registeredUsers')
usersCollection = db.getCollection("registeredUsers")
usersCollection.remove({})
usersCollection.insert(
{
	registeredUserID: 1,
	email: "mamamaya@gmail.com",
	firstName: "Maya",
	lastName: "Tran",
	password: "testmaya",
	loginStatus: false
}
)
usersCollection.insert(
{
	registeredUserID: 2,
	email: "anyaphong@gmail.com",
	firstName: "Anya",
	lastName: "Phong",
	password: "testanya",
	loginStatus: false
}
)
usersCollection.insert(
{
	registeredUserID: 3,
	email: "deshaun@gmail.com",
	firstName: "DeShaun",
	lastName: "Jamieson",
	password: "testdeshaun",
	loginStatus: false
}
)
usersCollection.insert(
{
	registeredUserID: 4,
	email: "katiegoldstein@gmail.com",
	firstName: "Katie",
	lastName: "Goldstein",
	password: "testkatie",
	loginStatus: false
}
)
usersCollection.insert(
{
	registeredUserID: 5,
	email: "kenmiyamoto@gmail.com",
	firstName: "Ken",
	lastName: "Miyamoto",
	password: "testken",
	loginStatus: false
}
)
usersCollection.insert(
{
	registeredUserID: 6,
	email: "rupikaur@gmail.com",
	firstName: "Rupi",
	lastName: "Kaur",
	password: "testrupi",
	loginStatus: false
}
)
usersCollection.insert(
{
	registeredUserID: 7,
	email: "candacehernandez@gmail.com",
	firstName: "Candace",
	lastName: "Hernandez",
	password: "testcandace",
	loginStatus: false
}
)
usersCollection.insert(
{
	registeredUserID: 8,
	email: "margaretthompson@gmail.com",
	firstName: "Margaret",
	lastName: "Thompson",
	password: "testmargaret",
	loginStatus: false
}
)
usersCollection.insert(
{
	registeredUserID: 9,
	email: "denahassan@gmail.com",
	firstName: "Dena",
	lastName: "Hassan",
	password: "testdena",
	loginStatus: false
}
)
usersCollection.insert(
{
	registeredUserID: 10,
	email: "jamekafreeman@gmail.com",
	firstName: "Jameka",
	lastName: "Freeman",
	password: "testjameka",
	loginStatus: false
}
)

// TECHNICIANS
// skillListID, ratingListID, salonListID, languageListID may need to be arrays
db.createCollection('technicians')
techniciansCollection = db.getCollection("technicians")
techniciansCollection.remove({})
techniciansCollection.insert(
{
	registeredUserID: 1,
	technicianID: 1,
	skillList: ["Manicure", "Pedicure"],
	ratingListID: [1, 2],
	salonListID: [1],
	languageList: ["Vietnamese", "English"]
}
)
techniciansCollection.insert(
{
	registeredUserID: 2,
	technicianID: 2,
<<<<<<< HEAD
	name: "Anya",
	age: 30,
	skillList: ["Shellac", "Pedicure"],
	ratingListID: [2],
	salonListID: [2],
	languageList: ["Russian", "English"]
=======
	skillListID: 2,
	ratingListID: 2,
	salonListID: 2,
	languageListID: 2
>>>>>>> c57b31ef4323b96bf3a3a64eb0affbcc797d23c5
}
)
techniciansCollection.insert(
{
	registeredUserID: 5,
	technicianID: 3,
	skillListID: 2,
	ratingListID: 2,
	salonListID: 2,
	languageListID: 2
}
)
techniciansCollection.insert(
{
	registeredUserID: 7,
	technicianID: 4,
	skillListID: 2,
	ratingListID: 2,
	salonListID: 2,
	languageListID: 2
}
)
techniciansCollection.insert(
{
	registeredUserID: 10,
	technicianID: 5,
	skillListID: 2,
	ratingListID: 2,
	salonListID: 2,
	languageListID: 2
}
)


// LANGUAGES
// db.createCollection('languages')
// languagesCollection = db.getCollection("languages")
// languagesCollection.remove({})
// languagesCollection.insert(
// {
// 	languageID: 1,
// 	name: "English",
// 	languageListID:[2]
// }
// )
// languagesCollection.insert(
// {
// 	languageID: 2,
// 	name: "Thai",
// 	languageListID:[1, 2]
// }
// )
// languagesCollection.insert(
// {
// 	languageID: 3,
// 	name: "Spanish",
// 	languageListID:[]
// }
// )

// RATINGS
db.createCollection('ratings')
ratingsCollection = db.getCollection("ratings")
ratingsCollection.remove({})
ratingsCollection.insert(
{
	ratingID: 1,
	stars: 5,
	text: "",
	//ratingListID: [1]
}
)
ratingsCollection.insert(
{
	ratingID: 2,
	stars: 3,
	text: "I needed a quick manicure before my date. My mails look great but the service was way too slow.",
	//ratingListID: [1]
}
)
ratingsCollection.insert(
{
	ratingID: 3,
	stars: 4,
	text: "",
	//ratingListID: [2]
}
)

// CLIENTS
db.createCollection('clients')
clientsCollection = db.getCollection('clients')
clientsCollection.remove({})
clientsCollection.insert(
    {
        registeredUserID: 3,
        points: 42,
        ratingListID: [2, 3],
        discountListID: [1]
    }
)
clientsCollection.insert(
    {
        registeredUserID: 4,
        points: 87,
        ratingListID: [4],
        discountListID: [2, 3, 4]
    }
)
clientsCollection.insert(
    {
        registeredUserID: 6,
        points: 0,
        ratingListID: [], // new user, has not rated yet
        discountListID: []
    }
)
clientsCollection.insert(
    {
        registeredUserID: 8,
        points: 50,
        ratingListID: [5, 6],
        discountListID: [5, 6, 7, 8]
    }
)
clientsCollection.insert(
    {
        registeredUserID: 9,
        points: 0,
        ratingListID: [], // rating was deleted
        discountListID: [9, 10]
    }
)

// DISCOUNTS
<<<<<<< HEAD
db.createCollection('clients')
clientCollection = db.getCollection("clients")
clientCollection.remove({})
clientCollection.insert(
{
	discountID: 1,
    value: 5,
    used: false
}
)
clientCollection.insert(
{
	discountID: 2,
    value: 6,
    used: true
}
=======
db.createCollection('discounts')
discountsCollection = db.getCollection('discounts')
discountsCollection.remove({})
discountsCollection.insert(
    {
        discountID: 1,
        value: 10.00,
        used: false
    }
)
discountsCollection.insert(
    {
        discountID: 2,
        value: 15.00,
        used: false
    }
)
discountsCollection.insert(
    {
        discountID: 3,
        value: 5.00,
        used: true
    }
)
discountsCollection.insert(
    {
        discountID: 4,
        value: 5.00,
        used: false
    }
)
discountsCollection.insert(
    {
        discountID: 5,
        value: 25.00,
        used: true
    }
)
discountsCollection.insert(
    {
        discountID: 6,
        value: 25.00,
        used: false
    }
)
discountsCollection.insert(
    {
        discountID: 7,
        value: 10.00,
        used: true
    }
)
discountsCollection.insert(
    {
        discountID: 8,
        value: 5.00,
        used: false
    }
)
discountsCollection.insert(
    {
        discountID: 9,
        value: 25.00,
        used: true
    }
>>>>>>> c57b31ef4323b96bf3a3a64eb0affbcc797d23c5
)
discountsCollection.insert(
    {
        discountID: 10,
        value: 25.00,
        used: false
    }
)