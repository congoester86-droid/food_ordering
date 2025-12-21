import {SafeAreaView} from "react-native-safe-area-context";
import { FlatList, Pressable, View } from "react-native";
import { offers } from "@/constants";

 
export default function Index() {
  return (
    <SafeAreaView>
      <FlatList
      data={offers}
      renderItem={({item. index}) => {

        return (
        <View>
          <Pressable
            className={cn("offer-card", isEven ? 'flex-row-reverse' : 'flex-row')}
                              style={{ backgroundColor: item.color }}
                              android_ripple={{ color: "#fffff22"}}
                          
          </Pressable>
        </View>

        )

      }}
    />
    </SafeAreaView>
  );
}
   