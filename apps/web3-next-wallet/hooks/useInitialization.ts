import { useCallback, useEffect, useRef, useState } from 'react'
import { useSnapshot } from 'valtio'
import SettingsStore from '../store/SettingsStore'

export default function useInitialization() {
  const [initialized, setInitialized] = useState(false)
  const prevRelayerURLValue = useRef<string>('')

  const { relayerRegionURL } = useSnapshot(SettingsStore.state)

  const onInitialize = useCallback(async () => {
    try {
      SettingsStore.setEIP155Address('hejsan')
      SettingsStore.setCosmosAddress('hejsan')
      SettingsStore.setSolanaAddress('hejsan')
      SettingsStore.setPolkadotAddress('hejsan')
      SettingsStore.setNearAddress('hejsan')
      SettingsStore.setElrondAddress('hejsan')
      prevRelayerURLValue.current = relayerRegionURL

      await console.log(relayerRegionURL)

      setInitialized(true)
    } catch (err: unknown) {
      alert(err)
    }
  }, [relayerRegionURL])

  useEffect(() => {
    if (!initialized) {
      onInitialize()
    }
    if (prevRelayerURLValue.current !== relayerRegionURL) {
      setInitialized(false)
      onInitialize()
    }
  }, [initialized, onInitialize, relayerRegionURL])

  return initialized
}
