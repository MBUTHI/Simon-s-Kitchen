Chefs_name = "Simon"
items = ["fruits", "vegetables", "meat", "dairy", "grains"]
item_cost = [50, 30, 100, 80, 40]
balance = 1000
cart = []

print("Welcome to the kitchen! I'm Chef " + Chefs_name + ".")
print("Here's what we have in stock:")

def show_stock():
    for i in range(len(items)):
        print(f"{i+1}. {items[i].capitalize()} - ${item_cost[i]}")
    print("Your current balance is: $" + str(balance))

shopping = True

while shopping:
    show_stock()
    choice = input("Enter the item name you want to buy (or 'q' to quit): ").lower()

    if choice == "q":
        shopping = False
        break

    if choice in items:
        index = items.index(choice)
        cost = item_cost[index]
        if balance >= cost:
            balance -= cost
            cart.append(choice)
            print(f"✅ You bought {choice} for ${cost}.")
            print("💰 New balance: $" + str(balance))
        else:
            print("❌ Sorry, you don’t have enough balance.")
    else:
        print("⚠️ Invalid choice. Try again.")

print("\n🛒 Shopping complete!")
if cart:
    print("You bought: " + ", ".join(cart))
else:
    print("You didn’t buy anything.")
print("Final balance: $" + str(balance


print("Program Is Workings")
print(items)
print(balance)

print("This is version 5")
