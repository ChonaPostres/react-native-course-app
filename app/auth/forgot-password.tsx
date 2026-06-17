import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { Link, useRouter, Stack } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const handleResetPassword = () => {
    if (!email) {
      alert("Por favor, ingresa tu correo electrónico.");
      return;
    }
    alert(`Enlace de recuperación enviado a: ${email}`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-slate-950"
    >
      <Stack.Screen options={{ headerShown: false }} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          className="px-6 py-12"
          showsVerticalScrollIndicator={false}
        >
          {/* Card Container */}
          <View className="bg-slate-900 rounded-3xl p-6 shadow-md border border-slate-800">
            {/* Back Button */}
            <TouchableOpacity
              onPress={() => router.back()}
              className="self-start p-2 rounded-xl bg-slate-950 border border-slate-800 mb-4"
              activeOpacity={0.7}
            >
              <Feather name="arrow-left" size={20} color="#94A3B8" />
            </TouchableOpacity>

            {/* Header */}
            <View className="items-center mb-8">
              <View className="w-16 h-16 bg-indigo-950/80 rounded-2xl items-center justify-center mb-4 border border-indigo-900/40">
                <Feather name="key" size={28} color="#6366F1" />
              </View>
              <Text className="text-2xl font-bold text-white text-center">
                ¿Olvidó su contraseña?
              </Text>
              <Text className="text-slate-400 text-sm mt-1.5 text-center px-4 leading-5">
                No te preocupes. Ingresa tu correo electrónico y te enviaremos un enlace para restablecerla.
              </Text>
            </View>

            {/* Email Field */}
            <View className="mb-6">
              <Text className="text-slate-300 text-sm font-medium mb-1.5 ml-1">
                Correo Electrónico
              </Text>
              <View
                className={`flex-row items-center border rounded-xl px-3.5 py-3 bg-slate-950/40 ${
                  isEmailFocused ? "border-indigo-500 bg-slate-950/80" : "border-slate-800"
                }`}
              >
                <Feather name="mail" size={20} color={isEmailFocused ? "#6366F1" : "#64748B"} />
                <TextInput
                  placeholder="ejemplo@correo.com"
                  placeholderTextColor="#64748B"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  className="flex-1 text-slate-100 text-base font-normal ml-3 p-0"
                />
              </View>
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              onPress={handleResetPassword}
              activeOpacity={0.85}
              className="bg-indigo-600 rounded-xl py-3.5 mb-6 items-center shadow-lg shadow-indigo-950/50"
            >
              <Text className="text-white font-bold text-base">Enviar Enlace</Text>
            </TouchableOpacity>

            {/* Back to Login Link */}
            <View className="flex-row justify-center items-center">
              <Link href="/auth/login" asChild>
                <TouchableOpacity activeOpacity={0.7} className="flex-row items-center">
                  <Feather name="chevron-left" size={16} color="#818CF8" className="mr-1" />
                  <Text className="text-indigo-400 font-bold text-sm">
                    Volver al inicio de sesión
                  </Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
