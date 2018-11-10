exports.getGithubInfo = () => {
  let components = location.pathname.split('/')
  return {user: components[1], repo: components[2]}
}
