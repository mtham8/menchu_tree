const local = global.localStorage

// You must include an unique appName or Redux will not be able to retreive your persisted state
export default function loadLocal (appName) {
  try {
    const serializedState = local.getItem(appName)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return null
  }
}
