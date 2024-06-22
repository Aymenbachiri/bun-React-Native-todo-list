import { View, Text, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Home() {
  return (
    <View
      style={{ height: hp(100), width: wp(100) }}
      className="flex-1 justify-center items-center"
    >
      <Text className="text-3xl mb-6">Home</Text>
      <TextInput
        className="border w-1/2 rounded-md bg-slate-400 p-4"
        placeholder="add task"
      />
    </View>
  );
}
