const local = global.localStorage

// You must include an unique appName or Redux will not be able to retreive your persisted state
export default function setLocal (state, appName) {
  try {
    const serializedState = JSON.stringify(state)
    local.setItem(appName, serializedState)
  } catch (err) {
    console.log('Could not set state to localStorage')
  }
}
