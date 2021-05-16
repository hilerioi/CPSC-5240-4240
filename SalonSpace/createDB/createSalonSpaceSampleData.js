db = db.getSiblingDB('SalonSpace')

// SKILLS
db.createCollection('skills')
skillsCollection = db.getCollection("skills")
skillsCollection.remove({})
skillsCollection.insert(
{
	skillID: 1,
	name: "Manicure",
	skillListID: [1, 2]
}
)
skillsCollection.insert(
{
	skillID: 2,
	name: "Pedicure",
	skillListID: [1]
}
)

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

// TECHNICIANS
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
	name: "Anya",
	age: 30,
	skillListID: ["Shellac", "Pedicure"],
	ratingListID: [2],
	salonListID: [2],
	languageListID: ["Russian", "English"]
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
clientCollection = db.getCollection("clients")
clientCollection.remove({})
clientCollection.insert(
{
	registeredUserID: 1,
    points: 100,
    ratingListID: 1,
    discountListID: 1
}
)
clientCollection.insert(
{
	registeredUserID: 2,
    points: 150,
    ratingListID: 2,
    discountListID: 2
}
)

// DISCOUNTS
db.createCollection('clients')
clientCollection = db.getCollection("clients")
clientCollection.remove({})
clientCollection.insert(
{
	discountID: 1,
    value: 5,
    used: False
}
)
clientCollection.insert(
{
	discountID: 2,
    value: 6,
    used: True
}
)
