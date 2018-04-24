db = db.getSiblingDB('classSample')

collection = db.getCollection("carCollection")

collection.insert(
{
	vehicle: "camaro",
	speed: "120mph",
}
)

collection.insert(
{
	vehicle: "ferrari",
	speed: "180mph",
}
)
collection.insert(
{
	vehicle: "spacecraft",
	speed: "500mph",
}
)