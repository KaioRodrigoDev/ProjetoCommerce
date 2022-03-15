import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function MyToggle() {
  const [enabled, setEnabled] = useState(false)

  function DarkMode() {
    dark = false
  }

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      onClick={DarkMode}
      className={`${
        enabled ? 'bg-teal-900' : 'bg-teal-700'
      } relative inline-flex items-center h-6 rounded-full w-11 ease-in-out duration-200`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-200`}
      />
    </Switch>
  )
}
