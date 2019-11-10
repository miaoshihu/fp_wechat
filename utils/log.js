const log_app = str => {
  console.log("App => " + str)
}

const log_index = str => {
  console.log("Index => " + str)
}

const log_detail = str => {
  console.log("Detail => " + str)
}

const log_needs = str => {
  console.log("Needs => " + str)
}

const log_new = str => {
  console.log("New => " + str)
}

const log_self = str => {
  console.log("Self => " + str)
}

const log_mylist = str => {
  console.log("Mylist => " + str);
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
