import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import '../../../global.css'

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-background'>
      <Text className='text-xl font-bold text-success'>
        Welcome to NativeWind!
      </Text>
      <Link
        href='/onboarding'
        className='mt-4 rounded bg-primary text-white p-4'
      >
        Go to Onboarding
      </Link>

      <Link
        href='/(auth)/sign-in'
        className='mt-4 rounded bg-primary text-white p-4'
      >
        Go to Sign In
      </Link>

      <Link
        href='/(auth)/sign-up'
        className='mt-4 rounded bg-primary text-white p-4'
      >
        Go to Sign Up
      </Link>

      <Link href='/subscriptions/spotify'>Go to Spotify Subscription</Link>

      <Link
        href={{
          pathname: '/subscriptions/[id]',
          params: { id: 'spotify' },
        }}
      >
        Claude Max Subcription
      </Link>
    </View>
  )
}
