function getStorageType(type: string) {
  return type == 'local' ? window.localStorage : window.sessionStorage
}

/**
 * @param  {Object}  value
 * @return {String}  value
 */
function serialize(value: any): string {
  if (typeof value == 'object') {
    return JSON.stringify(value)
  } else {
    return value
  }
}
/**
 * @param  {String} value
 * @return {String} value
 */
function deserialize(value: string): any {
  try {
    return JSON.parse(value)
  } catch (e) {
    return value
  }
}

function setItem(key: string, val: any, type: string): void {
  const storage = getStorageType(type)
  if (typeof val == 'object') {
    storage.setItem(key, serialize(val))
  } else {
    storage.setItem(key, val)
  }
}

function getItem(key: string, type: string): string {
  const storage: Storage = getStorageType(type)
  const result: string | null = storage.getItem(key)
  return deserialize(<string>result)
}

function removeItem(key: string, type: string): void {
  const storage = getStorageType(type)
  storage.removeItem(key)
}

function clearAll(type: string): void {
  const storage = getStorageType(type)
  storage.clear()
}


function localSet(key: string, val: any): void {
  setItem(key, val, 'local')
}
function sessionSet(key: string, val: any): void {
  setItem(key, val, 'session')
}

function localGet(key: string): any {
  return getItem(key, 'local')
}

function sessionGet(key: string): any {
  return getItem(key, 'session')
}

function localRemove(key: string): any {
  removeItem(key, 'local')
}
function sessionRemove(key: string): any {
  removeItem(key, 'session')
}

function localClear(): any {
  clearAll('local')
}
function sessionClear(): any {
  clearAll('session')
}

const localStore = {
  set: localSet,
  get: localGet,
  remove: localRemove,
  clear: localClear
}
const sessionStore = {
  set: sessionSet,
  get: sessionGet,
  remove: sessionRemove,
  clear: sessionClear
}
export { localStore, sessionStore }
