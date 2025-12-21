import { offers } from "@/constants";
import {SafeAreaView} from "react-native-safe-area-context";
 
export default function Index() {
  return (
    <SafeAreaView>
      <FileList
      data={offers}
      renderItem={({item.index})}
      />
    </SafeAreaView>
  );
}
   