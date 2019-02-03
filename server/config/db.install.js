// ------------------------------------------------------------------------------------------
// install AUTH ACL ROLES
const APP_USERNAME_MEMBER = 'member'
const APP_EMAIL_MEMBER = 'member@local.domain'
const APP_USERNAME_ADMIN = 'admin'
const APP_EMAIL_ADMIN = 'admin@local.domain'
const APP_AUTH_PASSWORD = 'alkoklan'
const modelAuthAclRole = mongoose.model('AuthAclRole')

const memberAuthAclRole = new modelAuthAclRole({ title: APP_AUTH_MEMBER })
memberAuthAclRole.save()

const adminAuthAclRole = new modelAuthAclRole({ title: APP_AUTH_ADMIN, parent: memberAuthAclRole })
adminAuthAclRole.save()

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
    const modelAuthUser = mongoose.model('AuthUser')
    const memberAuthUser = new modelAuthUser({
      username: APP_USERNAME_MEMBER,
      email: APP_EMAIL_MEMBER,
      password: hash,
      role: memberAuthAclRole,
    })
    memberAuthUser.save()
    const adminAuthUser = new modelAuthUser({
      username: APP_USERNAME_ADMIN,
      email: APP_EMAIL_ADMIN,
      password: hash,
      role: adminAuthAclRole,
    })
    adminAuthUser.save()
  })
})
// ------------------------------------------------------------------------------------------
