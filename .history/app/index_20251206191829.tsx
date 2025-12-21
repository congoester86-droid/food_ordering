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
          <Pressable className="bg-amber-600">
            <

          </Pressable>
          
        </View>

        )

      }}
    />
    </SafeAreaView>
  );
}
   