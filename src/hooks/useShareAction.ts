import { Share } from "react-native";
import { useState } from 'react'

interface action{
    isShared: boolean ,
    error: boolean,
}
/**
 * This hooks is used to share the content of the app
 * It exponses a state of the share action and the error with a function to share the content 
 */
export default function useShareAction() {
    const [isShared, setIsShared] = useState<action>({isShared: false, error: false})
    const onShare = async (url: string) => {
        try {
          const result = await Share.share({
            url,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
                setIsShared({isShared: true, error: true})
            }
        } else if (result.action === Share.dismissedAction) {
              setIsShared({isShared: false, error: false})
          }
        } catch (error) {
            setIsShared({isShared: false, error: true})
        }
      };
    return [isShared, onShare] as const
}

