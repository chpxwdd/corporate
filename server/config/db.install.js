// ------------------------------------------------------------------------------------------
// install AUTH ACL ROLES
const APP_USERNAME_MEMBER = 'member'
const APP_EMAIL_MEMBER = 'member@local.domain'
const APP_USERNAME_ADMIN = 'admin'
const APP_EMAIL_ADMIN = 'admin@local.domain'
const APP_AUTH_PASSWORD = 'alkoklan'
const modelRole = mongoose.model('Role')

const memberRole = new modelRole({ title: 'member' })
memberRole.save()

const adminRole = new modelRole({ title: 'admin', parent: memberRole })
adminRole.save()

bcrypt.genSalt(10, (err, salt) => {
  if (err) {
    console.error('Users has not created', err)
    return false
  }
  bcrypt.hash(APP_AUTH_PASSWORD, salt, (err, hash) => {
    if (err) {
      console.error('User "member" has not created', err)
      return false
    }
    const modelAuth = mongoose.model('Auth')
    const memberAuth = new modelAuth({
      username: APP_USERNAME_MEMBER,
      email: APP_EMAIL_MEMBER,
      password: hash,
      role: memberRole,
    })
    memberAuth.save()
    const adminAuth = new modelAuth({
      username: APP_USERNAME_ADMIN,
      email: APP_EMAIL_ADMIN,
      password: hash,
      role: adminRole,
    })
    adminAuth.save()
  })
})
// ------------------------------------------------------------------------------------------
