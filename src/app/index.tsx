import { View, Text, TextInput } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl mb-6">Home</Text>
      <TextInput
        className="border w-1/2 rounded-md bg-slate-400 p-4"
        placeholder="add task"
      />
    </View>
  );
}
