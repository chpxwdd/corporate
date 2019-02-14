// ------------------------------------------------------------------------------------------
// install USER ACL ROLES
const USERNAME_MEMBER = 'member'
const EMAIL_MEMBER = 'member@local.domain'
const USERNAME_ADMIN = 'admin'
const EMAIL_ADMIN = 'admin@local.domain'
const USER_PASSWORD = 'alkoklan'
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
  bcrypt.hash(USER_PASSWORD, salt, (err, hash) => {
    if (err) {
      console.error('User "member" has not created', err)
      return false
    }
    const modelUser = mongoose.model('User')
    const memberUser = new modelUser({
      username: USERNAME_MEMBER,
      email: EMAIL_MEMBER,
      password: hash,
      role: memberRole,
    })
    memberUser.save()
    const adminUser = new modelUser({
      username: USERNAME_ADMIN,
      email: EMAIL_ADMIN,
      password: hash,
      role: adminRole,
    })
    adminUser.save()
  })
})
// ------------------------------------------------------------------------------------------
