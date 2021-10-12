exports.linkResolver = doc => {
  if (doc.type === "article") {
    return `/${doc.uid}`
  }

  return "/"
}
