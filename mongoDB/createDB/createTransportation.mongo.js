db = db.getSiblingDB('classSample')

collection = db.getCollection("carCollection")

collection.insert(
{
	vehicle: "prius",
	speed: "120mph",
}
)

collection.insert(
{
	vehicle: "porsche",
	speed: "180mph",
}
)
collection.insert(
{
	vehicle: "spaceship",
	speed: "400mph",
}
)