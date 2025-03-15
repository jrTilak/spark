import Container from '@/components/common/container'
import SafeAreaView from '@/components/common/safe-area-view'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Text } from '@/components/ui/text'
import { useColorScheme } from '@/hooks/use-color-schema'
import { router } from 'expo-router'
import { ArrowLeftIcon, MoonIcon } from 'lucide-react-native'
import React from 'react'
import { View } from 'react-native'

const Settings = () => {
  const { isDark, toggleColorScheme } = useColorScheme()

  return (
    <SafeAreaView>
      <Container>
        <View className='flex-row justify-between items-center'>
          <Button
            size={"icon"}
            variant={"ghost"}
            className='rounded-full'
            onPress={() => { router.back() }}
          >
            <Icon icon={ArrowLeftIcon} color='foreground' />
          </Button>
          <Text>
            Settings
          </Text>
          <Text>
          </Text>
        </View>

        <View className='justify-center items-center p-6 gap-12'>
          <View className='flex-row items-center gap-2 justify-between w-full'>
            <Label
              nativeID='airplane-mode'
              onPress={() => {
                toggleColorScheme()
              }}
              className='flex flex-row items-center gap-2'
            >
              <Icon icon={MoonIcon} color='foreground' />
              <Text className='text-lg ml-2'>
                Dark Mode
              </Text>
            </Label>
            <Switch checked={isDark} onCheckedChange={
              () => {
                toggleColorScheme()
              }
            } nativeID='airplane-mode' />
          </View>
        </View>
      </Container>
    </SafeAreaView>
  )
}

export default Settings