import { useEffect } from 'react'
import { BackHandler } from 'react-native'

export default function useCustomBacKHandler(callBack:()=>boolean) {
    useEffect(() => {
          BackHandler.addEventListener(
            "hardwareBackPress",
            callBack
          );
          return () =>
            BackHandler.removeEventListener(
              "hardwareBackPress",
              callBack
            );
        }, [])
}
