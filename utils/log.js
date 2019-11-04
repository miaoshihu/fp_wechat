const log_app = str => {
  console.log("App => " + str)
}

const log_index = str => {
  console.log("Page index => " + str)
}

const log_detail = str => {
  console.log("Page detail => " + str)
}

const log_needs = str => {
  console.log("Page needs => " + str)
}

const log_new = str => {
  console.log("Page new => " + str)
}

const log_self = str => {
  console.log("Page self => " + str)
}

const log_mylist = str => {
  console.log("Page mylist => " + str);
}

module.exports = {
  log_index: log_index,
  log_detail: log_detail,
  log_needs: log_needs,
  log_new: log_new,
  log_self: log_self,
  log_app: log_app,
  log_mylist: log_mylist,
}
