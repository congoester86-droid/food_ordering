import {SafeAreaView} from "react-native-safe-area-context";
import { FlatList, Pressable, View} from "react-native";
 
export default function Index() {
  return (
    <SafeAreaView>
     <FlatList
      <FlatList
              data={offers}
              renderItem={({ item, index }) => {
                  const isEven = index % 2 === 0;
                  
     />

    </SafeAreaView>
    
  
  );
}