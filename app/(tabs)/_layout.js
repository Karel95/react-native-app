/* eslint-disable prettier/prettier */
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen title="Home" />
      <Tabs.Screen title="About" />
    </Tabs>
  )
}

export default TabsLayout
