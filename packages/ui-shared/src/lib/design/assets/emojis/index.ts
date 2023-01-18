const emojis = new Map([
  ['bomb', '&#x1F4A3;'],
])

// emojis.get(john)
export default emojis

const john = { name: 'John Doe' },
  lily = { name: 'Lily Bush' },
  peter = { name: 'Peter Drucker' }

const userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [peter, 'subscriber'],
])

for (const role of userRoles.entries()) {
  console.log(`${role[0].name}: ${role[1]}`)
}

for (const [user, role] of userRoles.entries()) {
  console.log(`${user.name}: ${role}`)
}

userRoles.forEach((role, user) => console.log(`${user.name}: ${role}`))

const keys = [...userRoles.keys()]
console.log(keys)
