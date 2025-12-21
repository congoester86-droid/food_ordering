import {SafeAreaView} from "react-native-safe-area-context";
import { FlatList } from "react-native";
import { offers } from "@/constants";

 
export default function Index() {
  return (
    <SafeAreaView>
      <FlatList
      data={offers}
      renderItem={({item. index}) => {
        return

      }}
    />
    </SafeAreaView>
  );
}
   