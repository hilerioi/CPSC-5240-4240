db = db.getSiblingDB('SalonSpace')
db.createCollection('skills')
skillsDB = db.getCollection("skills")
skillsDB.remove({})
skillsDB.insert(
{
	skillID: 1,
	name: "Manicure",
	skillListID: [1, 2]
}
)
skillsDB.insert(
{
	skillID: 2,
	name: "Pedicure",
	skillListID: [1]
}
)
db.createCollection('salons')
salonsDB = db.getCollection("salons")
salonsDB.remove({})
salonsDB.insert(
{
	salonID: 1,
	name: "Nails & Spa",
	address: "1918 E Yesler Way Unit B, Seattle, WA 98122",
	salonListID: [1]
}
)
salonsDB.insert(
{
	salonID: 2,
	name: "MC Nails",
	address: "2211 E Madison St, Seattle, WA 98112",
	salonListID: [2]
}
)
db.createCollection('registeredUsers')
usersDB = db.getCollection("registeredUsers")
usersDB.remove({})
usersDB.insert(
{
	registeredUserID: 1,
	email: "mamamaya@gmail.com",
	firstName: "Maya",
	lastName: "Tran",
	password: "testmaya",
	loginStatus: false
}
)
usersDB.insert(
{
	registeredUserID: 2,
	email: "anyaphong@gmail.com",
	firstName: "Anya",
	lastName: "Phong",
	password: "testanya",
	loginStatus: false
}
)
db.createCollection('technicians')
techniciansDB = db.getCollection("technicians")
techniciansDB.remove({})
techniciansDB.insert(
{
	registeredUserID: 1,
	technicianID: 1,
	skillListID: 1,
	ratingListID: 1,
	salonListID: 1,
	languageListID: 1
}
)
techniciansDB.insert(
{
	registeredUserID: 2,
	technicianID: 2,
	name: "Anya",
	age: 30,
	skillListID: 2,
	ratingListID: 2,
	salonListID: 2,
	languageListID: 2
}
)
db.createCollection('languages')
languagesDB = db.getCollection("languages")
languagesDB.remove({})
languagesDB.insert(
{
	languageID: 1,
	name: "English",
	languageListID:[2]
}
)
languagesDB.insert(
{
	languageID: 2,
	name: "Thai",
	languageListID:[1, 2]
}
)
languagesDB.insert(
{
	languageID: 3,
	name: "Spanish",
	languageListID:[]
}
)
db.createCollection('ratings')
ratingsDB = db.getCollection("ratings")
ratingsDB.remove({})
ratingsDB.insert(
{
	ratingID: 1,
	stars: 5,
	text: "",
	ratingListID: [1]
}
)
ratingsDB.insert(
{
	ratingID: 2,
	stars: 3,
	text: "I needed a quick manicure before my date. My mails look great but the service was way too slow.",
	ratingListID: [1]
}
)
ratingsDB.insert(
{
	ratingID: 3,
	stars: 4,
	text: "",
	ratingListID: [2]
}
)