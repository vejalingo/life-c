let browserHasStorage = true

try {
  localStorage.setItem('test', 'test')
  localStorage.removeItem('test')
} catch (e) {
  browserHasStorage = false
}

const storage = {}

if (browserHasStorage) {
} else {
}

export default storage
