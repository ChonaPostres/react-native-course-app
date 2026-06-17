import { Text, View, TouchableOpacity } from "react-native";
import { Link, Stack } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-slate-950 p-6">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="items-center mb-8">
        <View className="w-20 h-20 bg-indigo-950 rounded-full items-center justify-center mb-6 shadow-sm border border-indigo-900/30">
          <Feather name="shopping-bag" size={40} color="#6366F1" />
        </View>
        <Text className="text-3xl font-extrabold text-white text-center">
          Mi Tienda App
        </Text>
        <Text className="text-slate-400 text-base mt-2 text-center max-w-xs leading-5">
          Tu aplicación favorita de comercio electrónico
        </Text>
      </View>

      <Link href="/auth/login" asChild>
        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-indigo-600 px-8 py-3.5 rounded-2xl flex-row items-center justify-center shadow-lg shadow-indigo-950/50 w-full max-w-xs"
        >
          <Text className="text-white font-bold text-base mr-2">Ir al Login</Text>
          <Feather name="arrow-right" size={18} color="white" />
        </TouchableOpacity>
      </Link>
    </View>
  );
}
