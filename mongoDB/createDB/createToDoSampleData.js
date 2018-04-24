db = db.getSiblingDB('sampledb2')
db.createCollection('lists')
listsCollection = db.getCollection("lists")
listsCollection.remove({})
listsCollection.insert(
{
	  name: "Grocery List",
	  description: "Grocery List for home.",
	  listId: 1,
	  due: "04-27-2015",
	  state: "A",
	  owner: "israelh"
}
)
listsCollection.insert(
{
	  name: "Car Shopping List",
	  description: "Cars I need to try before buying a car.",
	  listId: 2,
	  due: "05-27-2015",
	  state: "A",
	  owner: "israelh"
}
)
listsCollection.insert(
{
	  name: "School Supply List",
	  description: "Supply list for school classes.",
	  listId: 3,
	  due: "08-27-2015",
	  state: "A",
	  owner: "israelh"
}
)
db.createCollection('tasks')
tasksCollection = db.getCollection("tasks")
tasksCollection.remove({})
tasksCollection.insert(
{
	listId : 1,
	tasks : [
	 {
	  description: "Pick up 2 cans of tomato",
	  taskId: 1,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Pick up 2 onions",
	  taskId: 2,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Pick up 1 box of spagetti",
	  taskId: 3,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Pick up 1 (3 litter) Coke",
	  taskId: 4,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Cook recipe http://recipe.com/spagetti",
	  taskId: 5,
	  shared: "wife",
	  status: "I"
	 }
	]
}
)
tasksCollection.insert(
{
	listId : 2,
	tasks : [
	 {
	  description: "Test drive a Porsche Boxter",
	  taskId: 1,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "To be gas consious, test drive a Tesla",
	  taskId: 2,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Ask your friend to give you a ride in his Lotus",
	  taskId: 3,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Ask to barrow the Mustang from my mom :-)",
	  taskId: 4,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Rent a Corvette",
	  taskId: 5,
	  shared: "N",
	  status: "I"
	 }
	]	
}
)
tasksCollection.insert(
{
	listId : 3,
	tasks : [
	 {
	  description: "Pick drawing boards from friend",
	  taskId: 1,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Buy pencils, pens, and notebooks from Staples",
	  taskId: 2,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Go to the MS Store to buy a new Surface 3",
	  taskId: 3,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Pick up a printer at Frys",
	  taskId: 4,
	  shared: "N",
	  status: "I"
	 },
	 {
	  description: "Get a couple of XBox Games to relax",
	  taskId: 5,
	  shared: "N",
	  status: "I"
	 }
	]	
}
)