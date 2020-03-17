# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
menu1 = Menu.create(name: "Breakfast Menu")
menu1.items.create(name: "Pancakes")
menu1.items.create(name: "Waffles")
menu1.items.create(name: "French Toast")
menu1.items.create(name: "Eggs Benedict")
menu1.items.create(name: "Omelet")
menu1.items.create(name: "Avocodo Toast")

menu2 = Menu.create(name: "Lunch Menu")
menu2.items.creat(name: "Club Sandwich")
menu2.items.creat(name: "Cobb Salad")
menu2.items.creat(name: "Soup of the Day")
menu2.items.creat(name: "Chicken Cesear Salad")
menu2.items.creat(name: "Fish Tacos")
menu2.items.creat(name: "Pizza Slice")

menu3 = Menu.create(name: "Dinner Menu")
menu3.items.create(name: "Meatloaf")
menu2.items.creat(name: "Spaghetti")
menu2.items.creat(name: "Salmon and Rice")
menu2.items.creat(name: "Chicken Alfredo")
menu2.items.creat(name: "BBQ Burger")
menu2.items.creat(name: "Chicken Strips")

puts "data seeded"