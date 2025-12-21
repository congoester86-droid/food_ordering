import {SafeAreaView} from "react-native-safe-area-context";
import {}
import { offers } from "@/constants";

 
export default function Index() {
  return (
    <SafeAreaView>
      <FileList
      data={offers}
      renderItem={({item.index})=>{

      }}
      />
    </SafeAreaView>
  );
}
   